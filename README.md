# Interzoo 참관 가이드 PWA

업로드된 프리 미팅 문서를 기반으로 만든 모바일용 웹앱/PWA입니다.

## 구성
- `index.html` : 앱 본문
- `manifest.json` : PWA 설치 정보
- `sw.js` : 오프라인 캐시
- `icons/` : 앱 아이콘

## GitHub Pages 업로드 방법
1. GitHub에서 새 repository를 만듭니다.
2. 이 폴더의 파일 전체를 업로드합니다.
3. Repository의 `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
5. Branch를 `main` / folder를 `/root`로 선택 후 저장합니다.
6. 생성된 GitHub Pages 주소를 휴대폰 Safari/Chrome으로 열고 홈 화면에 추가 또는 설치합니다.

## 참고
PWA 설치는 일반적으로 HTTPS 환경에서 정상 작동합니다. GitHub Pages는 HTTPS를 제공하므로 설치 테스트에 적합합니다.
