# Projects List Style Plan

## 목적

`src/index.html`의 Projects 섹션 안 DDIB 설명 리스트의 가독성을 높이고, 이후에도 같은 형식으로 재사용할 수 있게 구조와 스타일 기준을 정리한다.

## 현재 상태

대상 위치:

- `src/index.html` 약 320줄 근처

현재 문제:

- `div` 안에 `li`가 바로 들어가 있어 HTML 구조가 어색하다.
- 리스트 전용 클래스가 없어 글씨 크기, 줄간격, 간격 조절 범위가 모호하다.
- 추후 다른 프로젝트 설명에도 같은 스타일을 재사용하기 어렵다.

## 수정 방향

### 1. 마크업 구조 정리

현재 `div` wrapper를 `ul`로 바꾸고, 클래스명을 부여한다.

예시:

```html
<ul class="project-wrapper__list">
  <li>
    프론트엔드 담당으로서 좌석 예매/교환 서비스의 주요 화면과 사용자 흐름을 구현했습니다.
  </li>
  <li>
    좌석 상태 확인, 선택, 예매 진행 과정이 끊기지 않도록 UI와 API 연동 구조를 구성했습니다.
  </li>
  <li>
    테스트 과정에서 즉시 수정이 필요한 기능과 화면 연결 이슈를 대응하며 서비스 안정성을 높였습니다.
  </li>
</ul>
```

수정 파일:

- `src/index.html`

### 2. 스타일은 Projects 전용 SCSS에 추가

스타일은 `src/sass/sections/_projects.scss` 안의 `.project-wrapper__text` 영역에 둔다.

예시:

```scss
.project-wrapper__list {
  margin: 1.6rem 0 0;
  padding-left: 2rem;
  font-size: 1.6rem;
  line-height: 1.7;
}

.project-wrapper__list li + li {
  margin-top: 0.8rem;
}
```

수정 파일:

- `src/sass/sections/_projects.scss`

## 추천 이유

- 구조적으로 맞는 HTML이 된다.
- 리스트 전용 클래스가 생겨서 글씨 크기만 따로 조절하기 쉽다.
- 다른 프로젝트 설명에도 동일한 스타일을 재사용할 수 있다.
- `hero`나 다른 섹션 스타일과 섞이지 않고 `projects` 범위 안에서만 관리된다.

## 조절 기준

글씨가 조금 작다고 느껴지면:

- `font-size: 1.6rem` -> `1.7rem`

줄 간격을 더 넓히고 싶으면:

- `line-height: 1.7` -> `1.8`

항목 사이 간격을 더 띄우고 싶으면:

- `margin-top: 0.8rem` -> `1rem` 또는 `1.2rem`

## 우선 추천안

이번 수정은 아래 방식으로 진행하는 것이 가장 안전하다.

1. `index.html`의 리스트를 `ul.project-wrapper__list` 구조로 변경
2. `_projects.scss`에 리스트 전용 스타일 추가
3. 로컬에서 `npm start`로 화면 확인 후 글씨 크기만 미세 조정

## 참고

현재 프로젝트는 `src/index.html`에서 `styles.scss`를 로드하고, `styles.scss`가 `src/sass/sections/_projects.scss`를 import 하는 구조다.
