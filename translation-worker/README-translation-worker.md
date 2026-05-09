# 앱 내부 통역용 DeepL Cloudflare Worker 설정

이 폴더는 PWA 통역 탭에서 Google 번역 새 창을 열지 않고, 앱 내부에서 번역 결과를 받기 위한 예시 Worker입니다.

## 1. DeepL API Key 준비
DeepL API 계정에서 API Key를 발급받습니다.

## 2. Cloudflare Worker 생성
Cloudflare Workers에서 새 Worker를 만들고 `deepl-worker.js` 내용을 붙여넣습니다.

## 3. Secret 설정
Cloudflare Dashboard의 Worker 설정에서 `Variables and Secrets`로 이동한 뒤 아래 Secret을 추가합니다.

- Name: `DEEPL_API_KEY`
- Value: DeepL API Key

API 키는 절대 `index.html`, `app.js`, GitHub 저장소에 넣지 마세요.

## 4. 선택 설정
무료 DeepL API는 아래 호스트를 사용합니다.

- `DEEPL_API_HOST` = `https://api-free.deepl.com`

Pro API는 아래 호스트를 사용합니다.

- `DEEPL_API_HOST` = `https://api.deepl.com`

## 5. 앱에 Worker 주소 저장
배포된 Worker 주소가 아래와 같다면:

`https://expo-translation-worker.your-subdomain.workers.dev`

PWA의 통역 탭 > 설정 > 번역 Worker 주소에 아래 주소를 넣습니다.

`https://expo-translation-worker.your-subdomain.workers.dev/translate`

이 Worker는 경로와 상관없이 POST 요청을 처리하므로 `/translate`를 붙여도 작동합니다.

## 6. 테스트
통역 탭에서 `연결 테스트`를 눌러 번역 결과가 표시되는지 확인합니다.
