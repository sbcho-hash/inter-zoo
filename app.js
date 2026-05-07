const STORAGE_KEY = "expo_field_note_v5";
const GUIDE_STORAGE_KEY = "expo_guide_checks_v5";
const LEGACY_STORAGE_KEYS = [atob("dmx1eF9leHBvX2ZpZWxkX25vdGVfdjI=")];
const LEGACY_GUIDE_STORAGE_KEYS = [atob("dmx1eF9leHBvX2d1aWRlX2NoZWNrc192NA==")];

const CHECKS = [
  "프라이빗 라벨 가능성", "자사와 유사 컨셉", "신제형/신포장", "기능성 표현 방식",
  "원료 조합 참고", "수출 전략 참고", "진열/패키지 우수", "소비자 니즈 명확", "보고서 포함 후보"
];
const TAGS = ["신제형", "신포장", "기능성표현", "원료", "수출", "PB/OEM", "진열", "벤치마킹", "소비자니즈"];

const GUIDE = {
  purpose: [
    "글로벌 펫 시장의 트렌드를 확인하고, 향후 당사 제품기획에 활용할 인사이트를 확보한다.",
    "기능성 제품의 표현 방식, 제형 트렌드, 패키지 마케팅 구조, 수출 제품 전략을 현장에서 확인한다.",
    "해외 브랜드와 당사 제품을 비교하여 이미 잘하고 있는 부분과 보완이 필요한 부분을 구분한다.",
    "글로벌 브랜드의 제품 설계 방식과 소비자 설득 구조를 직접 확인하여 신제품 기획과 브랜드 개선 기준으로 활용한다."
  ],
  topQuestions: [
    ["글로벌 펫 시장의 트렌드는 무엇인가?", "기능성, 제형, 패키지, 지속가능성, 펫푸드 기술 등 반복적으로 나타나는 변화를 확인"],
    ["해외 브랜드는 같은 기능을 어떻게 다르게 설득하는가?", "원료, 제형, 급여 편의성, 전문성, 패키지 언어 중 무엇을 중심으로 푸는지 확인"],
    ["당사와 비교했을 때 차이는 무엇인가?", "해외는 이미 하지만 우리는 아직 하지 않는 것, 우리는 하지만 해외가 더 잘 표현하는 것 확인"],
    ["당사가 아직 소구하지 못한 소비자 니즈는 무엇인가?", "편리함, 안심, 전문성, 프리미엄, 죄책감 해소 등 구매 이유 확인"],
    ["제품기획·패키지·수출 전략에 적용 가능한 구조는 무엇인가?", "전면 메시지, SKU 체계, 정보 배치, 수출용 표현 구조 확인"]
  ],
  focus: [
    {
      title:"① 시장의 트렌드는 어디로 움직이고 있는가?",
      core:"글로벌 펫 시장에서 반복적으로 나타나는 변화는 무엇인가?",
      questions:["기능성은 어떤 언어로 표현되고 있는가?", "어떤 기능이 반복적으로 등장하고 있는가?", "패키지 언어는 더 직관적으로 가는가, 더 전문적으로 가는가?", "건강, 지속가능성, 펫푸드 기술, 급여 편의성 키워드는 어느 정도 비중인가?", "같은 니즈를 브랜드별로 어떤 방식으로 풀고 있는가?", "제품 제형 트렌드는 어떻게 변하고 있는가?", "브랜드들이 어떤 소비자 불안을 해결하려 하는가?"],
      checks:[["기능성 표현","직접 효능 표현인지, support성 표현인지, 원료 중심인지, 소비자 문제 중심인지"],["기능성 카테고리","장, 피부, 관절, 구강, 진정, 체중, 면역 등 반복적으로 보이는 기능"],["제형 변화","사료, 간식, 츄어블, 파우더, 토퍼, 소스, 액상, 스틱 등"],["패키지 언어","직관적 표현, 전문적 표현, 감성적 표현, 수의학적 표현"],["시장 키워드","건강, 지속가능성, 휴먼그레이드, 기능성, 편의성, 기술 기반 펫푸드"],["소비자 불안","급여 불편, 건강 걱정, 기호성 불안, 죄책감, 전문성 부족"]],
      outputs:["글로벌 펫 시장 핵심 트렌드 3~5가지", "반복적으로 등장한 기능성 카테고리", "기능성 표현 방식 사례", "제형 트렌드 변화 사례"]
    },
    {
      title:"② 우리와 비교했을 때의 기회와 격차는 무엇인가?",
      core:"우리 기준에서 무엇이 기회이고 무엇이 약점인가?",
      questions:["해외는 이미 하고 있는데 우리는 아직 하지 않는 것은 무엇인가?", "우리는 하고 있지만 해외 브랜드가 더 잘 표현하는 것은 무엇인가?", "우리 컨셉과 비슷하지만 더 세련되게 설계한 브랜드는 어디인가?", "지금 당장은 어렵지만 방향성 참고 가치가 큰 것은 무엇인가?", "우리가 더 좋게 만들 수 있는 포인트는 무엇인가?", "해외는 이미 쓰고 있지만 국내에서는 아직 덜 보이는 구조는 무엇인가?"],
      checks:[["제품 설계","기능, 원료, 제형, 급여 방식이 당사 제품과 어떻게 다른가"],["메시지 구조","당사보다 소비자가 더 쉽게 이해할 수 있게 표현했는가"],["패키지 구조","SKU 구분, 기능 전달, 정보 배치가 더 직관적인가"],["브랜드 확장성","시리즈 제품으로 확장하기 쉬운 구조인가"],["카테고리 공백","국내에서는 약하지만 해외에서 커지고 있는 영역인가"],["실행 가능성","당사가 단기 또는 중장기적으로 적용 가능한가"]],
      outputs:["해외 브랜드가 더 잘한 포인트", "당사와 다른 새로운 카테고리 또는 표현 방식", "단기 적용 가능 포인트", "중장기 참고 포인트"]
    },
    {
      title:"③ 아직 언어화하지 못한 소비자 니즈는 무엇인가?",
      core:"제품이 어떤 소비자 불안과 욕구를 해결하고 있는가?",
      questions:["이 제품은 소비자에게 무엇을 팔고 있는가?", "편리함을 파는가? 전문성을 파는가? 프리미엄을 파는가?", "반려인의 죄책감 해소를 파는가?", "건강 걱정, 급여 실패, 성분 불안을 줄여주는가?", "소비자가 이 제품을 사면서 스스로 어떤 만족을 느끼게 만드는가?"],
      checks:[["편리함","급여가 쉽다, 휴대가 쉽다, 보관이 쉽다, 섞어 먹이기 쉽다"],["안심","성분이 명확하다, 원산지가 보인다, 불필요한 성분을 뺐다"],["전문성","수의사 추천, 기능별 설계, 과학적 포뮬러, 임상적 근거"],["프리미엄","고급 원료, 휴먼그레이드, 프리미엄 패키지, 고급스러운 톤"],["죄책감 해소","간식이지만 건강하게 줄 수 있다, 보상과 관리가 동시에 가능하다"],["기호성 불안","잘 먹는다는 메시지, picky eater 대응, 맛 강조"],["건강 걱정","피부, 장, 관절, 구강, 체중, 진정 등 관리 포인트 제시"]],
      outputs:["소비자 불안을 표현하는 방식", "당사가 아직 충분히 쓰지 못한 소비자 언어", "제품 기능보다 앞에 내세우는 구매 이유", "패키지·상세페이지·영업자료 응용 메시지"]
    },
    {
      title:"④ 앞으로의 기획에 참고할 힌트는 무엇인가?",
      core:"당사의 제품기획 기준을 바꿀 만한 신호가 있는가?",
      questions:["제품명보다 메시지 구조가 더 중요해지고 있는가?", "기능성보다 급여 편의성에 중점을 두고 있는가?", "지속가능성은 부가 요소가 아니라 기본값이 되어가고 있는가?", "기능성 제품도 전문성보다 직관성이 더 중요해지고 있는가?", "소비자는 원료명보다 ‘내가 왜 사야 하는지’를 더 빨리 이해하길 원하는가?", "기능, 원료, 타깃, 제형 중 무엇이 가장 앞에 배치되고 있는가?"],
      checks:[["제품명","기능을 설명하는가, 감성을 전달하는가, 브랜드 체계를 강화하는가"],["메시지","소비자가 3~5초 안에 제품 용도를 이해할 수 있는가"],["기능성","직접 말하는가, 관리·support·balance처럼 완화해서 말하는가"],["급여 편의성","제품 구매 이유에서 편의성이 얼마나 중요하게 보이는가"],["지속가능성","부가 메시지인지, 브랜드의 기본 전제인지"],["SKU 구조","기능별, 연령별, 증상별, 원료별, 급여 상황별로 어떻게 나누는가"],["브랜드 블록","진열 시 한눈에 같은 브랜드로 보이는가"]],
      outputs:["제품기획 기준에 반영할 참고 자료", "제품명·패키지·기능 표현·SKU 설계 개선 힌트", "향후 신제품 기획 시 우선 고려 기준", "바꿔야 할 방식과 지켜봐야 할 방식 구분"]
    }
  ],
  commonQuestions: ["이 제품은 정확히 어떤 불편을 해결하는가?", "기능을 어떤 방식으로 풀었는가?", "원료, 제형, 패키지, 메시지 중 무엇이 핵심 차별점인가?", "소비자가 3초 안에 이해할 수 있게 만들었는가?", "우리보다 더 잘한 점은 무엇인가? 표현인가, 패키지인가?", "당사가 바로 응용할 수 있는 부분은 무엇인가?", "지금은 어렵지만 장기적으로 참고할 만한 부분은 무엇인가?"],
  boothGrades: [["A","반드시 방문",["당사 제품군과 직접 연관성이 높음", "기능성·제형·패키지·브랜드 구조 중 명확한 참고 포인트가 있음", "OEM/ODM 또는 수출 연결 가능성이 있음"]],["B","가능하면 방문",["직접 사업화 가능성은 낮지만 시장 변화 신호가 있음", "당사와 비교할 만한 메시지나 패키지 구조가 있음", "향후 기획 참고 가치가 있음"]],["C","사진·간단 메모 중심",["흥미로운 요소는 있으나 당사 연관성이 낮음", "아이디어 차원에서만 참고 가능", "깊은 상담보다 사진 기록 위주로 충분함"]]],
  packageChecklist: [["1순위: 즉시 이해 가능성", ["5초 안에 무엇을 하는 제품인지 보이는가?", "기능, 타깃, 급여 목적이 직관적으로 드러나는가?", "제품명이 아니라 전면 메시지만 봐도 용도가 이해되는가?", "주요 기능이 너무 어렵거나 전문적인 용어에 묻혀 있지 않은가?", "SKU 구분이 쉬운가?", "맛, 기능, 연령, 타깃이 명확히 구분되는가?"]],["2순위: 시리즈 확장성과 진열성", ["시리즈 확장이 쉬운 레이아웃인가?", "기능별, 맛별, 연령별 확장이 가능한 디자인 체계인가?", "진열 시 한 줄로 놓였을 때 브랜드 블록이 형성되는가?", "같은 브랜드 제품임이 한눈에 보이는가?", "SKU가 많아져도 복잡해 보이지 않는가?", "컬러, 아이콘, 숫자, 기능명이 체계적으로 쓰이고 있는가?"]],["3순위: 정보 충돌과 브랜드 인상", ["기능, 원료, 타깃이 서로 충돌하지 않는가?", "예: 저지방인데 고급 간식 이미지가 과하게 강하지 않은가?", "전문성을 말하면서 지나치게 캐주얼하게 보이지 않는가?", "정보가 많아도 복잡해 보이지 않는가?", "원료, 기능, 급여법, 주의사항의 위계가 잘 잡혀 있는가?", "프리미엄, 전문성, 친근함 중 어떤 인상을 주는가?", "해당 인상이 제품 카테고리와 맞는가?"]]],
  functionWays: [["원료 중심","특정 기능성 원료를 전면에 내세우는가?"],["제형 중심","기존과 다른 형태로 급여 편의성을 높였는가?"],["급여 상황 중심","산책 후, 외출 전, 식사 보조 등 사용 상황을 제안하는가?"],["전문성 중심","수의사 추천, 기능별 포뮬러, 과학적 근거를 강조하는가?"],["패키지 중심","기능을 패키지만으로 직관적으로 이해시키는가?"],["감성 중심","보호자의 걱정, 죄책감, 안심 욕구를 건드리는가?"],["브랜드 구조 중심","기능별 라인업을 체계적으로 구성했는가?"]],
  oemChecklist: [["거래 형태","PB, OEM, ODM이 가능한가?"],["MOQ","최소 발주 수량은 어느 정도인가?"],["커스터마이징","패키지, 제형, 원료 변경이 가능한가?"],["포뮬러 변경","기능성 원료나 함량 조정이 가능한가?"],["제형 변경","츄어블, 파우더, 소스, 토퍼 등 제형 변경이 가능한가?"],["수출 경험","현재 어느 국가에 수출하고 있는가?"],["인증","보유 인증, 품질 기준, 제조시설 기준은 무엇인가?"],["리드타임","샘플, 초도 생산, 본생산까지 기간은 어느 정도인가?"],["차별성","국내 제조사와 비교했을 때 강점은 무엇인가?"],["현실성","당사 단가, 수량, 규제 조건에 맞출 수 있는가?"]],
  reportTemplates: [
    {title:"① 이번 전시의 핵심 변화 3~5가지", headers:["핵심 변화","관찰 내용","대표 사례","당사 시사점"], rows:[["기능성 표현 변화","직접 효능보다 support성 표현 증가","브랜드 A, B","당사 패키지 문구 개선 필요"],["급여 편의성 강화","츄어블, 토퍼, 파우더 제형 확대","브랜드 C","기능성 제품도 급여 편의성 강조 필요"],["패키지 직관성 강화","3초 안에 기능 이해 가능한 구조","브랜드 D","전면 메시지 단순화 필요"]]},
    {title:"② 동일 기능을 다르게 푼 사례", headers:["기능","브랜드별 접근 방식","시사점"], rows:[["피부","원료 중심 / 수분 장벽 메시지 / 알러지 안심 표현","원료보다 소비자 불안 중심 표현 가능"],["장","프로바이오틱스 / 프리바이오틱스 / 소화 편의성 / 변 상태 표현","결과 체감 표현이 중요"],["구강","해조류 / 아연 / 효소 / 씹는 구조 / 입냄새 메시지","원료보다 사용 편의성과 체감 메시지가 중요"],["진정","테아닌 / 허브 / 상황별 급여 / 스트레스 완화 표현","특정 상황보다 일상 컨디션 관리로 확장 가능"]]},
    {title:"③ 당사 적용 가능 기회 영역", headers:["구분","내용","적용 가능성"], rows:[["바로 적용","패키지 전면 메시지 개선, SKU 구분 방식, support성 표현","단기"],["조건부 적용","신규 제형, 기능성 원료 조합, OEM/ODM 협업","중기"],["장기 참고","지속가능성 패키지, 글로벌 수출용 브랜드 구조","장기"]]},
    {title:"④ 수출 관점 참고 포인트", headers:["항목","확인 내용","당사 적용 방향"], rows:[["패키지 언어","짧고 직관적인 영어 표현","수출용 전면 문구 개선"],["SKU 체계","기능별 컬러·아이콘 구분","해외 바이어용 라인업 정리"],["정보 배치","원료, 기능, 급여법의 명확한 위계","패키지 후면 구조 개선"],["규제 안정성","직접 효능보다 support성 표현 사용","기능성 문구 리스크 완화"]]}
  ]
};

