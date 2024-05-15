### 개발 조건 및 환경

- 언어
  - TypeScript
- 사용한 기술
  - React
  - 스타일 관련 라이브러리 : Styled-Components
  - HTTP Client : axios

### 필수 구현 사항

- [x] 질환 명 검색시 API를 호출하여 드롭박스를 통해 추천 검색어를 보여주는 기능을 구현합니다.
  - [x] 검색어가 없을 시 “검색어 없음” 표출
  - [x] 최근에 검색어를 보여줍니다.
- [x] 검색어를 검색 시 결과를 리스트로 보여줍니다.
  - [x] 검색어가 없을 시 화면도 구현
  - [x] 검색 결과 컴포넌트를 클릭 시 `https://clinicaltrialskorea.com/studies/{검색어ID}` 링크로 이동
- [ ] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
  - 검색어 입력 시 500ms마다 요청이 되도록 간단한 디바운스 적용
  - useQuery에 enabled을 사용해 조건에 맞을 경우에만 실행하도록 구현
- [x] API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

### 추가 구현 사항

- [ ] 공통 컴포넌트 구현
  - [x] 헤더 구현
  - [x] 검색 리스트 구현
  - [x] 드롭박스 구현
  - [ ] 모달 구현
- [ ] 커스텀훅 사용을 통한 로직 분리

### 선택 구현 사항

- [x] **[선택 사항 1]** 키보드만으로 추천 검색어들로 이동 가능하도록 구현합니다.
  - ex) 키보드 방향키, 탭을 사용하여 다음 추천 검색어로 이동
- [ ] **[선택 사항 2]** React-Query를 활용하여 캐싱을 구현합니다.
- [ ] **[선택 사항 3]** 검색어 결과는 페이지네이션 또는 무한스크롤 선택합니다.
  - [ ] 외부 라이브러리 없이 구현할 경우 추가 점수
- [ ] **[선택 사항 4]** 스크랩 저장 기능을 구현합니다.
  - [ ] 페이지를 새로고침 해도 리스트가 남아있도록 구현.
  - [ ] 즐겨찾기 페이지에서 스크랩한 결과물 리스트 보여주도록 구현.
  - [ ] 확인 모달을 통해 스크랩을 삭제.
- [ ] **[선택 사항 5]** 뷰포트 크기에 따른 반응형 UI를 구현합니다.
- [ ] **[선택 사항 6]** Storybook을 사용하여 UI 인터렉션 테스팅을 구현합니다.

### 과제를 수행하면서 진행하셨던 고민

-

### 구현하고자 했던 설계의 방향성

-
