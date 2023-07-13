# Project_Simple-brain-training

# 개요

React에 익숙해지기 위한 첫 프로젝트 입니다.

간단한 뇌 훈련 테스트 이며 치매 예방 테스트에서 아이디어를 얻었습니다.

---

# [07-13] Router 적용 및 Input 컴포넌트 초본

1. Next 버튼을 누르면 다음 문제로 넘어가기a

→ 라우터 학습 및 이용 → FindAnimalName 페이지 작성

// 해당 부분은 다음 페이지들을 개발하면서 수정 예정

1. Input 컴포넌트 작성

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b8eaaf99-98df-47b5-9483-cf04694618e9/Untitled.png)

- Focus 될 때 text 아래 밑줄 제거
- maxLength 후에 추가 입력 방지 (다음 Input 으로 넘어가거나 ..)
- 이 컴포넌트를 이용해서 추가 컴포넌트 작성 (제시된 자음 + inpu)
  - 문제 가지고 있는 객체를 따로 만든 후 반복문으로 중복 코드 최소화 예정

# [07-12] 메인 페이지 작성하기

추가 작성 컴포넌트

1. Card Component

글 - 이미지 - 버튼 혹은 이미지 - 글 - 버튼 순의 카드 형식의 배치가 반복될 것 같아 카드 컴포넌트를 작성 하였습니다.

카드 컴포넌트를 이용하여 메인 페이지를 작성하였습니다.

# [07-11] 메인 컴포넌트 작성하기

통일된 Text를 보여주기 위해 Txt Component를 만들었습니다.

Button 역시 종종 쓰일 것 같아 만들었습니다.

메인 화면은 심플하게 프로젝트 이름과, 다음 페이지로 넘어갈 버튼으로 구성 되도록 진행 할 예정입니다.

`@emotion` 을 채택했습니다. → CSS-In-JS

페이지 전체를 쓸 부분은 아니기 때문에 고정된 위치에서 보여주기 위해 pageLayout 컴포넌트를 만들었습니다.

작성한 컴포넌트

1. Txt
2. Button
3. PageLayout
