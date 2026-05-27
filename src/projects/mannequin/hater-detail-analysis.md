# Hater 상세 페이지 분석 및 Mannequin 리팩토링 기준

이 문서는 `src/projects/hater/index.html`의 상세 페이지 구성을 분석해
`src/projects/mannequin/index.html` 리팩토링의 기준으로 사용하기 위한 정리본이다.

## 1. Hater 상세 페이지의 핵심 방향

Hater 페이지는 단순히 프로젝트 기능을 나열하는 방식이 아니라, 하나의 게임을
웹 서비스 형태로 제공하기 위해 어떤 문제를 정의했고, 어떤 구조로 해결했는지를
보여주는 상세 페이지다.

핵심 메시지는 다음과 같다.

- Unity WebGL 게임을 웹 브라우저에서 실행 가능한 서비스로 전환했다.
- React 웹 포털, 인증/세션 흐름, WebGL 정적 리소스 제공, CI/CD, 배포 인프라를 하나의 흐름으로 연결했다.
- 프론트엔드 구현을 넘어서 서비스 진입, 배포, 운영 관점까지 다뤘다.
- 실제 게임 화면과 웹 포털 화면을 이미지/GIF 갤러리로 보여줘 구현 결과를 시각적으로 증명한다.

Mannequin 페이지도 이 방향을 따르려면 "무엇을 만들었다"보다
"멀티플레이 게임에서 어떤 흐름을 안정화했고, 어떤 운영 기반을 만들었는가"를 중심에 둬야 한다.

## 2. 전체 HTML 구조

Hater 페이지는 다음 구조로 구성되어 있다.

```text
body.project-detail-page
└─ main
   ├─ section.project-detail-hero
   │  └─ hero content + hero media
   ├─ section.project-detail-section
   │  └─ .project-detail-layout
   │     ├─ .project-detail-main
   │     │  ├─ Overview
   │     │  ├─ My Role & Scope
   │     │  ├─ Architecture Focus
   │     │  ├─ Challenges & Solution
   │     │  ├─ Technical Highlights
   │     │  ├─ Result & Retrospective
   │     │  ├─ In-Game Preview
   │     │  └─ Frontend Screens
   │     └─ aside.project-detail-sidebar
   │        ├─ Summary
   │        ├─ Tech Stack
   │        ├─ Deliverables
   │        ├─ Release
   │        └─ Links
   └─ .project-image-modal
      └─ gallery modal + carousel script
```

Mannequin도 같은 레이아웃 클래스를 이미 사용하고 있으므로, 큰 뼈대는 유지하고
본문 섹션 밀도와 시각 자료 영역을 Hater 수준으로 확장하는 방식이 적합하다.

## 3. Hero 영역 분석

Hater Hero는 첫 화면에서 프로젝트 성격을 빠르게 전달한다.

구성 요소:

- `project-detail-back`: 포트폴리오 목록 복귀 링크
- `project-detail-eyebrow`: `Project Detail`
- `h1`: 프로젝트명
- `project-detail-summary`: 한 줄 소개보다 조금 긴 핵심 설명
- `project-detail-meta`: 기간, 역할, 핵심 기술, 배포/운영 기술
- `project-detail-hero__media`: 대표 이미지

Hater의 요약 문장은 다음 역할을 한다.

- 프로젝트가 게임 자체인지, 플랫폼인지, 인프라 작업인지 한 번에 설명한다.
- 담당 범위를 "웹 서비스화", "브라우저 실행", "배포/운영"으로 묶는다.
- 상세 본문을 읽기 전에 평가자가 볼 관점을 정해준다.

Mannequin 적용 방향:

- 현재 Mannequin 요약은 간결하지만, 역할과 성과가 약하다.
- `Photon Fusion 기반 3D 비대칭 PvP 호러 게임` 자체보다 `멀티플레이 세션 흐름`, `로딩/씬 전환 UX`, `Unity CI 검증 환경`, `협업 자동화`를 전면에 세우는 것이 좋다.

예시 방향:

```text
Photon Fusion 기반 3D 비대칭 PvP 호러 게임에서 세션 생성·참가·종료 흐름,
로딩/씬 전환 UX, Unity CI 검증 환경과 협업 자동화를 정리해
팀이 안정적으로 멀티플레이 기능을 검증할 수 있도록 만든 프로젝트입니다.
```

## 4. 본문 섹션 구성 분석

### 4.1 Overview

Hater의 Overview는 4문단 구조다.

1. 프로젝트 정의와 본인의 핵심 역할
2. 단순 실행 페이지가 아니라 서비스 흐름을 구현했다는 설명
3. 단일 게임이 아닌 플랫폼 확장 가능성
4. 담당 범위 요약

