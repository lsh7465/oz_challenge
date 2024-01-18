// 1. 요소 선택 및 상수 선언
const todaySpan = document.querySelector("#today");
const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");
const colors = ["orange", "skyblue", "red", "purple", "green"];

let lottoNumbers = [];

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일`;

// 4. paintNumber 함수
function paintNumber(number) {//내게 주어진 넘버를 화면에 추가
  const eachNumDiv = document.createElement("div"); //div를 만들어서 eachNumDiv라고 이름을 지어줌
  eachNumDiv.classList.add("eachnum"); //class추가
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number; //주어진 숫자 표시/ textContent를 number 표시
  numbersDiv.append(eachNumDiv); // 숫자가 들어갈 div에 eachNumDiv를 보여줘
}

// 2. 추첨 버튼 클릭 이벤트 핸들링
// 클릭하면 랜덤숫자 여섯개가 배열에 추가된다!
drawButton.addEventListener("click", function () {
  while (lottoNumbers.length < 6) {
    //6이 될때까지 채워라
    let rn = Math.floor(Math.random() * 45) + 1; //[{(Math.random(): 0 ~ 1) x 45} + 1] 1부터 45중에 하나가 정수로 랜덤 출력

    if (lottoNumbers.indexOf(rn) === -1) {
      //중복x
      //lottoNumbers배열안에 데이터가 들어있는지 인덱스 번호로 확인하는 메소드
      // -1 : 인덱스오브에서 반환됐다는건 아직 그 숫자가 들어있지않다는 뜻 그래서 인덱스오브 결과가 -1이면 그때 push한다
      lottoNumbers.push(rn); //let lottoNumbers = []; 배열에 요소를 추가/ lottoNumbers에 rn 을 푸쉬.
      //숫자가 추첨돼서 실제로 로또번호에 추가될때마다
      paintNumber(rn);
      //여기서 숫자하나씩을 화면에 추가하는 로직/ 추첨된 rn(랜덤숫자)를 그림
    }
  }
});

// 3. 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener("click", function () {
  lottoNumbers.splice(0, 6); //0번인덱스부터 6개를 지움
  numbersDiv.innerHTML = ""; //다시버튼 눌렀을때 배열이 화면에서 지워지게
});
