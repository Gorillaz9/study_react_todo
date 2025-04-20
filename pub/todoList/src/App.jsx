import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {
  // TODO list 전체 데이터 배열
  const [todoList, setTodoList] = useState([]); // TODO list 목록 배열 {tf: false, id: 11, text: "1"}
  const [sequance, setSequance] = useState(null); // sequance 카운터 id 숫자

  // TODO list 입력 input 선택자
  const refTodoItem = useRef();

  // useEffect((), []) 컴포넌트가 화면에 처음 렌더링 될 때 실행
  useEffect(() => {
    // getItem("sequance") : localStorage의 저장소 sequance(카운터 id) 가져와 읽기
    let sequance = window.localStorage.getItem("sequance");

    if (sequance === null) {
      // setItem(key, value) : localStorage에 sequance id 값이 null 이면 0 추가
      window.localStorage.setItem("sequance", "0");
      sequance = 0;
    }

    const handleSetInit = () => {
      // setItem(key, value) : localStorage에 todolist 배열 빈배열[] 추가
      window.localStorage.setItem("todolist", "[]");
      return "[]";
    };

    // todo = JSON 문자열로 변환해서 todolist 배열 가져오거나 배열값이 없으면 todolist[빈배열] 변수 저장
    let todo = JSON.parse(window.localStorage.getItem("todolist") ?? handleSetInit());

    setTodoList(todo); // JSON 문자열로 변환된 로컬스토리지 저장소 => todoList[] 배열에 업데이트
    setSequance(Number(sequance)); // 로컬스토리지 카운트 id값 넘버 숫자로 변환해서 sequance에 업데이트
  }, []);

  // + Add 버튼 클릭시 실행 인자로 인풋입력 값 item으로 전달
  const handleTodoAdd = (item) => {
    console.log(item);

    // 등록된 값이 없으면 handleTodoAdd함수 종료
    if (sequance === null) {
      return;
    }

    // 기존 todoList 배열 복사본 todo 배열 만들기
    let todo = [...todoList];

    // todo 배열에 input 입력값 가져와서 push
    todo.push({ tf: false, id: sequance + 1, text: item });

    // 브라우져 로컬스토리지 todo에 입력된 내용 todo배열로 문자열로 변환하여(JSON.stringify(todo)) 입력
    window.localStorage.setItem("todolist", JSON.stringify(todo));
    //
    window.localStorage.setItem("sequance", String(sequance + 1));

    setTodoList(todo); // input입력값 추가된 todo배열값 TodoList에 업데이트
    setSequance(sequance + 1); // todo배열값 TodoList에 업데이트하면서 카운터 id값 1증가
    refTodoItem.current.value = ""; // refTodoItem input 태그 입력폼 빈문자열로 리셋
  };

  // TODO list 체크 클릭 하면 체크한 todolist의 값을 가져와서 {tf: false, id: 11, text: "1"}
  const handleTodoCheck = (tf, idx) => {
    let todo = [...todoList]; // todoList 복사본 만들기
    todo[idx].tf = !tf; // todo 복사본 배열의 tf값을 true 값으로 변경 - 체크했는지 안했는지 확인 로직

    // 로컬스토리지 todolist에 문자열로 바꾼 todo 데이터 업데이트
    window.localStorage.setItem("todolist", JSON.stringify(todo));
    setTodoList(todo); // todoList 배열에 업데이트
  };

  // x 삭제 버튼 클릭하면 todoList배열의 클릭한 id값 가져오기
  const handleTodoDelete = (id) => {
    let todo = [...todoList];
    todo = todo.filter((val) => val.id != id); // todolist 복사본에서 클릭한 id값과 다른 아이디값을 가진 데이터들만 배열에 추가

    window.localStorage.setItem("todolist", JSON.stringify(todo)); // todolist에 문자열로 변환하여 업데이트
    setTodoList(todo); // todoList 배열에 업데이트
  };

  return (
    <div className="mainLayout">
      <div className="todoLayout">
        <div className="todoTop">
          <div className="todoTitle"> TODO LIST</div>
          <div className="todoAdd">
            <input type="text" placeholder="할 일을 입력하세요!" ref={refTodoItem} />
            <div
              onClick={() => {
                handleTodoAdd(refTodoItem.current.value);
              }}>
              +
            </div>
          </div>
        </div>

        <div className="listLayout">
          {todoList.map((val, idx) => (
            <div className="todoItem" key={idx}>
              <div
                className="todoCheckBox"
                onClick={() => {
                  handleTodoCheck(val.tf, idx);
                }}>
                <div className="checkIcon"> {val.tf ? "v" : ""}</div>
                <span>{val.text}</span>
              </div>
              <div
                className="deleteBox"
                onClick={() => {
                  handleTodoDelete(val.id);
                }}>
                {" "}
                x{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
