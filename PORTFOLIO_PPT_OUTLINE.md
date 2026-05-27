# IT 개발자 포트폴리오 PPT 구성안

정적 포트폴리오를 그대로 옮기는 방식이 아니라, `Hater`를 메인 증거 자료로 두고 `산업용 SCADA 운영 경험`은 실무 경험, `Mannequin / DDIB / Pollin`은 보조 근거로 압축하는 발표용 구성안입니다.

## 제작 방향

- 전체 분량: 12장 권장
- 발표 흐름: 정체성 -> 기술 스택 -> 실무 경험 -> 메인 프로젝트 -> 보조 프로젝트 -> 회고
- 핵심 전략: 프로젝트 나열이 아니라 "문제를 어떻게 정의하고, 내 역할로 어떻게 해결했는지"를 보여준다.
- 시각 자료: Hater 화면 캡처와 아키텍처 다이어그램을 중심으로 사용한다.
- 주의 사항: 기술명만 나열하지 말고, 각 기술을 어디에 어떻게 사용했는지 함께 적는다.

---

## 1. Cover

### 슬라이드 제목

윤상현 Portfolio

### 한 줄 소개

현장을 이해하고, 서비스 흐름과 배포 운영까지 연결하는 개발자

### 화면 구성

- 좌측: 이름, 지원 포지션, 연락처/GitHub/포트폴리오 URL
- 우측: 대표 키워드 4개

### 키워드 카드

| Keyword | 내용 |
| --- | --- |
| Frontend | React 기반 사용자 흐름 구현 |
| Web Game | Unity WebGL 게임 서비스화 |
| Infra | Docker, Nginx, AWS 기반 배포 |
| Operation | 현장 운영 환경과 장애 대응 경험 |

### 발표 포인트

단순히 화면만 만드는 개발자가 아니라, 사용자가 서비스를 진입하고 이용하고 배포 이후 운영되는 흐름까지 함께 고려해온 개발자라는 인상을 만든다.

---

## 2. Profile / Developer Identity

### 슬라이드 제목

문제를 서비스 흐름으로 연결하는 개발자

### 핵심 문장

설비 운영 경험에서 출발해, 웹 서비스와 게임 프로젝트에서도 "사용자가 실제로 끝까지 사용할 수 있는 구조"를 만드는 데 집중했습니다.

### 카드 구성

| 카드 | 내용 |
| --- | --- |
| 현장 이해 | 산업용 SCADA 운영 프로젝트에서 운영 안정성, 모니터링, 장애 대응 경험 |
| 서비스 구현 | React 기반 화면, 인증, 사용자 흐름, API 연동 구현 |
| 배포/운영 | Docker, Nginx, AWS, GitLab CI/CD 기반 배포 흐름 구성 |

### 발표 포인트

경력과 프로젝트가 따로 노는 것이 아니라, 공통적으로 "상태를 정확히 보여주고, 흐름이 끊기지 않게 만들고, 운영 가능한 형태로 마무리한다"는 방향으로 이어진다고 설명한다.

---

## 3. Tech Stack

### 슬라이드 제목

기술 스택과 사용 맥락

### 화면 구성

아이콘을 4개 영역으로 묶고, 각 영역마다 "사용한 방식"을 짧게 적는다.

| 영역 | 기술 | 사용 맥락 |
| --- | --- | --- |
| Frontend | React, TypeScript, JavaScript, Vue.js | 웹 포털, 예매 흐름, AI 서비스 화면, 상태 기반 UI 구현 |
| Backend / API | Java, Spring Boot, Django, Python, OpenAI API | 인증/API 연동, AI 처리 흐름, 설문 분석 기능 연결 |
| Infra / Deploy | Docker, Nginx, AWS S3, CloudFront, GitLab CI/CD, Kaniko, Linux | WebGL 정적 리소스 서빙, 이미지 빌드, 부분 배포, 운영 환경 구성 |
| Game / Realtime | Unity WebGL, Photon Fusion, Redis, Kafka, WebSocket | 웹게임 실행, 멀티플레이 세션, 좌석/대기열 등 실시간 흐름 이해 |

### 발표 포인트

기술을 많이 써봤다는 나열보다, 프로젝트에서 어떤 문제를 해결하기 위해 해당 기술을 사용했는지 중심으로 말한다.

---

## 4. Experience Timeline

### 슬라이드 제목

