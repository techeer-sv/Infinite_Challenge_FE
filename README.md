# 기능 구현 챌린지 - 프론트엔드

### 구현 목표

- [한국임상정보](https://clinicaltrialskorea.com/) 페이지의 검색영역을 클론하기
  

### 필수 구현 사항

- [ ] 질환 명 검색시 API를 호출하여 드롭박스를 통해 추천 검색어를 보여주는 기능을 구현합니다.
  - [x] 검색어가 없을 시 “검색어 없음” 표출
  - [x] 최근에 검색어를 보여줍니다.
- [ ] 검색어를 검색 시 결과를 리스트로 보여줍니다.
  - [x] 검색어가 없을 시 화면도 구현
  - [ ] 검색 결과 컴포넌트를 클릭 시 `https://clinicaltrialskorea.com/studies/{검색어ID}` 링크로 이동
- [ ] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
  - [ ]README에 전략에 대한 설명 기술
- [x] API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- [ ] 과제를 수행하면서 진행하셨던 고민, 원래 구현하고자 했던 설계의 방향성 등을 Pull Request Body(PR Comment)에 적어서 제출해 주시면 감안하여 과제 검토를 진행할 예정이에요.

### 선택 구현 사항

- [ ] 키보드만으로 추천 검색어들로 이동 가능하도록 구현합니다.
  - ex) 키보드 방향키, 탭을 사용하여 다음 추천 검색어로 이동
- [ ] React-Query를 활용하여 캐싱을 구현합니다. 
- [ ] 검색어 결과는 페이지네이션 또는 무한스크롤 선택합니다. 
  - [ ] 외부 라이브러리 없이 구현할 경우 추가 점수 
- [ ] 스크랩 저장 기능을 구현합니다. 
  - [ ] 페이지를 새로고침 해도 리스트가 남아있도록 구현.
  - [ ] 즐겨찾기 페이지에서 스크랩한 결과물 리스트 보여주도록 구현.
  - [ ] 확인 모달을 통해 스크랩을 삭제.
- [ ] 뷰포트 크기에 따른 반응형 UI를 구현합니다. 
- [ ] Storybook을 사용하여 UI 인터렉션 테스팅을 구현합니다. 


## 📈 진행 요구사항
- 미션은 [Infinite_Challenge_FE](https://github.com/techeer-sv/Infinite_Challenge_FE) 를 fork/clone해 시작한다.
- 기능을 구현하기 전에 Infinite_Challenge_FE 레포지토리 하위에 README.md 파일을 생성해 구현할 기능 목록을 정리해 추가한다.
- git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가한다.
  - [AngularJS Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 참고해 commit log를 남긴다.
- 아래 절차를 따라 미션을 제출한다.
  - 본 repository를 개인 repository로 fork한다.
  - fork한 저장소를 자신의 컴퓨터로 clone한다.
  - 기능 구현을 위한 브랜치를 생성한다. 브랜치 이름은 본인의 github ID를 이용한다.
  - 생성한 브랜치에서 기능을 구현한다.
    - 최상위 디렉토리에 바로 소스코드가 보이도록 해주세요, 불필요한 depth가 존재하면 안됩니다.
  - 기능 구현이 종료되면, [Infinite_Challenge_FE](https://github.com/techeer-sv/Infinite_Challenge_FE)로 Pull Request를 남긴다.
