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

# 리액트 프로젝트 생성 기본 명령어 vite

npm create vite@latest {폴더 명} -- -- template {템플릿 명}

ex. npm create vite@latest pub -- -- template react-todolist

cd pub

npm install

npm run dev

# Git 자주사용하는 명령어

1. git init

2. git 로그인
   git config --global user.name "YourUsername"
   git config --global user.password "<your_token>"

3. 원격저장소 추가 $ git remote add origin <원격 저장소 URL>
   git remote add origin https://github.com/Gorillaz9/study_react_todo.git

4. 원격저장소 동기화
   git clone https://github.com/Gorillaz9/study_react_todo.git

5. 브랜치 만들기

- branch 생성 및 해당 브랜치로 이동 --> 각자 브랜치를 나누고 각 브랜치에서 업데이트 예정
  git branch {브랜치*이름}
  git checkout {브랜치*이름}

6. 업데이트할 작업내역을 추가 및 요약맨트
   git add .
   git commit -m "작업 내용 요약"

7. 해단 브렌치에 작업 업데이트
   git pull : push 전에 항상 원격저장소와 동기화 먼저
   git push : add 한 파일 원격 저장소에 업로드

# Git 버전관리 명령어 총정리 - 참고

git init . <<버전관리의 시작을 알리는 명령이다.
Repository : 파일 저장소
working tree : 작업하고 있는 File
Staging Area : 버전을 만드려 하는 File

git status : 현재 작업 상태를 출력한다

git add (file) : file을 staging Area에 올라간다.

git add . : 현재 Dir에 있는 파일 전부 add된다.

git commit -m "Msg": 버전을 생성한다.

commit -am : add와 commit이 같이 된다.

git log : git의 버전을 보여준다

git log --state : 해당 version에 관련된 정보를 보여준다.

git diff : 파일의 수정사항을 보여준다.

git reset --hard : 작업한 내용이 사라진다.

git log -p : 버전간 차이점 내용을 보여준다.

git checkout (commitID) : commitID의 시점으로 파일이 복귀한다.

git checkout master : 가장 최신 version으로 복귀한다.

git reset --hard (commitID) : commitID Verson으로 reset한다.(Master가 변경된다) //branch를 바꾼다.

git revert commitID : commitID의 이전 version으로 회귀하지만 기존 version은 삭제되지 않는다.
//revert는 역순으로 차근차근 접근해야 충돌이 발생하지 않는다.

git remote add (repo별명) https://xxx.xx.xxxx : 원격 저장소와 로컬 저장소를 연결시킨다.

git push : 원격 저장소에 파일을 업로드한다.

git clone https://xx.xxx.xx. : 원격 저장소와 같은 환경을 구축한다.

git pull : 원격 저장소로부터 동기화한다.

# Branch

git branch : branch의 목록을 보여준다

git branch (branch name) : name에 해당하는 branch를 생성한다.

git checkout (branch name) : 해당 branch version으로 돌아간다. >> Head의 값을 바꾼다.

git merge (target branch) : Head branch에서 target Branch에 있는 내용을 당겨와 새로운 ver을 만든다.

# bconflict

conflict가 발생하면 >>>> ==== <<<<로 같은 위치에서 수정이 일어난 내용을 보여준다.

이는 사용자가 원하는 대로 수정 후에 add하고 commit하면 conflict를 해결할 수 있다.

# fetch

git fetch는 내 로컬 repository에 version이 원격 repository와 비교했을 때 master와 어떤 관계인지 보여준다.

git merge는 pull과 비슷하며 원격repository와 업데이트를 한다.

# patch (commit Id)

repository에 권한이 없는 사용자가 repository master에게 내가 작업한 내용을 전달할 수 있다.

git am -3(3way mergi) -i(interactive) \*.patch : 모든 패치파일을 적용한다.

# pull request

clone : 같은 저장소에서 작업한다.

fork : 저장소를 복제해서 내 저장소로 옮겨온다.

# Compare : base repository와 차이를 비교해준다.

create pull request : 내 작업물을 base repository owner에게 내 작업물을 가져가달라고 요청한다.

merge pull request : requset요청한 내용을 내 작업물에 merge한다.
