## 구현 기능 목록

- [x] 프로그램 초기 설정

  - [x] vite, ts, react, eslint
  - [x] 스토리북
  - [x] tailwind

- [ ] 컴포넌트 구현

  - [x] 칩
  - [x] 토글 버튼
  - [x] 검색바
  - [x] 드롭박스
  - [x] 모달
  - [ ] 검색 리스트
    - [x] 단일 검색 리스트 요소
    - [x] 최근 검색어
    - [x] 추천 검색어
  - [ ] 헤더

- [ ] 한국임상정보 페이지 퍼블리싱

- [ ] 질환 검색 드롭박스 퍼블리싱
- [ ] 질환 검색 추천 검색어 API 연결
  - [ ] 어느 시점에 API를 호출할지 고민
- [ ] 질환 검색 최근 검색어 표현

- [ ] 검색 페이지 퍼블리싱

  - [ ] 검색 결과 API 연결
  - [ ] 무한스크롤 및 페이징 처리

  - [ ] 스크랩 저장 기능 구현

## 고민 사항

1. Icon요소의 경우 SVG로 export 후 컴포넌트로 분리하여 사용

- 색상, 크기만 다르고 형태가 같은 Icon이 많이 보였기 때문
- 추가적인 수정에 대해 동적으로 아이콘 요소를 컨트롤 가능

2. ToggleButton

- 초기에는 내부에서 useState를 통해 상태값을 관리하였으나, 외부로 분리
- api 호출 실패 등 클릭을 했을 때 항상 상태가 변화한다는걸 보장할 수 없고 컴포넌트쪽에서 처리하는게 더 유연하다고 생각
