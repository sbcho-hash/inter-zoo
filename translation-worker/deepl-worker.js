export default {
  async fetch(request, env) {
    const headers = corsHeaders(env, request);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return json({ error: "Use POST /translate" }, 405, headers);
    }

    try {
      if (!env.DEEPL_API_KEY) {
        return json({ error: "DEEPL_API_KEY is not configured in Worker Secrets." }, 500, headers);
      }

      const body = await request.json();
      const text = String(body.text || "").trim();
      const sourceLang = normalizeSource(body.source_lang || body.sourceLang || "");
      const targetLang = normalizeTarget(body.target_lang || body.targetLang || "");

      if (!text) return json({ error: "text is required" }, 400, headers);
      if (!targetLang) return json({ error: "target_lang is required" }, 400, headers);
      if (text.length > 4500) return json({ error: "text is too long. Keep it under 4500 characters." }, 413, headers);

      const apiHost = env.DEEPL_API_HOST || "https://api-free.deepl.com";
      const endpoint = apiHost.replace(/\/$/, "") + "/v2/translate";

      const payload = {
        text: [text],
        target_lang: targetLang,
        preserve_formatting: true
      };
      if (sourceLang) payload.source_lang = sourceLang;

      const deepl = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Authorization": "DeepL-Auth-Key " + env.DEEPL_API_KEY,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await deepl.json().catch(() => ({}));
      if (!deepl.ok) {
        return json({ error: data.message || data.error || "DeepL request failed", status: deepl.status }, deepl.status, headers);
      }

      const first = data.translations && data.translations[0];
      return json({
        text: first?.text || "",
        detected_source_language: first?.detected_source_language || sourceLang || null,
        provider: "deepl"
      }, 200, headers);
    } catch (error) {
      return json({ error: error.message || "Unexpected error" }, 500, headers);
    }
  }
};

function normalizeSource(lang) {
  const v = String(lang || "").toUpperCase();
  if (v.startsWith("KO")) return "KO";
  if (v.startsWith("EN")) return "EN";
  return v || undefined;
}

function normalizeTarget(lang) {
  const v = String(lang || "").toUpperCase();
  if (v.startsWith("KO")) return "KO";
  if (v === "EN" || v === "EN-US" || v.startsWith("EN")) return "EN-US";
  return v || undefined;
}

function corsHeaders(env, request) {
  const origin = request.headers.get("Origin") || "*";
  const allowed = env.ALLOWED_ORIGIN || "*";
  const allowOrigin = allowed === "*" ? "*" : (allowed.split(",").map(x => x.trim()).includes(origin) ? origin : allowed.split(",")[0].trim());
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...headers, "Content-Type": "application/json; charset=utf-8" }
  });
}
