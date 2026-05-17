# 윤상현 Portfolio

개인 포트폴리오용 정적 웹사이트입니다. 현장 경험, 교육 이력, 프로젝트 상세 페이지, 연락 정보를 한 페이지 중심으로 보여주고, 각 프로젝트는 별도 상세 페이지에서 설명합니다.

배포 주소: https://sanghyeon.site/

## 실행

```bash
npm ci
npm start
```

로컬 개발 서버는 Parcel 기본 포트인 `http://localhost:1234/`에서 실행됩니다.

## 빌드

```bash
npm run build
```

빌드 결과는 `dist/`에 생성됩니다.

## 구조

```text
src/
  index.html
  index.js
  styles.scss
  assets/
  scripts/
  sass/
  projects/
    mannequin/
    ddib/
    pollin/
  career/
    Gridsol_SCADA/
```

주요 수정 위치:

- 메인 페이지 콘텐츠: `src/index.html`
- 프로젝트 상세 페이지: `src/projects/*/index.html`
- 커리어 상세 페이지: `src/career/Gridsol_SCADA/index.html`
- 공통 스타일 진입점: `src/styles.scss`
- 섹션별 스타일: `src/sass/sections/`
- 히어로 애니메이션: `src/scripts/heroMatterStacks.js`

## 배포

`master` 브랜치에 push하면 GitHub Actions가 다음 순서로 배포합니다.

1. Node.js 버전을 `.nvmrc` 기준으로 설정
2. `npm ci`로 의존성 설치
3. `npm run build` 실행
4. `CNAME`을 `dist/CNAME`으로 복사
5. `dist/`를 GitHub Pages로 배포

커스텀 도메인은 `CNAME`의 `sanghyeon.site`를 기준으로 유지합니다.

## 이미지 관리

페이지에서 직접 사용하는 큰 이미지는 WebP 파일을 우선 참조합니다. 원본 PNG/JPG는 보존하되, 실제 배포 번들에는 참조된 파일만 포함되도록 관리합니다.

큰 스크린샷을 추가할 때는 다음 기준을 권장합니다.

- 썸네일/대표 이미지: WebP 변환
- 상세 갤러리 이미지: 가로 1400px 내외로 리사이즈
- 원본 보관이 필요하면 별도 디렉터리에 보존

## 참고

이 프로젝트는 Simplefolio 템플릿을 기반으로 커스터마이즈했습니다.
