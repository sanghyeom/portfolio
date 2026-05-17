# Portfolio Project Analysis

작성일: 2026-05-17

최근 개선 반영일: 2026-05-17

## 요약

이 프로젝트는 개인 포트폴리오용 정적 웹페이지이며, 템플릿 기반의 Simplefolio를 Parcel 기반으로 커스터마이즈한 구조입니다.

현재 메인 페이지, 프로젝트 상세 페이지, 커리어 상세 페이지가 분리되어 있고, SCSS도 섹션별로 나뉘어 있어 유지보수 가능한 형태를 갖추고 있습니다.

`npm run build` 결과 빌드는 정상적으로 통과했습니다.

## 개선 반영 현황

아래 분석에서 우선 개선 항목으로 정리했던 내용 중 다음 항목을 반영했습니다.

- GitHub Actions 배포 과정에서 `CNAME`을 `dist/CNAME`으로 복사하도록 수정
- GitHub Actions의 `checkout`, `setup-node` 액션을 v4로 정리
- 설치 명령을 `npm install`에서 `npm ci`로 변경
- `package.json`의 프로젝트명, 설명, 저장소, 작성자, 홈페이지를 개인 포트폴리오 기준으로 정리
- 운영 기준을 `sanghyeon.site` 루트 도메인으로 맞춰 `homepage`와 배포 설정을 정리
- 메인 페이지 상세 링크를 루트 절대 경로에서 상대 경로로 변경
- 흰 배경에서 보이지 않을 수 있는 프로젝트 상세 버튼을 `cta-btn--hero`로 변경
- 주요 대표 이미지와 DDIB 갤러리 이미지를 WebP로 추가하고 페이지 참조를 변경
- README를 Simplefolio 템플릿 문서에서 개인 포트폴리오 문서로 교체

## 프로젝트 구조

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

주요 구성은 다음과 같습니다.

- `src/index.html`: 메인 포트폴리오 페이지
- `src/projects/*/index.html`: 프로젝트 상세 페이지
- `src/career/Gridsol_SCADA/index.html`: 커리어 상세 페이지
- `src/sass`: 섹션별 스타일 관리
- `src/scripts`: ScrollReveal, Tilt, Matter.js 히어로 애니메이션 초기화
- `.github/workflows/gh-pages.yml`: GitHub Pages 배포 워크플로우

## 기술 스택 및 빌드

프로젝트 자체의 빌드 도구는 Vite가 아니라 Parcel입니다.

```json
"start": "parcel src/index.html ...",
"build": "parcel build src/index.html ... --public-url ./"
```

Vite는 포트폴리오 내부의 DDIB 프로젝트 기술 스택으로 표시되는 항목입니다.

빌드 확인 결과:

```text
npm run build
Built in 16.70s
```

치명적인 빌드 오류는 없었고, 다음 경고가 확인되었습니다.

- `caniuse-lite` 데이터 구버전 경고
- 일부 이미지 파일 용량 경고

## 현재 장점

- 메인 페이지와 상세 페이지가 분리되어 있어 프로젝트 설명을 확장하기 쉽습니다.
- SCSS가 `hero`, `about`, `experience`, `projects`, `contact` 등 섹션별로 분리되어 있습니다.
- Matter.js 기반 히어로 애니메이션과 fallback UI가 구성되어 있습니다.
- 프로젝트별 기술 스택, 상세 설명, 영상 링크가 잘 연결되어 있습니다.
- `prefers-reduced-motion` 대응이 있어 접근성 방향도 일부 반영되어 있습니다.
- `npm run build`가 정상 통과합니다.

## 우선 개선이 필요한 부분 분석

### 1. CNAME 배포 누락 가능성

루트에는 `CNAME`과 `docs/CNAME`이 있고 값은 다음과 같습니다.

```text
sanghyeon.site
```

하지만 현재 GitHub Actions는 `dist` 폴더만 배포합니다.

```yaml
build_dir: dist
```

빌드 결과 `dist/CNAME`은 생성되지 않았습니다. 커스텀 도메인을 안정적으로 유지하려면 다음 중 하나가 필요합니다.

