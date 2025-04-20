# study_react_todo

study_react_todo

ost0102 오승택

ssu410 강수경

yimkyuri 귤2

pub 퍼브

jihye 지혜님 아직 git 아이디 안보내주셨음

jooyoung 주영님 아직 git 아이디 안보내주셨음

리액트 주말 스터디

1. 2025 04 13 - 생활코딩 리액트
   https://www.youtube.com/playlist?list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7

2. 2025 04 20 - React TODO
   https://www.youtube.com/playlist?list=PLyjjOwsFAe8J9tqYqO_y7Fr6FTSncZQZI

3. 2025 04 27 - 리액트 원페이지 웹 제작? 예정

---

# 리액트 프로젝트 생성 기본 명령어 vite ~

npm create vite@latest {폴더 명}

ex. npm create vite@latest react-todo-list

cd react-todo-list

npm install

npm run dev

# Git 자주사용하는 명령어

1. git init

2. git 로그인

   $ git config --global user.name "YourUsername"

   $ git config --global user.email johndoe@example.com

   --- or Personal Access Token : Git 토큰 인증 로그인 방법 ---

   $ git config --global user.name "Your_User_name"

   $ git config --global user.password your_Access_Token

3. 원격저장소 추가 $ git remote add origin <원격 저장소 URL>

   $ git branch -M main

   $ git remote add origin https://github.com/Gorillaz9/study_react_todo.git

4. 원격저장소 동기화

   $ git clone https://github.com/Gorillaz9/study_react_todo.git

5. 업데이트할 작업내역 add 및 commit

   $ git add .

   $ git status // stage 추가 된 파일 목록 보기

   $ git commit -m "작업 내용 메모 텍스트 작성"

6. 해단 브렌치에 작업 업데이트

   $ git pull : push 전에 항상 원격저장소와 동기화 먼저

   $ git push : add 한 파일 원격 저장소에 업로드
