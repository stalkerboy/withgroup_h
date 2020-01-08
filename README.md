# lerna 적용

- 프로젝트 릴리즈 버전관리 편의성
- 모노레포 관리 편의성
- 공유 사용 모듈 통일

## 최초설치

1.  npx lerna -i init  
    추가적으로 lerna.json 에  
    "npmClient": "yarn",  
    "useWorkspaces": true

2.  상단 package.json 에 버전관리 스크립트 추가  
    "scripts": {  
    "test": "lerna run test --since",  
    "new-version": "lerna version --conventional-commits --yes",  
    "diff": "lerna diff"  
    }

3.  모노 레포의 package.json 네임 수정  
    "name": "@withgroup/common"

4.  git 등록(깃에 등록되어야 version가능)  
    init, commit, push

## 사용법

1. yarn test -> 확인
2. yarn diff -> 차이 확인
3. yarn new-version 새 버전 릴리즈(major minor 로 추가 가능 )
   independent라서 버전 정보 따로 감
   independent가 아닐경우
   new-version 의 경우 수정한 패키지와 lerna 버전 새버전 적용  
   pack1 : 1.0.1 / pack2 : 1.0.2 / lerna: 1.0.2 -> pack1만 수정  
   pack1 : 1.0.3 / pack2 : 1.0.2 / lerna: 1.0.3