경험의 흐름

### 타임라인

| 기간 | 경험 | 핵심 역량 |
| --- | --- | --- |
| 2022 ~ 2024 | 산업용 SCADA 운영 프로젝트 | 자동 운전, 모니터링, 운영 지원, 장애 대응 |
| 2025.03 ~ 2025.06 | U+ Software Bootcamp | Python, SQL, Linux, Docker 기초 |
| 2025.07 ~ 2026.06 | SSAFY | 팀 프로젝트, React/Spring, 협업, 배포 경험 |
| 2025.09 ~ 2026.05 | 주요 프로젝트 | Pollin, DDIB, Mannequin, Hater |

### 발표 포인트

현장 운영 경험에서 출발해 웹 서비스, AI, 실시간 예매, 멀티플레이 게임, WebGL 게임 플랫폼까지 확장된 흐름을 보여준다.

---

## 5. Career Evidence: Industrial SCADA

### 슬라이드 제목

실무 경험: 산업용 SCADA 운영 환경 개선

### 한 줄 요약

SCADA 기반 설비 운영 환경에서 자동 운전 로직, 실시간 트렌드 기능, 현장/원격 기술 지원을 수행하며 운영 안정성과 모니터링 가시성을 개선했습니다.

### 기본 정보 카드

| 항목 | 내용 |
| --- | --- |
| 기간 | 2022 ~ 2024 |
| 도메인 | 전력 설비 운영 / 산업용 모니터링 |
| 기술 | Industrial SCADA, Scripting Extension, VBScript/Python 기반 확장 |
| 역할 | 자동 운전 시스템, 실시간 트렌드 기능, 현장/원격 기술 지원 |

### 문제 해결 카드

| 문제 | 해결 |
| --- | --- |
| 기본 컴포넌트만으로 실시간 트렌드 요구 충족 어려움 | SCADA 도구의 스크립트 확장 방식을 분석하고 시뮬레이션으로 검증 |
| 자동 운전 흐름에서 상태와 조작 순서 일치 필요 | 기존 운영 화면과 제어 흐름을 함께 보며 상태 피드백 정리 |
| 보안 제약이 있는 고객 환경에서 장애 분석 필요 | 야간/원격 지원을 통해 로그, 화면 상태, 운영자 피드백 기반 대응 |

### 발표 포인트

실제 회사명, 고객사명, 제품명, 원본 화면을 공개하지 않는다. 핵심은 "기존 운영 화면과 설비 흐름을 분석하고, 자동 운전/모니터링 기능을 안정적으로 연결했다"는 점이다.

---

## 6. Project Map

### 슬라이드 제목

프로젝트 포지셔닝

### 화면 구성

프로젝트 4개를 카드로 배치하되, Hater만 크게 강조한다.

| 프로젝트 | 역할 | 증명하는 역량 |
| --- | --- | --- |
| Hater | Main Project | WebGL 게임을 웹 서비스로 전환, 인증/세션, 배포/운영 |
| Mannequin | Supporting | Unity 멀티플레이 세션 흐름, CI 검증, 협업 자동화 |
| DDIB | Supporting | 실시간 좌석 예매 UX, API 연동, 상태 기반 화면 |
| Pollin | Supporting | AI 기능을 사용자 흐름에 연결, Django/OpenAI/Vue 연동 |

### 발표 포인트

Hater를 가장 깊게 설명하고, 나머지 프로젝트는 "같은 문제 해결 방식이 다른 도메인에서도 반복된다"는 근거로 사용한다.

---

## 7. Main Project: Hater Overview

### 슬라이드 제목

Hater: Unity WebGL 게임을 웹 서비스로 전환

### 한 줄 요약

Unity WebGL 게임 Hater를 브라우저에서 실행 가능한 웹게임 서비스로 제공하기 위해 React 웹 포털, 인증/세션 흐름, 배포 인프라, CI/CD를 구축했습니다.

### 기본 정보 카드

| 항목 | 내용 |
| --- | --- |
| 기간 | 2026.04 ~ 2026.05 |
| 역할 | Frontend, Infra, CI/CD |
| 주요 기술 | React, TypeScript, Unity WebGL, Docker, Nginx, AWS, GitLab CI/CD |
| 결과물 | 웹 포털, 게임 진입 흐름, WebGL 배포, 데모/정식/업데이트 릴리즈 |

### 핵심 기여

