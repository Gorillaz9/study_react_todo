# React Todo study

https://www.youtube.com/watch?v=PQIXOLt2TrM

---

# TODO List 작업 -> App.jsx

1. localStorage에 todolist 배열, sequance 카운터값 등록

2. useEffect((), []) // 첫화면 로딩때 실행: todolist[] 로컬저장소 가져오기 또는 초기화

3. handleTodoAdd = (item) => {} // + Add 버튼 클릭시 실행

4. handleTodoCheck = (tf, idx) => {} // v 체크 클릭 하면 실행

5. handleTodoDelete = (id) => {} // x 삭제 버튼 클릭하면 실행

---

# localStorage란?

localStorage를 사용하면, 브라우저에 key-value 값을 Storage에 저장할 수 있습니다.
저장한 데이터는 세션간에 공유됩니다.

즉, 세션이 바뀌어도 (브라우져 새로 고침시에도) 저장한 데이터가 유지됩니다.

setItem() - key, value 추가

getItem() - value 읽어 오기

removeItem() - item 삭제

clear() - 도메인 내의 localStorage 값 삭제

length - 전체 item 갯수

key() - index로 key값 찾기

# localStorage에 아이템 추가, 읽기

1. setItem()

   localStorage에 아이템을 추가하기 위해서는 setItem() 함수를 사용합니다.

   window.localStorage.setItem(key, value)

2. getItem()

   localStorage의 아이템을 읽기 위해서는 getItem() 함수를 사용합니다.

   window.localStorage.getItem(key)

3. localStorage에 객체나 배열를 저장하기 위해서는 객체와 배열를 JSON 문자열로 변환해서 저장

   const objString = JSON.stringify(obj);

4. JSON 문자열을 localStorage에 저장하였습니다.

   window.localStorage.setItem('person', objString);

5. localStorage에 값 삭제하기 removeItem()
   window.localStorage.removeItem(key);

---

# useEffect

1. 기본 형태 : useEffect( function, 배열 )

2. component가 렌더링 될 때마다 특정 작업을 처리

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