- GitHub Pages 액션에 `fqdn: sanghyeon.site` 옵션 추가
- 빌드 후 `CNAME`을 `dist`로 복사하는 단계 추가

### 2. 상세 보기 버튼 가시성

프로젝트 섹션 배경은 흰색인데, 일부 `상세 보기` 버튼에 `cta-btn--resume` 클래스가 사용되고 있습니다.

`cta-btn--resume`은 흰색 텍스트와 흰색 테두리를 사용하므로 흰 배경에서 잘 보이지 않을 수 있습니다.

대상 예시:

- Mannequin 상세 보기
- DDIB 상세 보기
- Pollin 상세 보기

권장 방향:

- 흰 배경에서는 `cta-btn--hero` 사용
- 또는 프로젝트 섹션 전용 버튼 스타일 추가

### 3. 배포 경로 기준 혼재

메인 페이지의 상세 페이지 링크는 루트 기준 경로를 사용합니다.

```html
href="/projects/mannequin/"
```

상세 페이지에는 다음 설정이 있습니다.

```html
<base href="/" />
```

커스텀 도메인 루트 배포라면 괜찮지만, `package.json`의 `homepage`는 기존 GitHub Pages 하위 경로를 가리키고 있습니다.

```json
"homepage": "https://sanghyeom.github.io/portfolio/"
```

실제 운영 기준이 `sanghyeon.site`라면 `homepage`도 현재 도메인 기준으로 정리하는 것이 좋습니다.

적용 결과: 실제 운영 기준을 `sanghyeon.site` 루트로 확정하고 `homepage`를 수정했습니다. 상세 페이지의 `<base href="/">`는 Parcel 산출물의 공통 CSS와 이미지가 루트 도메인 기준으로 정상 해석되도록 유지했습니다.

### 4. 이미지 용량

확인된 큰 이미지:

```text
5.2M  src/assets/ddib/ddib_2.png
1.9M  src/assets/MannequinArtwork.png
936K  src/assets/ddib/ddib.jpg
480K  src/assets/profile.jpg
```

빌드 결과에서도 다음 파일에 용량 경고가 있었습니다.

- `MannequinArtwork`: 약 1.62MB
- `ddib_2`: 약 4.19MB

권장 방향:

- 갤러리 이미지를 WebP 또는 AVIF로 변환
- 썸네일용 이미지는 별도 리사이즈 버전 사용
- 원본 보존이 필요하면 `src/assets/originals` 등으로 분리

### 5. README와 package 메타데이터

현재 `README.md`와 `package.json` 일부 정보가 Simplefolio 템플릿 상태에 가깝습니다.

개인 포트폴리오 프로젝트라면 다음 정보로 정리하는 것이 좋습니다.

- 프로젝트 목적
- 로컬 실행 방법
- 빌드 방법
- 배포 URL
- 디렉터리 구조
- 콘텐츠 수정 위치

## 추천 작업 순서

1. GitHub Pages 커스텀 도메인 배포 설정 정리
2. 흰 배경에서 안 보일 수 있는 버튼 스타일 수정
3. `homepage`, `<base href="/">`, 상세 링크 경로 기준 통일
4. 큰 이미지 최적화
5. README와 package 메타데이터 개인 포트폴리오 기준으로 정리

적용 결과: 위 5개 항목은 2026-05-17 개선 작업에서 모두 반영했습니다.

## 검증 내용

실행한 검증:

```bash
npm run build
```

결과:

- 빌드 성공
- Parcel 번들 생성 확인
- 주요 HTML, CSS, JS, 이미지 산출물 생성 확인
- 치명적 오류 없음

주의:

- `npm run build` 실행으로 `dist`와 `.parcel-cache`가 갱신될 수 있으나, 현재 `.gitignore`에 포함되어 있어 Git 추적 대상은 아닙니다.

## 결론

현재 프로젝트는 개인 포트폴리오로 사용하기에 기본 구조와 콘텐츠가 이미 충분히 잡혀 있습니다.

가장 먼저 처리할 부분은 기능 추가가 아니라 배포 안정성, 버튼 가시성, 경로 기준 통일입니다. 이 세 가지를 정리하면 실제 방문자가 보는 경험과 운영 안정성이 바로 좋아집니다.
