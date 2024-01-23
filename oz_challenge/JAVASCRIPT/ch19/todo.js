//요소 선택 및 배열 선언
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
let todoArr = [];

// 할일 추가하기, 할일 보여주기, 할일 수정하기, 할일 삭제하기

// 로컬 저장소에 저장하기
function saveTodos(){
  //  객체를 JSON으로 바꿔줌
  //  배열에 객체가 포함되어 있으면 stringify 해줘야 저장가능
  const todoString = JSON.stringify(todoArr)
  // 이름은 myTodos/ 저장은 실제 배열을 저장
  localStorage.setItem("myTodos", todoString)
}


// 로컬 저장소에 가져오기
function loadTodos(){
  const myTodos = localStorage.getItem("myTodos")
  if(myTodos !== null){ //null이 아닐때만 파싱과 다스플레이를 한다
    // 저장한 결과를 파싱해서 todoArr에 갱신해줌
    todoArr = JSON.parse(myTodos)
    displayTodos()
  }
}
loadTodos()


// 할일 삭제하기
function handleTodoDelClick(clickedId){
  todoArr = todoArr.filter(function(aTodo){
    // aTodo에 todoId가 클린된거랑 다르면 true, 
    // 클릭된거랑 다른애만 필터링해서 남긴다
    return aTodo.todoId !== clickedId
  })
  displayTodos()
  saveTodos()
}


// 할일 수정하기
function handleTodoItemClick(clickedId) {
  // 클릭한거에 해당하는 애만 todoDone의 상태를 바꾼다. 나머지는 그대로 둔다
  // map에서 완성된 todoArr의 조작결과를 todoArr에 덮어씌움
  todoArr = todoArr.map(function (aTodo) {
    if (aTodo.todoId === clickedId) {
      // 내가 클릭한 todo의 해다하는 id가 맵에서 나옴,
      return {
        // 그러면 기존에 todo내용에 todoDone을 반전시켜서 추가
        ...aTodo,
        todoDone: !aTodo.todoDone,
      };
    } else {
      return aTodo;
    }
  });
  displayTodos()
  saveTodos()
}

// *할일 보여주기
function displayTodos() {
  todoList.innerHTML = ""; // 원래 써져있던걸 지우고 시작
  todoArr.forEach(function (aTodo) {
    const todoItem = document.createElement("li");
    const todoDelBtn = document.createElement("span"); //span을 li안에 넣어주기
    todoDelBtn.textContent = "x";
    todoItem.textContent = aTodo.todoText; // 객체.속성명
    todoItem.title = "클릭하면 완료됨";
    if (aTodo.todoDone) {
      // 각각의 todo에 대해서 todoDone의 상태가 true or false
      todoItem.classList.add("done");
    } else {
      todoItem.classList.add("yet");
    }
    todoDelBtn.title = "클릭하면 삭제됨";

    todoItem.addEventListener("click", function () {
      // todoItem을 클릭했을때 그때 이벤트헨들러로 handleTodoItem 넣어줌
      // 아이템에 Id를 전달해줘야함
      handleTodoItemClick(aTodo.todoId);
    });

    todoDelBtn.addEventListener("click", function(){
      handleTodoDelClick(aTodo.todoId);
    })

    todoItem.appendChild(todoDelBtn);
    todoList.appendChild(todoItem);
  });
}

// 할일 추가하기
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 기존 기능 차단, 새로고침X
  const toBeAdded = {
    //객체(toBeAdded) 리터럴
    // todo name 으로 부터 읽어드림
    todoText: todoForm.todo.value,
    // 추가될때 그 시간에 대한 정보를 자기에 대한 식별값으로 가짐. 할일에 대한 주민등록번호다
    // getTime(): 시간정보를 정수형태로
    todoId: new Date().getTime(),
    // 모든 할일은 추가될때마다 다 하지않은 상태라 false
    todoDone: false,
  };
  todoForm.todo.value = "";// todoForm에는 name이 todo인 요소에 밸류를 지움
  todoArr.push(toBeAdded);
  displayTodos(); // *할일이 추가될때마다 호출
  saveTodos()
});