- React 기반 Egg Studio 웹 포털 구현
- 인증 상태 기반 게임 진입 흐름 구성
- Unity WebGL 빌드 정적 리소스 서빙 구조 정리
- S3/CloudFront 기반 WebGL 리소스 배포 검토 및 적용
- GitLab CI/CD, Kaniko, Docker Compose 기반 반복 가능한 배포 흐름 구성

### 추천 시각 자료

- `src/assets/hater/hater.webp`
- `src/assets/hater/hater-demo-thumbnail.png`
- `src/assets/hater/hater-placement-720p.gif`
- `src/assets/hater/hater-battle-2x-720p.gif`

---

## 8. Hater Frontend Flow

### 슬라이드 제목

게임 실행 전후를 하나의 서비스 흐름으로 설계

### 핵심 문장

단순히 WebGL 실행 페이지만 만든 것이 아니라, 사용자가 게임을 탐색하고 로그인 후 진입하며, 플레이 이후에도 랭킹/마이페이지/피드백/뉴스를 이용할 수 있는 웹 포털 흐름을 구성했습니다.

### 사용자 흐름

1. 홈에서 서비스와 게임 확인
2. 게임 목록/상세에서 Hater 정보 확인
3. 로그인 및 세션 검증
4. 게임 플레이 화면 진입
5. 랭킹, 마이페이지, 피드백, 뉴스로 서비스 이용 확장

### 화면 카드

| 화면 | 설명 |
| --- | --- |
| Home | Egg Studio 플랫폼 진입 화면 |
| Games | 제공 게임 목록과 게임 탐색 |
| Gameplay | WebGL 게임 진입 전후 흐름 |
| Login/Auth | 인증 기반 게임 이용 |
| My Page | 사용자 정보와 서비스 이용 관리 |
| Support/Feedback | 사용자 피드백 수집 |

### 추천 시각 자료

- `src/assets/hater/eggstudio-home-fullpage.png`
- `src/assets/hater/eggstudio-games-fullpage.png`
- `src/assets/hater/eggstudio-gameplay-fullpage.png`
- `src/assets/hater/eggstudio-login-auth-fullpage.png`
- `src/assets/hater/eggstudio-mypage-fullpage.png`
- `src/assets/hater/eggstudio-support-fullpage.png`

---

## 9. Hater Architecture / Deployment

### 슬라이드 제목

WebGL 게임을 운영 가능한 웹 서비스로 배포

### 구조 요약

| 영역 | 구성 |
| --- | --- |
| Frontend | React 웹 포털, 게임 진입 페이지, 인증 상태 UI |
| Game Resource | Unity WebGL `.wasm`, `.data`, `.framework.js` 정적 리소스 |
| Backend | Spring Boot API, 인증, 사용자 정보, 랭킹, 피드백 |
| Data | PostgreSQL, Redis |
| Delivery | AWS S3, CloudFront, Nginx |
| CI/CD | GitLab CI/CD, Kaniko, Docker Compose |
| Monitoring | Prometheus + Spring Metrics |

### 다이어그램 텍스트

사용자 -> React Web Portal -> 인증/세션 검증 -> Game Entry -> CloudFront/S3 WebGL Resource  
React Web Portal -> Spring Boot API -> PostgreSQL / Redis  
GitLab CI/CD -> Kaniko Build -> Docker/Nginx Deploy -> WebGL S3 Upload

### 발표 포인트

WebGL 파일은 일반 이미지처럼 단순히 올리는 리소스가 아니라 실행 경로, 캐시, MIME, 배포 버전 관리가 사용자 경험에 직접 영향을 주는 자산이라는 점을 설명한다.

---

## 10. Hater Problem Solving

### 슬라이드 제목

문제 해결: 실행, 세션, 배포, 운영

### 카드 구성

| 문제 | 해결 | 결과 |
| --- | --- | --- |
| WebGL 리소스 실행 경로와 캐시 문제 | 실행 경로를 환경변수로 분리하고 S3/CloudFront 배포 전략 검토 | 환경별 경로 차이로 인한 실행 오류 가능성 감소 |
| 게임 플레이 중 세션 만료 가능성 | 게임 진입 전 세션 검증, 토큰 리프레시, Heartbeat/Ping 적용 | 플레이 진입 경험의 안정성 개선 |
| 프론트/백엔드/WebGL 리소스 전체 배포 부담 | GitLab CI/CD에서 변경 컴포넌트 기준 부분 배포 로직 설계 | 반복 가능한 배포 흐름 확보 |
| 배포 이후 상태 확인 부족 | Prometheus와 Spring Metrics 연결 | 단순 실행 여부를 넘어 서비스 상태 관찰 기반 마련 |

