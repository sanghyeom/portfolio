# Template Cleanup Tasks

## 목적

포트폴리오 사이트에서 아직 남아 있는 `Simplefolio` 템플릿 흔적을 정리해
완성도와 신뢰감을 높인다.

이 문서는 작업 정리용이며, 아직 실제 수정은 진행하지 않은 상태를 기준으로 작성한다.

---

## 작업 대상

- `src/index.html`

---

## 왜 필요한가

- 현재 사이트는 내용과 프로젝트는 많이 커스터마이징되어 있지만,
  head 영역과 일부 주석에는 템플릿 기본 문구가 남아 있다.
- 이런 부분은 기능 오류는 아니지만, 포트폴리오 완성도를 떨어뜨릴 수 있다.
- 특히 SEO 메타, 언어 설정, 불필요한 외부 스크립트는 정리해두는 편이 좋다.

---

## 확인된 항목

### 1. 언어 설정

현재:

```html
<html lang="en" class="sr">
```

정리 방향:

- 본문이 한국어 중심이므로 `lang="ko"`로 변경 검토

---

### 2. title 정리

현재:

```html
<title>[Yun Sanghyeon] | Developer</title>
```

정리 방향:

- 대괄호 제거
- 실제 포트폴리오 제목으로 자연스럽게 정리

예시:

```html
<title>윤상현 | Developer Portfolio</title>
```

또는

```html
<title>윤상현 | 포트폴리오</title>
```

---

### 3. meta keywords placeholder 제거

현재:

```html
<meta name="keywords" content="[username], [name], skill" />
```

문제:

- 템플릿 기본 placeholder 상태

정리 방향:

- 실제 키워드로 교체하거나
- 필요 없으면 삭제

예시:

```html
<meta
  name="keywords"
  content="윤상현, 포트폴리오, 개발자, React, Spring, JavaScript, Python"
/>
```

---

### 4. meta description placeholder 제거

현재:

```html
<meta name="description" content="[Your name here] | Developer" />
```

문제:

- 템플릿 기본 placeholder 상태

정리 방향:

- 본인 소개에 맞는 한 줄 설명으로 교체

예시:

```html
<meta
  name="description"
  content="현장을 이해하고 시스템으로 개선하는 개발자 윤상현의 포트폴리오입니다."
/>
```

---

### 5. Todo 주석 정리

현재 `head`와 문서 상단에 템플릿 제작자 기준 Todo 주석이 남아 있음.

예:

- `Todo: put here your site title`
- `Todo: add some coding keywords below`
- `Todo: improve your SEO`
- `Todo: remove the below script once you finish your portfolio`

정리 방향:

- 더 이상 필요 없는 템플릿 주석 제거

---

### 6. 불필요한 GitHub 버튼 스크립트 제거

현재:

```html
<script async defer src="https://buttons.github.io/buttons.js"></script>
```

문제:

- 현재 화면에서 GitHub 버튼을 사용하지 않음
- 불필요한 외부 스크립트 로드

정리 방향:

- 스크립트 제거

---

### 7. 템플릿 소개 주석 유지 여부 검토

문서 최상단에 `Simplefolio` 소개 주석이 남아 있음.

정리 방향:

- 완전히 제거하거나
- 필요하면 라이선스 관점에서 최소 표기로 남길지 판단

권장:

- 화면 소스 상단 주석은 제거
- footer의 `Based on Simplefolio template` 문구는 필요 시 유지

---

## 추천 우선순위

1. `lang` 수정
2. `title` 수정
3. `description` 수정
4. `keywords` 수정 또는 삭제
5. `Todo` 주석 제거
6. GitHub 버튼 스크립트 제거
7. 상단 템플릿 소개 주석 정리

---

## 작업 후 확인 항목

- 브라우저 탭 제목이 자연스럽게 보이는지
- 페이지 소스에 placeholder 문구가 남아 있지 않은지
- 불필요한 외부 스크립트가 제거되었는지
- `npm run build`가 정상 통과하는지

---

## 한 줄 요약

이번 작업은 기능 추가가 아니라,
포트폴리오를 `내 사이트처럼 보이게 만드는 마무리 정리 작업`이다.
