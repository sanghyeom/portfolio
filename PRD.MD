# PRD - DDIB 프로젝트 이미지 추가 가이드

## 1. 목적
`src/index.html`의 DDIB 카드 클릭 시 모달 캐러셀에 원하는 이미지를 표시한다.

## 2. 현재 동작 방식
- `data-images` 속성의 값을 `,`(콤마)로 분리해서 캐러셀 아이템을 만든다.
- 썸네일(`img src`)은 카드에서 보이는 대표 이미지다.
- 즉, `data-images`와 `img src`는 서로 역할이 다르다.

## 3. 이미지 추가 방법
1. 이미지 파일을 `src/assets/ddib/`에 넣는다.
2. DDIB 블록의 `data-images`에 경로를 콤마로 나열한다.
3. 썸네일로 보일 이미지를 `img src`에 지정한다.

## 4. 수정 예시 (복붙용)
대상: `src/index.html`의 DDIB 프로젝트 `<a class="js-project-gallery-trigger" ...>`

```html
<a
  rel="noreferrer"
  href="#"
  class="js-project-gallery-trigger"
  data-bs-toggle="modal"
  data-bs-target="#projectImageModal"
  data-images="assets/ddib/ddib.jpg, assets/ddib/ddib_1.png, assets/ddib/ddib_2.png, assets/ddib/ddib_3.png, assets/ddib/ddib_4.png, assets/ddib/ddib_5.png, assets/ddib/ddib_6.png, assets/ddib/ddib_7.png, assets/ddib/ddib_8.png"
  aria-label="DDIB 프로젝트 이미지 보기"
>
  <div
    data-tilt
    data-tilt-max="4"
    data-tilt-glare="true"
    data-tilt-max-glare="0.5"
    class="thumbnail rounded js-tilt"
  >
    <img
      alt="Project Image"
      class="img-fluid"
      src="assets/ddib/ddib.jpg"
    />
  </div>
</a>
```

## 5. 확인 체크리스트
1. 클릭 시 모달이 열리는지 확인
2. 좌/우 화살표로 이미지가 넘어가는지 확인
3. 이미지가 안 나오면 경로 오탈자(`assets/ddib/...`) 확인
4. 수정 후 반영이 늦으면 브라우저 강력 새로고침