### 발표 포인트

이 슬라이드는 가장 중요하다. 기능 목록이 아니라 "어떤 문제가 있었고, 내가 무엇을 판단해서 어떤 구조로 풀었는지"를 말한다.

---

## 11. Supporting Projects

### 슬라이드 제목

보조 프로젝트: 같은 문제 해결 방식을 다른 도메인에 적용

### 프로젝트 카드

| 프로젝트 | 요약 | 내가 보여준 역량 |
| --- | --- | --- |
| Mannequin | Photon Fusion 기반 3D 비대칭 PvP 호러 게임 | 멀티플레이 세션 상태, 로딩/씬 전환 UX, Unity CI 검증 환경, Mattermost 협업 자동화 |
| DDIB | 실시간 좌석 예매 및 교환 서비스 | 좌석 상태 기반 UI, 대기열 피드백, 티켓/교환 흐름, React/API 연동 |
| Pollin | AI 설문 디지털화 분석 솔루션 | 이미지 업로드, OpenAI API, Django, Vue 연동, AI 처리 단계를 사용자 흐름으로 구성 |

### 공통 메시지

- 상태가 중요한 서비스에서 사용자가 현재 위치를 이해할 수 있게 만들었다.
- 프론트엔드 화면을 단순 UI가 아니라 실제 서비스 흐름으로 연결했다.
- 팀 협업과 검증, 배포 가능성까지 함께 고려했다.

### 추천 시각 자료

- `src/assets/mannequin/MannequinArtwork.webp`
- `src/assets/ddib/ddib.webp`
- `src/assets/pollin/pollin.png`

---

## 12. Retrospective / Closing

### 슬라이드 제목

프로젝트를 통해 증명한 개발 방식

### 핵심 메시지

저는 화면을 만드는 것에서 끝내지 않고, 사용자가 서비스를 안정적으로 이용하고 팀이 반복적으로 배포할 수 있는 구조까지 함께 고민합니다.

### 강점 카드

| 강점 | 근거 |
| --- | --- |
| 사용자 흐름 설계 | Hater 웹 포털, DDIB 예매 흐름, Pollin AI 처리 단계 |
| 상태 기반 문제 해결 | Hater 세션 유지, Mannequin 세션/로딩, DDIB 좌석/대기열 |
| 배포/운영 관점 | Hater CI/CD, S3/CloudFront, Docker/Nginx, Prometheus |
| 현장 문제 이해 | 산업용 SCADA 운영 안정성, 장애 대응, 기술 지원 |

### 마무리 문장

웹, 게임, 현장 운영 경험을 연결해 실제 사용 가능한 서비스로 완성하는 개발자가 되겠습니다.

### 발표 포인트

마지막에는 모든 프로젝트를 다시 설명하지 않는다. 반복해서 드러난 나의 개발 방식을 정리하고, 지원 직무와 연결되는 한 문장으로 끝낸다.

---

## 장수 조절 옵션

### 10장으로 줄일 때

- 2장 Profile과 3장 Tech Stack을 합친다.
- 7장 Hater Overview와 8장 Hater Frontend Flow를 합친다.

### 14장으로 늘릴 때

- Hater Frontend Screens를 별도 슬라이드로 확장한다.
- Hater In-Game Preview를 별도 슬라이드로 확장한다.
- Supporting Projects를 Mannequin/DDIB/Pollin 각각 1장씩 나눈다.

## PPT 제작 체크리스트

- 각 프로젝트에 기간, 역할, 기술, 결과가 들어갔는가?
- 기술 스택이 단순 나열이 아니라 사용 맥락과 함께 설명되는가?
- Hater에서 문제 해결 4개가 명확히 보이는가?
- SCADA 경력에서 회사명, 고객사명, 실제 프로젝트명, 원본 화면, `작화`처럼 담당 범위를 넘는 표현이 없는가?
- 화면 캡처, 다이어그램, 결과물이 최소 1장 이상 들어가는가?
- 마지막 회고가 "배운 점"과 "앞으로의 개발 방향"을 보여주는가?
