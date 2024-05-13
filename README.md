## 테커 프론트엔드 기능 구현 챌린지

### 챌린지 기간

2024년 5월 3일 ~ 2024년 5월 19일

### 구현 목표

한국임상정보 페이지의 검색영역을 클론하기

### 피그마

과제 요구 UI 
[피그마](https://www.figma.com/design/2I7T132M48F6FbhJHwIB0r/Techeer-Infinite-Challenge-FE?node-id=0-1&t=jbsiLdOPrqVuuMqO-0)

### 스토리북
[스토리북](https://6641c1126df24c244d462699-hgqohmnawo.chromatic.com/?path=/story/components-searchbar--basic)

### 기술스택

- React
- Vite
- Typescript
- Tanstack-query v5
- Axios
- React Router Dom
- Styled-components
- StoryBook

### 필수 구현 사항

- [x] 질환 명 검색시 API를 호출하여 드롭박스를 통해 추천 검색어를 보여주는 기능을 구현합니다.
- [x] 검색어가 없을 시 “검색어 없음” 표출
- [x] 최근에 검색어를 보여줍니다.
- [x] 검색어를 검색 시 결과를 리스트로 보여줍니다.
- [x] 검색어가 없을 시 화면도 구현
- [x] 검색 결과 컴포넌트를 클릭 시 https://clinicaltrialskorea.com/studies/{검색어ID} 링크로 이동
- [x] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- [x] API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API호출 횟수 확인이 가능하도록 설정

### 선택 구현 사항

- [x] [선택 사항 1] 키보드만으로 추천 검색어들로 이동 가능하도록 구현합니다.
- [x] [선택 사항 2] React-Query를 활용하여 캐싱을 구현합니다.
- [x] [선택 사항 3] 검색어 결과는 페이지네이션 또는 무한스크롤 선택합니다.
- [x] [선택 사항 4] 스크랩 저장 기능을 구현합니다.
- [x] [선택 사항 5] 뷰포트 크기에 따른 반응형 UI를 구현합니다.
- [ ] [선택 사항 6] 스토리북을 사용해 인터렉션 UI 테스팅
### 구현 내용

- 비즈니스 로직과 뷰 로직을 분리해 관심사 분리 및 재사용

  - **useSearchBar** <br/>
    => 검색창에서 쓰이는 UI로직에 관련된 비즈니스 로직 관리
  - **useSearchResult** <br/>
    => 검색창에서 반환하는 검색결과에 관련된 비즈니스 로직 관리
  - **useDebouncedSearch** <br/>
    => useDebouncedSearch을 생성하여 검색어에 debounce를 적용해 사용자가 검색어 입력을 시작한 후 500ms동안 입력이 없으면 API가 호출되도록 구현
  - **useHandleModal** <br/>
    => modal custom hook을 활용해 모달의 상태 관리
  - **useInfiniteScroll** <br/>
    => Intersection Observer API를 활용해 요소를 관찰하고 관찰하는 요소의 관찰여부에 따라 callback 함수 실행
  - **useInput** <br/>
    => input custom hook을 활용해 input 상태 관리

- 서버 부하를 고려해 React-Query 캐싱 적용

- 검색창, 검색 결과, 검색 없음 컴포넌트 재사용해 개발 기간 단축



- Intersection observer를 활용해 무한스크롤 구현

- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
  - 검색창에서 onKeyDown 이벤트가 발생했을 때 event.key 값이 ArrowDown, ArrowUp일 경우 selectedIndex가 변경되게 했고 추천 검색어의 index와 selectedIndex가 같을 때 background-color가 변경되도록 구현.

 
### 검색창
![2024-05-1010 09 48-ezgif com-video-to-gif-converter](https://github.com/Leeseunghwan7305/Infinite_Challenge_FE/assets/78102507/378ec5b8-452d-4c64-8147-4f8a909deea7)

### 검색 리스트 무한 스크롤

![ezgif com-video-to-gif-converter](https://github.com/Leeseunghwan7305/Infinite_Challenge_FE/assets/78102507/a4e5f022-7ccc-41f7-b7ab-3aa66b7b98de)

### 검색 리스트 즐겨찾기 스크랩 등록 및 삭제

![ezgif com-video-to-gif-converter (1)](https://github.com/Leeseunghwan7305/Infinite_Challenge_FE/assets/78102507/1e74507b-1608-4f5f-9b9b-7fc9159fe29d)