let booths = load();
let editingPhotos = [];
let editingAudios = [];
let mediaRecorder = null;
let audioChunks = [];
let currentStream = null;

const $ = (id) => document.getElementById(id);

function load(){
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if(!raw){
      const legacyKey = LEGACY_STORAGE_KEYS.find(key => localStorage.getItem(key));
      if(legacyKey){
        raw = localStorage.getItem(legacyKey);
        localStorage.setItem(STORAGE_KEY, raw);
      }
    }
    return JSON.parse(raw || "[]");
  }
  catch(e){ return []; }
}
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(booths)); render(); }
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function today(){ return new Date().toISOString().slice(0,10); }
function escapeHtml(s="") { return String(s).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }

function init(){
  renderGuide();
  renderReportTemplates();
  $("checks").innerHTML = CHECKS.map((c,i)=>`<label class="check"><input type="checkbox" value="${escapeHtml(c)}" id="check${i}">${escapeHtml(c)}</label>`).join("");
  $("tagFilter").innerHTML += TAGS.map(t=>`<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");
  document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.page)));
  $("startBoothBtn").onclick = () => { showPage("boothPage"); openDialog(); };
  $("goReportBtn").onclick = () => showPage("reportPage");
  $("newBoothBtn").onclick = () => openDialog();
  $("closeDialogBtn").onclick = closeDialog;
  $("cancelBtn").onclick = closeDialog;
  $("boothForm").onsubmit = handleSubmit;
  $("deleteBoothBtn").onclick = deleteCurrent;
  $("searchInput").oninput = render;
  $("statusFilter").onchange = render;
  $("tagFilter").onchange = render;
  $("copyReportBtn").onclick = copyReport;
  $("downloadReportBtn").onclick = downloadReport;
  $("exportBtn").onclick = exportJson;
  $("importInput").onchange = importJson;
  $("clearBtn").onclick = clearAll;
  $("photoInput").onchange = handlePhotos;
  $("cameraInput").onchange = handlePhotos;
  $("recordBtn").onclick = toggleRecording;
  ["bizScore","newScore","fitScore"].forEach(id=>{
    $(id).oninput = () => $(id+"Val").textContent = $(id).value;
  });
  registerSW();
  setupInstall();
  render();
}
document.addEventListener("DOMContentLoaded", init);

function showPage(pageId){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active-page"));
  $(pageId).classList.add("active-page");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active", b.dataset.page===pageId));
  window.scrollTo({top:0, behavior:"smooth"});
}

function getGuideState(){
  try {
    let raw = localStorage.getItem(GUIDE_STORAGE_KEY);
    if(!raw){
      const legacyKey = LEGACY_GUIDE_STORAGE_KEYS.find(key => localStorage.getItem(key));
      if(legacyKey){
        raw = localStorage.getItem(legacyKey);
        localStorage.setItem(GUIDE_STORAGE_KEY, raw);
      }
    }
    return JSON.parse(raw || "{}");
  } catch(e){ return {}; }
}
function setGuideState(state){ localStorage.setItem(GUIDE_STORAGE_KEY, JSON.stringify(state)); }
function guideCheck(id, label, sub=""){
  const state = getGuideState();
  const checked = state[id] ? "checked" : "";
  return `<label class="check-row"><input type="checkbox" data-guide-check="${id}" ${checked}><span class="check-label"><strong>${escapeHtml(label)}</strong>${sub?`<span>${escapeHtml(sub)}</span>`:""}</span></label>`;
}
function renderGuide(){
  const focusHtml = GUIDE.focus.map((f,idx)=>`<details class="guide-detail" ${idx===0?"open":""}>
    <summary><span class="summary-main">${escapeHtml(f.title)}<small>${escapeHtml(f.core)}</small></span><span class="chev">⌄</span></summary>
    <div class="details-body">
      <div class="mini-title">세부 질문</div>
      ${f.questions.map((q,i)=>guideCheck(`focus-${idx}-q-${i}`, q)).join("")}
      <div class="mini-title">현장에서 확인할 항목</div>
      ${f.checks.map((c,i)=>guideCheck(`focus-${idx}-c-${i}`, c[0], c[1])).join("")}
      <div class="mini-title">가져올 결과물</div>
      <div class="chips">${f.outputs.map(o=>`<span class="chip">${escapeHtml(o)}</span>`).join("")}</div>
    </div>
  </details>`).join("");

  const gradesHtml = GUIDE.boothGrades.map(g=>`<div class="grade ${g[0]}"><div class="grade-head"><span class="grade-badge">${g[0]}</span><div><h3>${escapeHtml(g[1])}</h3><p class="meta">${g[0]}등급 기준</p></div></div><ul class="guide-list">${g[2].map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>`).join("");

  $("guideRoot").innerHTML = `
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">목적</p><h2>참관 목적</h2></div></div>
      <div class="card guide-card"><ul class="guide-list">${GUIDE.purpose.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
    </section>
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">핵심 질문</p><h2>이번 참관에서 답을 가져올 질문</h2></div></div>
      <div class="guide-grid">${GUIDE.topQuestions.map((q,i)=>`<div class="question-card"><span class="num">${i+1}</span><div><strong>${escapeHtml(q[0])}</strong><p class="meta">${escapeHtml(q[1])}</p></div></div>`).join("")}</div>
    </section>
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">현장 체크</p><h2>4개 관찰 축</h2><p class="hint">체크한 항목은 이 기기에 저장됩니다.</p></div></div>
      ${focusHtml}
    </section>
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">공통 질문</p><h2>제품을 볼 때마다 던질 질문</h2></div></div>
      <div class="card guide-card">${GUIDE.commonQuestions.map((q,i)=>guideCheck(`common-${i}`, q)).join("")}</div>
    </section>
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">방문 우선순위</p><h2>부스 A/B/C 판단 기준</h2></div></div>
      <div class="grade-grid">${gradesHtml}</div>
    </section>
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">패키지</p><h2>패키지 디자인 참고 체크리스트</h2></div></div>
      ${GUIDE.packageChecklist.map((p,pi)=>`<details class="guide-detail"><summary><span class="summary-main">${escapeHtml(p[0])}<small>패키지 관찰 기준</small></span><span class="chev">⌄</span></summary><div class="details-body">${p[1].map((x,i)=>guideCheck(`package-${pi}-${i}`, x)).join("")}</div></details>`).join("")}
    </section>
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">동일 기능 비교</p><h2>같은 기능을 다르게 푸는 방식</h2></div></div>
      <div class="table-wrap"><table><thead><tr><th>방식</th><th>확인 질문</th></tr></thead><tbody>${GUIDE.functionWays.map(r=>`<tr><td><strong>${escapeHtml(r[0])}</strong></td><td>${escapeHtml(r[1])}</td></tr>`).join("")}</tbody></table></div>
    </section>
    <section class="guide-block">
      <div class="section-title"><div><p class="eyebrow">상담</p><h2>OEM / ODM / PB 가능성 체크리스트</h2></div></div>
      <div class="table-wrap"><table><thead><tr><th>구분</th><th>확인 질문</th></tr></thead><tbody>${GUIDE.oemChecklist.map(r=>`<tr><td><strong>${escapeHtml(r[0])}</strong></td><td>${escapeHtml(r[1])}</td></tr>`).join("")}</tbody></table></div>
    </section>`;
  document.querySelectorAll("[data-guide-check]").forEach(chk=>chk.addEventListener("change", e=>{
    const state = getGuideState();
    state[e.target.dataset.guideCheck] = e.target.checked;
    setGuideState(state);
    showToast(e.target.checked ? "체크했습니다." : "체크 해제했습니다.");
  }));
}

function renderReportTemplates(){
  $("reportTemplateRoot").innerHTML = GUIDE.reportTemplates.map(t=>`<article class="template-card"><h3>${escapeHtml(t.title)}</h3><div class="table-wrap"><table><thead><tr>${t.headers.map(h=>`<th>${escapeHtml(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${escapeHtml(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></article>`).join("");
}

function render(){
  renderStats();
  renderList();
  $("reportText").value = makeReport();
}
function score(b){ return ((Number(b.bizScore||0)+Number(b.newScore||0)+Number(b.fitScore||0))/3); }
function renderStats(){
  $("totalCount").textContent = booths.length;
  $("reportCount").textContent = booths.filter(b=>b.status==="report").length;
  $("priorityCount").textContent = booths.filter(b=>b.priority==="A").length;
  $("avgScore").textContent = booths.length ? (booths.reduce((a,b)=>a+score(b),0)/booths.length).toFixed(1) : "0.0";
}
function renderList(){
  const q = $("searchInput").value.trim().toLowerCase();
  const st = $("statusFilter").value;
  const tag = $("tagFilter").value;
  const filtered = booths.filter(b=>{
    const hay = [b.brand,b.country,b.boothNo,b.category,b.oneLine,b.insight,b.applyIdea,b.questions].join(" ").toLowerCase();
    return (!q || hay.includes(q)) && (st==="all" || b.status===st) && (tag==="all" || (b.checks||[]).some(x=>x.includes(tag)) || (b.tags||[]).includes(tag));
  }).sort((a,b)=> (b.priority==="A")-(a.priority==="A") || score(b)-score(a));
  $("boothList").innerHTML = filtered.length ? filtered.map(cardHtml).join("") : `<div class="card booth-card"><h3>아직 기록이 없습니다.</h3><p class="meta">+ 부스 기록 버튼으로 첫 기록을 추가하세요.</p></div>`;
  document.querySelectorAll("[data-edit]").forEach(btn=>btn.onclick=()=>openDialog(btn.dataset.edit));
}
function cardHtml(b){
  const photos = (b.photos||[]).slice(0,4).map(p=>`<img class="thumb" src="${p.data}" alt="">`).join("");
  const audioPill = (b.audios||[]).length ? `<span class="pill">녹음 ${(b.audios||[]).length}개</span>` : "";
  const photoPill = (b.photos||[]).length ? `<span class="pill">사진 ${(b.photos||[]).length}장</span>` : "";
  const statusLabel = b.status==="report" ? "보고 포함" : b.status==="watch" ? "추적 필요" : "검토 전";
  return `<article class="booth-card card">
    <header><div><h3>${escapeHtml(b.brand||"무제")}</h3><p class="meta">${escapeHtml([b.country,b.boothNo,b.category].filter(Boolean).join(" · "))}</p></div><span class="pill ${b.priority==="A"?"a":""}">${b.priority||"C"}</span></header>
    <p>${escapeHtml(b.oneLine||"한 줄 역할 정의 미입력")}</p>
    <div class="pill-row"><span class="pill ${b.status}">${statusLabel}</span><span class="pill">평균 ${score(b).toFixed(1)}</span>${photoPill}${audioPill}</div>
    ${photos ? `<div class="thumb-row">${photos}</div>` : ""}
    <div class="card-actions"><button class="secondary" data-edit="${b.id}">열기/수정</button></div>
  </article>`;
}

function openDialog(id){
  $("boothForm").reset();
  $("boothId").value = id || "";
  $("deleteBoothBtn").classList.toggle("hidden", !id);
  $("dialogTitle").textContent = id ? "부스 기록 수정" : "새 부스 기록";
  editingPhotos = [];
  editingAudios = [];
  CHECKS.forEach((_,i)=>$("check"+i).checked=false);
  ["bizScore","newScore","fitScore"].forEach(x=>{ $(x).value=3; $(x+"Val").textContent=3; });
  if(id){
    const b = booths.find(x=>x.id===id);
    if(b){
      ["brand","country","boothNo","category","oneLine","insight","applyIdea","questions","status","priority"].forEach(k=>$(k).value=b[k]||"");
      ["bizScore","newScore","fitScore"].forEach(k=>{ $(k).value=b[k]||3; $(k+"Val").textContent=$(k).value; });
      CHECKS.forEach((c,i)=>$("check"+i).checked=(b.checks||[]).includes(c));
      editingPhotos = [...(b.photos||[])];
      editingAudios = [...(b.audios||[])];
    }
  } else {
    $("status").value="draft"; $("priority").value="C";
  }
  renderMediaPreviews();
  $("boothDialog").showModal();
}
function closeDialog(){ stopRecording(true); $("boothDialog").close(); }
function handleSubmit(e){
  e.preventDefault();
  const id = $("boothId").value || uid();
  const data = {
    id, updatedAt: new Date().toISOString(), date: today(),
    brand:$("brand").value.trim(), country:$("country").value.trim(), boothNo:$("boothNo").value.trim(), category:$("category").value.trim(),
    oneLine:$("oneLine").value.trim(), checks: CHECKS.filter((_,i)=>$("check"+i).checked),
    bizScore:$("bizScore").value, newScore:$("newScore").value, fitScore:$("fitScore").value,
    insight:$("insight").value.trim(), applyIdea:$("applyIdea").value.trim(), questions:$("questions").value.trim(),
    status:$("status").value, priority:$("priority").value, photos: editingPhotos, audios: editingAudios
  };
  const idx = booths.findIndex(b=>b.id===id);
  if(idx>=0) booths[idx]=data; else booths.push(data);
  save(); closeDialog(); showToast("저장했습니다.");
}
function deleteCurrent(){
  const id = $("boothId").value;
  if(!id) return;
  if(confirm("이 부스 기록을 삭제할까요?")){
    booths = booths.filter(b=>b.id!==id);
    save(); closeDialog(); showToast("삭제했습니다.");
  }
}

async function handlePhotos(e){
  const files = Array.from(e.target.files || []);
  if(!files.length) return;
  for(const file of files){
    if(!file.type.startsWith("image/")) continue;
    const data = await compressImage(file, 1400, 0.78);
    editingPhotos.push({id:uid(), name:file.name, data, createdAt:new Date().toISOString()});
  }
  e.target.value = "";
  renderMediaPreviews();
}
function compressImage(file, maxSize=1400, quality=.78){
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let {width, height} = img;
        const ratio = Math.min(1, maxSize / Math.max(width,height));
        width = Math.round(width*ratio); height = Math.round(height*ratio);
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d").drawImage(img,0,0,width,height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function renderMediaPreviews(){
  $("photoPreview").innerHTML = editingPhotos.map(p=>`<div class="photo-item"><img src="${p.data}" alt=""><button type="button" data-del-photo="${p.id}">×</button></div>`).join("");
  document.querySelectorAll("[data-del-photo]").forEach(btn=>btn.onclick=()=>{ editingPhotos = editingPhotos.filter(p=>p.id!==btn.dataset.delPhoto); renderMediaPreviews(); });
  $("audioList").innerHTML = editingAudios.map(a=>`<div class="audio-item"><audio controls src="${a.data}"></audio><button type="button" class="danger" data-del-audio="${a.id}">삭제</button></div>`).join("");
  document.querySelectorAll("[data-del-audio]").forEach(btn=>btn.onclick=()=>{ editingAudios = editingAudios.filter(a=>a.id!==btn.dataset.delAudio); renderMediaPreviews(); });
}

async function toggleRecording(){
  if(mediaRecorder && mediaRecorder.state === "recording") { stopRecording(false); return; }
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){ alert("이 브라우저에서는 녹음 기능을 지원하지 않습니다."); return; }
  try{
    currentStream = await navigator.mediaDevices.getUserMedia({audio:true});
    const mime = pickMime();
    mediaRecorder = new MediaRecorder(currentStream, mime ? {mimeType:mime} : undefined);
    audioChunks = [];
    mediaRecorder.ondataavailable = e => { if(e.data && e.data.size) audioChunks.push(e.data); };
    mediaRecorder.onstop = async () => {
      const type = mediaRecorder.mimeType || "audio/mp4";
      const blob = new Blob(audioChunks, {type});
      const data = await blobToDataURL(blob);
      editingAudios.push({id:uid(), name:`녹음_${new Date().toLocaleTimeString()}`, type, data, createdAt:new Date().toISOString()});
      renderMediaPreviews(); cleanupStream();
    };
    mediaRecorder.start();
    $("recordBtn").textContent = "■ 녹음 종료";
    $("recordStatus").textContent = "녹음 중";
    $("recordStatus").classList.add("recording");
  }catch(err){ console.error(err); alert("녹음을 시작할 수 없습니다. 마이크 권한을 확인해 주세요."); cleanupStream(); }
}
function pickMime(){
  const candidates = ["audio/mp4", "audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"];
  if(!window.MediaRecorder || !MediaRecorder.isTypeSupported) return "";
  return candidates.find(t=>MediaRecorder.isTypeSupported(t)) || "";
}
function stopRecording(discard){
  if(mediaRecorder && mediaRecorder.state === "recording"){
    if(discard) mediaRecorder.onstop = () => cleanupStream();
    mediaRecorder.stop();
  } else cleanupStream();
  $("recordBtn").textContent = "● 녹음 시작";
  $("recordStatus").textContent = "대기 중";
  $("recordStatus").classList.remove("recording");
}
function cleanupStream(){ if(currentStream){ currentStream.getTracks().forEach(t=>t.stop()); currentStream=null; } mediaRecorder=null; audioChunks=[]; }
function blobToDataURL(blob){ return new Promise((resolve,reject)=>{ const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = reject; r.readAsDataURL(blob); }); }

function makeReport(){
  const selected = booths.filter(b=>b.status==="report" || b.priority==="A").sort((a,b)=>score(b)-score(a));
  const lines = [];
  lines.push("[Interzoo 2026 전시 참관 요약]");
  lines.push("");
  lines.push(`1. 전체 기록: ${booths.length}건 / 보고 후보: ${selected.length}건`);
  lines.push("");
  lines.push("2. 이번 전시에서 확인할 관찰 축");
  lines.push("- 글로벌 펫 시장의 반복 트렌드: 기능성, 제형, 패키지, 지속가능성, 펫푸드 기술");
  lines.push("- 해외 브랜드의 소비자 설득 구조: 원료, 제형, 급여 편의성, 전문성, 패키지 언어");
  lines.push("- 당사 적용 가능성: 전면 메시지, SKU 체계, 정보 배치, 수출용 표현 구조");
  lines.push("");
  lines.push("3. 핵심 관찰 부스");
  if(!selected.length) lines.push("- 아직 보고 포함 또는 A 우선순위로 지정된 부스가 없습니다.");
  selected.slice(0,12).forEach((b,i)=>{
    lines.push(`- ${i+1}) ${b.brand || "무제"} (${[b.country,b.boothNo,b.category].filter(Boolean).join(", ") || "정보 미입력"})`);
    lines.push(`  · 시장 신호: ${b.oneLine || b.insight || "미입력"}`);
    if(b.checks && b.checks.length) lines.push(`  · 체크 포인트: ${b.checks.join(", ")}`);
    if(b.applyIdea) lines.push(`  · 당사 적용: ${b.applyIdea}`);
    if(b.questions) lines.push(`  · 추가 확인: ${b.questions}`);
    if((b.photos||[]).length || (b.audios||[]).length) lines.push(`  · 첨부: 사진 ${(b.photos||[]).length}장, 녹음 ${(b.audios||[]).length}개`);
  });
  lines.push("");
  lines.push("4. 시사점");
  lines.push("- 단일 제품 도입 여부보다 반복적으로 확인되는 제형, 포장, 기능성 표현, 소비자 언어를 중심으로 후속 검토가 필요합니다.");
  lines.push("- 우선순위 A 부스는 자료 요청, PB/OEM 가능성, MOQ, 단가, 국내 적용 시 표시 리스크를 추가 확인하는 것이 적절합니다.");
  lines.push("- 참관 후에는 ‘바로 적용 / 조건부 적용 / 장기 참고’로 구분해 제품기획·패키지·수출 전략에 반영할 수 있습니다.");
  return lines.join("\n");
}
async function copyReport(){
  try { await navigator.clipboard.writeText($("reportText").value); showToast("보고서 내용을 복사했습니다."); }
  catch(e){ $("reportText").select(); document.execCommand("copy"); showToast("보고서 내용을 복사했습니다."); }
}
function downloadReport(){ downloadFile("interzoo-report.txt", $("reportText").value, "text/plain"); }
function exportJson(){ downloadFile("expo-field-note-backup.json", JSON.stringify(booths,null,2), "application/json"); }
function importJson(e){
  const file = e.target.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = () => {
    try{ const data = JSON.parse(r.result); if(!Array.isArray(data)) throw new Error("not array"); booths = data; save(); showToast("복원했습니다."); }
    catch(err){ alert("JSON 파일을 읽을 수 없습니다."); }
  };
  r.readAsText(file);
}
function clearAll(){ if(confirm("모든 기록을 삭제할까요? JSON 백업 후 진행을 권장합니다.")){ booths=[]; save(); showToast("전체 삭제했습니다."); } }
function downloadFile(name, content, type){
  const blob = new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
function showToast(text="저장되었습니다."){
  const t = $("toast");
  t.textContent = text;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 1500);
}
function registerSW(){ if("serviceWorker" in navigator){ navigator.serviceWorker.register("./sw.js").catch(console.warn); } }
function setupInstall(){
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", e=>{ e.preventDefault(); deferredPrompt=e; $("installBtn").classList.remove("hidden"); });
  $("installBtn").onclick = async ()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; $("installBtn").classList.add("hidden"); };
}
