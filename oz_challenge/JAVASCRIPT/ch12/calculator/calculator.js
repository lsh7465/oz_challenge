const display = document.querySelector(".display");
const result = document.querySelector("#result");
const container = document.querySelector(".container");
const clear = document.querySelector("#clear");
const operator = document.querySelectorAll("button.operator");

function btn(a) {
  display.value += a;
}
/* btn(a) 함수는 숫자나 연산자 버튼을 클릭할 때 
해당 버튼의 값을 display에 추가하는 역할을 한다. */

const Click = (event) => {
  event.preventDefault();
};
/* Click 함수는 이벤트를 처리하기 위한 콜백 함수이다.
event.preventDefault()를 호출하여 기본 동작을 막는다.*/

let num = [];

operator.forEach((button) => {
  button.addEventListener("click", () => {
    num.push(display.value);
    num.push(button.textContent);
    console.log(num);
    display.value = "";
  });
});

result.addEventListener("click", () => {
  num.push(display.value);
  display.value = eval(num.join(""));
});

clear.addEventListener("click", () => {
  display.value = "";
  num.length = 0;
});
/* clear 버튼에 클릭 이벤트를 추가하여 
display의 값을 비우고 num 배열을 비운다. */

container.addEventListener("submit", Click);
