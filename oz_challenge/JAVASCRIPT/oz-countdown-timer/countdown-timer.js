// 리스트 3~4개 정도 정하고 그것을 선택하면 남은시간 계산해서 화면에 호출

const newYearsBtn = document.getElementById("newyears");
const halloweenBtn = document.getElementById("halloween");
const ozTutorialBtn = document.getElementById("oz-tutorial");
const christmasBtn = document.getElementById("christmas");
const timerA = document.getElementById("timerA");
const timerB = document.getElementById("timerB");
const timerC = document.getElementById("timerC");
const timerD = document.getElementById("timerD");

// 날짜 지정
const newYears = new Date(2025, 0, 1).getTime();
const halloWeen = new Date(2024, 9, 31).getTime();
const ozTutorial = new Date(2024, 5, 25).getTime();
const christmas = new Date(2024, 11, 25).getTime();

// 버튼 클릭 시 요소 보이기
function showContent(content) {
  // 2025 새해 버튼
  newYearsBtn.addEventListener("click", function () {
    const a = setInterval(() => {
      const now = new Date().getTime();

      const newYearsDiff = newYears - now;

      const days = Math.floor(newYearsDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((newYearsDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((newYearsDiff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((newYearsDiff % (1000 * 60)) / 1000);

      timerA.innerHTML =
        "<div>" +
        days +
        "<span>Days</span>" +
        "</div>" +
        "<div>" +
        hours +
        "<span>Hours</span>" +
        "</div>" +
        "<div>" +
        mins +
        "<span>Minutes</span>" +
        "</div>" +
        "<div>" +
        secs +
        "<span>Seconds</span>" +
        "</div>";
    }, 1000);
  });
  // 할로윈 버튼
  halloweenBtn.addEventListener("click", function () {
    const b = setInterval(() => {
      const now = new Date().getTime();

      const halloWeenDiff = halloWeen - now;

      const days = Math.floor(halloWeenDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((halloWeenDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((halloWeenDiff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((halloWeenDiff % (1000 * 60)) / 1000);

      timerB.innerHTML =
        "<div>" +
        days +
        "<span>Days</span>" +
        "</div>" +
        "<div>" +
        hours +
        "<span>Hours</span>" +
        "</div>" +
        "<div>" +
        mins +
        "<span>Minutes</span>" +
        "</div>" +
        "<div>" +
        secs +
        "<span>Seconds</span>" +
        "</div>";
    }, 1000);
  });
  // 오즈 버튼
  ozTutorialBtn.addEventListener("click", function () {
    const c = setInterval(() => {
      const now = new Date().getTime();

      const ozTutorialDiff = ozTutorial - now;

      const days = Math.floor(ozTutorialDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((ozTutorialDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((ozTutorialDiff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((ozTutorialDiff % (1000 * 60)) / 1000);

      timerC.innerHTML =
        "<div>" +
        days +
        "<span>Days</span>" +
        "</div>" +
        "<div>" +
        hours +
        "<span>Hours</span>" +
        "</div>" +
        "<div>" +
        mins +
        "<span>Minutes</span>" +
        "</div>" +
        "<div>" +
        secs +
        "<span>Seconds</span>" +
        "</div>";
    }, 1000);
  });
  // 크리스마스 버튼
  ozTutorialBtn.addEventListener("click", function () {
    const d = setInterval(() => {
      const now = new Date().getTime();

      const christmasDiff = christmas - now;

      const days = Math.floor(christmasDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((christmasDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((christmasDiff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((christmasDiff % (1000 * 60)) / 1000);

      timerD.innerHTML =
        "<div>" +
        days +
        "<span>Days</span>" +
        "</div>" +
        "<div>" +
        hours +
        "<span>Hours</span>" +
        "</div>" +
        "<div>" +
        mins +
        "<span>Minutes</span>" +
        "</div>" +
        "<div>" +
        secs +
        "<span>Seconds</span>" +
        "</div>";
    }, 1000);
  });

  timerA.style.display = "none";
  timerB.style.display = "none";
  timerC.style.display = "none";
  timerD.style.display = "none";

  if (content === "A") {
    timerA.style.display = "block";
  } else if (content === "B") {
    timerB.style.display = "block";
  } else if (content === "C") {
    timerC.style.display = "block";
  } else if (content === "D") {
    timerD.style.display = "block";
  }
}