Mannequin도 다음 흐름으로 정리하면 좋다.

1. Mannequin이 어떤 게임인지 정의
2. 멀티플레이 게임에서 세션/로딩/협업 검증이 왜 중요했는지 설명
3. 본인이 맡은 인프라/UI 범위 설명
4. 팀 개발과 실제 플레이 진입 흐름에 어떤 영향을 줬는지 요약

### 4.2 My Role & Scope

Hater는 역할을 단순 bullet이 아니라 `strong + p` 구조로 나눠 강조한다.

형식:

```html
<li>
  <strong>역할 제목</strong>
  <p>구체적인 수행 내용</p>
</li>
```

이 방식은 평가자가 빠르게 제목을 스캔하고, 필요할 때 설명을 읽기 좋다.

Mannequin 권장 항목:

- Photon Fusion 세션 흐름 정리
- LoadingScene / 씬 전환 UX 개선
- GitLab Runner 기반 Unity 검증 환경 점검
- Unity 라이선스 및 EC2 Runner 운영 기준 정리
- Mattermost Webhook 기반 협업 알림 자동화
- Addressables 또는 리소스 로딩 구조 검토가 실제로 있었다면 별도 항목화

### 4.3 Architecture Focus

Hater는 Architecture Focus에서 구현물을 시스템 관점으로 재정리한다.

Hater 항목:

- Frontend / Game Portal
- Unity WebGL Resource Serving
- Deployment / CI/CD

Mannequin은 다음처럼 잡는 것이 자연스럽다.

- Multiplayer Session Flow
  - Photon Fusion 기반 세션 생성, 참가, 종료, 역할 분기 흐름
- Scene Transition / Loading UX
  - 로비, 로딩, 인게임 진입 사이의 사용자 상태 피드백
- Collaboration / CI Environment
  - EC2, GitLab Runner, Unity 라이선스, Mattermost 알림 흐름

이 섹션은 "기능 목록"이 아니라 "시스템을 어떤 관점으로 나눠 설계했는가"를 보여주는 곳이다.

### 4.4 Challenges & Solution

Hater 페이지에서 가장 설득력이 강한 섹션이다.

구조:

```text
문제 제목
Challenge
문제 배경과 위험
Solution
실제로 적용한 대응
```

Mannequin에 맞는 문제 후보:

- 세션 상태와 UI 상태 불일치
  - 방을 나갔다고 느끼지만 실제 세션이 남아 있는 문제
  - 참가 중, 로딩 중, 실패 상태가 사용자에게 명확하지 않은 문제
- 멀티플레이 진입 흐름의 상태 피드백 부족
  - 로비에서 인게임으로 넘어갈 때 사용자가 현재 상태를 알기 어려움
  - LoadingScene을 단순 전환 화면이 아니라 상태 피드백 장치로 정리
- Unity CI / Runner 환경의 반복성 문제
  - Unity 라이선스, Runner, EC2 환경 차이로 검증 과정이 흔들릴 수 있음
  - 실행 기준, 알림, 검증 루틴을 문서화하고 자동화
- 팀 협업 상태 공유 문제
  - 브랜치별 커밋/빌드 상태를 사람이 직접 공유하면 누락 가능
  - Mattermost Webhook으로 커밋 현황 공유 자동화

### 4.5 Technical Highlights

Hater는 핵심 구현 포인트를 다시 짧게 압축한다.

역할:

- 앞 섹션의 긴 서사를 기술 키워드 중심으로 재요약한다.
- 면접관이나 평가자가 빠르게 기여도를 확인할 수 있게 한다.

Mannequin 권장 항목:

- Photon Fusion 세션 생성·참가·종료 흐름 정리
- 역할별 LoadingScene 및 씬 전환 상태 피드백 구성
- GitLab Runner / Unity 라이선스 / EC2 검증 환경 점검
- Mattermost Webhook 기반 협업 알림 자동화
- 리소스 로딩 또는 Addressables 검토가 있었다면 기술 하이라이트로 추가

### 4.6 Result & Retrospective

Hater는 Result, Impact, Retrospective로 나눠 마무리한다.

효과:

- 결과: 실제로 무엇이 완료되었는가
- 영향: 사용자나 팀에게 어떤 변화가 있었는가
- 회고: 무엇을 배웠고 다음에는 어디까지 확장할 것인가

Mannequin도 이 구조가 적합하다.

Mannequin 방향:

- Result
  - 로비에서 인게임 진입까지의 흐름을 상태가 보이는 경험으로 정리
  - CI/Runner/라이선스 운영 기준을 반복 가능한 형태로 정리
