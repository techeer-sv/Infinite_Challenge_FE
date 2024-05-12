# 기능 구현 챌린지 - 프론트엔드

### 구현 목표

- [한국임상정보](https://clinicaltrialskorea.com/) 페이지의 검색영역을 클론하기

### 참고자료

- 과제 요구 UI [[피그마 링크]](https://www.figma.com/file/2I7T132M48F6FbhJHwIB0r/Techeer-Infinite-Challenge-FE?type=design&node-id=0-1&mode=design&t=5ogNibInEDjJplQd-0)

- API
  - [https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name={검색어}](https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name={검색어)
    - 예제) 검색어에 ‘갑상선’을 넣었을 경우
      ```tsx
      [
        {
          name: "갑상선암",
          id: 4373,
        },
        {
          name: "갑상선염",
          id: 4376,
        },
        {
          name: "갑상선중독증",
          id: 4378,
        },
        {
          name: "갑상선 중독",
          id: 4381,
        },
        {
          name: "갑상선암종",
          id: 4375,
        },
        {
          name: "갑상선염증",
          id: 4377,
        },
        ...
      ];
      ```
  - https://api.clinicaltrialskorea.com/api/v1/studies/?offset=0&limit=10&conditions={검색어}
    - 예제) 검색어에 ‘갑상선’을 넣었을 경우
      ```jsx
      {
          "count": 8,
          "next": null,
          "previous": null,
          "sponsored_studies": [],
          "results": [
              {
                  "from_type": 1,
                  "url": "https://api.clinicaltrialskorea.com/api/v1/studies/29262/",
                  "id": 29262,
                  "ct_id": "201900132",
                  "locations": [],
                  "phases": [
                      "3상"
                  ],
                  "minimum_age_display": "18세",
                  "maximum_age_display": null,
                  "title": "이전 VEGFR 표적 요법 후 진행한 방사성요오드 치료저항성 분화 갑상선암 시험대상자에서 카보잔티닙(XL184)에 대한 제3상, 무작위배정, 이중 눈가림, 위약 대조 시험",
                  "start_date": "2019-01-01",
                  "completion_date": "2022-08-01",
                  "lead_sponsor_name": "파머수티컬리서치어소시에이츠코리아",
                  "brief_summary": "본 시험의 목적은 이전 VEGFR 표적 요법 후 진행한 RAI 저항성 DTC 시험대상자에서 위약과 비교하여 카보잔티닙이 PFS 및 ORR에 미치는 영향을 평가하는 것이다.",
                  "gender": "남녀모두",
                  "is_sponsor": false,
                  "survey_id": null,
                  "is_new": false,
                  "created_at": "2021-10-26T19:18:06.531105"
              },
              {
                  "from_type": 1,
                  "url": "https://api.clinicaltrialskorea.com/api/v1/studies/27142/",
                  "id": 27142,
                  "ct_id": "202100156",
                  "locations": [
                      {
                          "city": "서울"
                      }
                  ],
                  "phases": [
                      "연구자 임상시험"
                  ],
                  "minimum_age_display": "18세",
                  "maximum_age_display": "65세",
                  "title": "갑상선 전절제술을 시행받는 환자에서 수술 전 비타민 D(디맥정 30,000 IU) 경구 투여의 수술 후 저칼슘혈증 예방 효용성 연구",
                  "start_date": "2020-12-01",
                  "completion_date": "2022-12-01",
                  "lead_sponsor_name": "서울대학교병원",
                  "brief_summary": "수술 전 비타민 D3(cholecalciferol) 경구 복용의 수술 후 저칼슘혈증 예방효과를 증명하고자 하는 연구자 임상시험이다.",
                  "gender": "남녀모두",
                  "is_sponsor": false,
                  "survey_id": null,
                  "is_new": false,
                  "created_at": "2022-05-12T13:47:12.640427"
              },
              ...
          ]
      }
      ```

### 필수 구현 사항

- [] 질환 명 검색시 API를 호출하여 드롭박스를 통해 추천 검색어를 보여주는 기능을 구현합니다.
  - [] 검색어가 없을 시 “검색어 없음” 표출
  - [] 최근에 검색어를 보여줍니다.
- [] 검색어를 검색 시 결과를 리스트로 보여줍니다.
  - [] 검색어가 없을 시 화면도 구현
  - [] 검색 결과 컴포넌트를 클릭 시 `https://clinicaltrialskorea.com/studies/{검색어ID}` 링크로 이동
- [] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
  - []README에 전략에 대한 설명 기술
- [] API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- [] 과제를 수행하면서 진행하셨던 고민, 원래 구현하고자 했던 설계의 방향성 등을 Pull Request Body(PR Comment)에 적어서 제출해 주시면 감안하여 과제 검토를 진행할 예정이에요.

### 선택 구현 사항

- [] 키보드만으로 추천 검색어들로 이동 가능하도록 구현합니다.
  - ex) 키보드 방향키, 탭을 사용하여 다음 추천 검색어로 이동
- [] React-Query를 활용하여 캐싱을 구현합니다. 
- [] 검색어 결과는 페이지네이션 또는 무한스크롤 선택합니다. 
  - [] 외부 라이브러리 없이 구현할 경우 추가 점수 
- [] 스크랩 저장 기능을 구현합니다. 
  - [] 페이지를 새로고침 해도 리스트가 남아있도록 구현.
  - [] 즐겨찾기 페이지에서 스크랩한 결과물 리스트 보여주도록 구현.
  - [] 확인 모달을 통해 스크랩을 삭제.
- [] 뷰포트 크기에 따른 반응형 UI를 구현합니다. 
- [] Storybook을 사용하여 UI 인터렉션 테스팅을 구현합니다. 

### 프로그래밍 요구사항

- `useEffect`의 사용을 최소화하고, 사용 시 의존성을 명확히 정의한다.
- 모든 상수는 컴포넌트 외부에서 선언하여 관리한다.
- `if` 조건문을 활용해 값을 바로 반환함으로써 `else`를 사용하지 않도록 한다. 경우에 따라 `if/else` 또는 `switch` 문을 사용할 필요가 있을 때는 그 사용이 적절한지 고민한다.
- 들여쓰기(depth)는 최대 2단계까지만 허용한다. 이를 위해 함수나 메서드를 분리하는 방법을 고려한다.
- 모든 숫자 및 문자 리터럴은 명확한 이름을 가진 상수로 정의하여 사용한다.
- UI와 데이터 처리 로직을 명확히 분리하여 관리한다.
- 재사용 가능하도록 컴포넌트를 설계하고 구현한다.
- Styled-components 관련 코드는 각 컴포넌트의 하단에 위치시킨다.
- 컴포넌트와 함수의 이름은 그 목적이나 기능을 분명하게 반영할 수 있도록 명명한다.

> **제한된 시간 안에 과제를 완성하는 것은 많은 집중력이 필요해서 평소만큼 실력 발휘를 못 하셨을 수 있음을 충분히 이해하고 있어요.** 🙇🏻‍♀️

### 개발 조건 및 환경

- 언어
  - JavaScript
  - TypeScript (+1점)
- 프레임워크
  - React
  - Next.js
- 사용가능한 기술
  - 상태 관리 라이브러리 (Redux, Zustand, Jotai 등)
  - 스타일 관련 라이브러리 (styled-components, emotion, UI kit, tailwind, antd 등)
  - HTTP Client (axios 등)
  - 이외 과제 구현에 필요한 외부 라이브러리
  
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
