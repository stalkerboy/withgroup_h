# app 적용사항

## 기본 폴더/파일 구조

1. 파일, 클래스 명명규칙

   - 명명규칙은 자원/행동 으로..? RESTFUL 하도록,,,, )
   - 파일, 폴더명의 경우 모두 소문자 (appletree.js)
   - 클래스 이름은 파스칼케이스 (AppleTree)
   - 펑션 이름은 카멜케이스 (appleTree())

2. 폴더구조 수정

   - 상위 폴더,파일 명칭 통일 (Screen)  
     특정행위 파일의 경우만 제외(Auth 등)
     ex1) User 기능의 경우  
     /screen/user/login/loginscreen.js
     /screen/user/register/registerscreen.js
     /screen/user/modify/modifyscreen.js
     /screen/user/modify/delete.js

     특수 처리해야할 부분만 다른 이름으로 명명

   - 공통 컴포넌트는 /shared  
     /shared/constants.js  
     /shared/componet/textcp.js

3. env 파일 (개발용 env.development, 출시용 env.production) 적용

   - 적용 방법  
     yarn add react-native-dotenv

     babel.config.js 추가  
     'module:react-native-dotenv'

   - 값이 변경이 안되는 경우가 있어 env 변경후 변수사용 파일 변경해야 정상적용