- Impact
  - 팀원이 멀티플레이 기능을 더 안정적으로 검증할 수 있게 됨
  - 사용자 입장에서 참가/로딩/전환 상태를 더 명확히 인지할 수 있게 됨
- Retrospective
  - 멀티플레이 게임은 기능 구현뿐 아니라 세션 생명주기, 상태 피드백, 검증 환경이 함께 맞물려야 한다는 점

## 5. 시각 자료 섹션 분석

Hater에는 두 종류의 시각 자료 섹션이 있다.

### 5.1 In-Game Preview

GIF 2개를 2열 카드로 보여준다.

특징:

- `project-detail-ingame` 전용 섹션
- `figure` + `button` + `img` + `figcaption`
- hover 시 카드 상승, 이미지 확대/보정
- 클릭 시 모달에서 확대 확인
- `data-gallery-eyebrow`, `data-gallery-title`, `data-gallery-description`로 모달 문구 제어

Mannequin에는 이미 다음 GIF 에셋이 있다.

- `camouflage.gif`
- `derangement.gif`
- `install.gif`
- `transition.gif`

추천 사용 방식:

- `In-Game Preview` 또는 `Gameplay Systems` 섹션으로 구성
- 2개 또는 4개를 카드로 배치
- 각 GIF는 기능/흐름 단위로 제목을 붙인다.

예시 제목:

- `Transition`: 로비/로딩/인게임 전환 흐름
- `Install`: 상호작용 또는 오브젝트 설치 흐름
- `Camouflage`: 마네킹 역할의 위장/은신 흐름
- `Derangement`: 공포/상태 이상 또는 플레이 변수 연출

### 5.2 Frontend Screens

Hater의 `Frontend Screens`는 React 웹 포털 화면을 보여주는 영역이다.

Mannequin은 웹 포털 프로젝트가 아니므로 그대로 가져오면 어색하다.
대신 다음 중 하나로 바꾸는 것이 좋다.

- `Gameplay Screens`
- `System Screens`
- `Session Flow`
- `UI & Flow Preview`

Mannequin의 핵심이 UI/인프라/세션 흐름이라면, 게임 스크린샷보다
로비, 역할 선택, 로딩, 세션 참가, 플레이 진입을 보여주는 자료가 더 적합하다.

## 6. 모달/캐러셀 구조 분석

Hater는 모든 이미지/GIF 트리거를 하나의 모달 캐러셀로 묶는다.

트리거 수집:

```js
document.querySelectorAll(
  ".project-detail-ingame__trigger, .project-detail-gallery__trigger"
)
```

각 트리거에서 읽는 데이터:

- `data-gallery-eyebrow`
- `data-gallery-title`
- `data-gallery-description`
- 내부 `img`의 `src`
- 내부 `img`의 `alt`

지원 동작:

- 카드 클릭 시 모달 열기
- 좌우 버튼으로 이동
- 키보드 `ArrowLeft`, `ArrowRight` 이동
- `Escape` 닫기
- backdrop/닫기 버튼으로 닫기
- 모달 오픈 시 body scroll lock
- 닫은 뒤 마지막 포커스 복원

Mannequin에서도 이 구조를 그대로 재사용할 수 있다.
단, id는 프로젝트명에 맞게 바꾸는 것이 좋다.

추천:

- `id="mannequin-screen-modal"`
- `aria-labelledby="mannequin-screen-modal-title"`
- `aria-describedby="mannequin-screen-modal-desc"`
- 스크립트 변수명은 일반화하거나 Mannequin 기준으로 변경

## 7. Sidebar 분석

Hater 사이드바는 평가자가 빠르게 정보를 볼 수 있도록 구성되어 있다.

항목:

- Summary
- Tech Stack
- Deliverables
- Release
- Links

현재 Mannequin은 Summary, Tech Stack, Links만 있다.
Hater 기준으로 보강한다면 `Deliverables`를 추가하는 것이 가장 효과적이다.

Mannequin Deliverables 후보:

- Multiplayer Flow: Photon Fusion 세션 생성·참가·종료 흐름
- Loading UX: 역할별 LoadingScene 및 씬 전환 피드백
- CI Environment: EC2 기반 GitLab Runner / Unity 라이선스 검증 환경
- Collaboration: Mattermost Webhook 기반 브랜치/커밋 공유 자동화
- Documentation: 팀 검증 루틴 및 운영 기준 정리

Release는 실제 날짜/버전 흐름이 명확할 때만 넣는 것이 좋다.
불확실하면 억지로 넣지 않는 편이 낫다.

## 8. 스타일 구조 분석

공통 레이아웃 스타일은 `src/sass/sections/_projects.scss`에 있다.

주요 공통 클래스:

- `.project-detail-page`
- `.project-detail-hero`
- `.project-detail-hero__grid`
- `.project-detail-summary`
- `.project-detail-meta`
- `.project-detail-section`
- `.project-detail-layout`
- `.project-detail-main`
- `.project-detail-sidebar`
- `.project-detail-block`
- `.project-detail-panel`
- `.project-detail-copy`
- `.project-detail-list`
- `.project-detail-facts`
- `.project-stack`

Hater에서 추가로 활용한 시각 자료 클래스:

- `.project-detail-ingame`
- `.project-detail-ingame__grid`
- `.project-detail-ingame__item`
- `.project-detail-ingame__trigger`
- `.project-detail-gallery`
- `.project-detail-gallery__grid`
- `.project-detail-gallery__item`
- `.project-detail-gallery__trigger`
- `.project-image-modal`

Mannequin에 갤러리/모달을 추가할 경우 별도 SCSS를 많이 만들 필요는 없다.
이미 Hater용으로 만든 클래스명을 재사용하면 된다.
프로젝트별로 문구와 이미지 목록만 바꿔도 동일한 UX를 제공할 수 있다.

## 9. Hater 구조에서 개선할 점

Mannequin 리팩토링 시에는 Hater의 장점은 가져오되, 일부 HTML 구조는 개선하는 것이 좋다.

개선 후보:

- `ul.project-detail-list` 안에 `div.project-detail-copy`가 들어간 구조는 의미상 어색하다.
  - Mannequin에서는 `ul`이 필요 없는 서사형 섹션은 `div.project-detail-copy`만 사용한다.
  - 목록형 섹션만 `ul > li` 구조를 사용한다.
- `data-gallery-index`는 현재 스크립트에서 직접 사용하지 않는다.
  - 순서는 DOM 순서로 처리되므로 제거해도 된다.
  - 남겨도 동작 문제는 없지만 유지보수상 의미가 약하다.
- GIF 용량은 배포 성능에 영향을 준다.
  - Mannequin GIF도 많아질 경우 WebM/MP4 변환을 검토한다.
- 모달 스크립트가 프로젝트 HTML 안에 인라인으로 존재한다.
  - 현재 규모에서는 괜찮지만 여러 프로젝트에서 반복된다면 공통 JS로 분리할 수 있다.

## 10. Mannequin 리팩토링 권장 목차

Hater의 밀도를 기준으로 Mannequin 상세 페이지는 다음 목차가 적합하다.

```text
Hero
Overview
My Role & Scope
Architecture Focus
Challenges & Solution
Technical Highlights
Result & Retrospective
Gameplay / Flow Preview
Sidebar
  - Summary
  - Tech Stack
  - Deliverables
  - Links
Modal Carousel
```

권장 섹션별 메시지:

- Overview
  - 3D 비대칭 PvP 호러 게임 정의
  - 멀티플레이에서 세션, 로딩, 상태 피드백이 중요했다는 배경
  - 본인의 인프라/UI 역할 요약
- My Role & Scope
  - 세션 흐름, 로딩 UX, CI 검증 환경, 협업 자동화로 역할을 분리
- Architecture Focus
  - Photon Fusion Session Flow
  - Scene Transition / Loading UX
  - Unity CI / Collaboration Pipeline
- Challenges & Solution
  - 세션 상태 불일치
  - 로딩/전환 상태 피드백
  - Unity Runner/라이선스 검증 반복성
  - 협업 정보 공유 자동화
- Technical Highlights
  - 실제 구현/정리한 기술 포인트를 짧게 재요약
- Result & Retrospective
  - 팀 검증 흐름 안정화, 플레이 진입 경험 개선, 멀티플레이 개발에서 배운 점
- Gameplay / Flow Preview
  - `camouflage.gif`, `derangement.gif`, `install.gif`, `transition.gif`를 카드/모달로 구성

## 11. 최종 판단

Hater 상세 페이지의 강점은 "내용의 양"이 아니라 "평가자가 이해할 수 있는 흐름"이다.

Mannequin도 같은 품질로 정리하려면 다음 원칙을 지키는 것이 좋다.

- 게임 소개보다 본인 기여를 먼저 보이게 한다.
- 문제를 먼저 정의하고, 해결책을 구체적인 작업으로 연결한다.
- 인프라 작업을 단순 셋업이 아니라 팀 검증 흐름과 연결해 설명한다.
- UI 작업은 화면 꾸미기가 아니라 멀티플레이 상태 피드백 문제로 설명한다.
- GIF/이미지는 장식이 아니라 세션 흐름과 플레이 시스템을 증명하는 자료로 사용한다.
- Hater의 갤러리/모달 UX는 Mannequin에도 적용해도 과하지 않다.

