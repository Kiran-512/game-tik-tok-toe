var turn = document.getElementById("turn"),
boxes = document.querySelectorAll("#main div"),
x_or_o = 0;

function selectWinnerBoxes(b1, b2, b3) {
b1.classList.add("win");
b2.classList.add("win");
b3.classList.add("win");
turn.innerHTML = b1.innerHTML + " Won Congrats!!";
}

function getWinner() {
var box1 = document.getElementById("box1"),
  box2 = document.getElementById("box2"),
  box3 = document.getElementById("box3"),
  box4 = document.getElementById("box4"),
  box5 = document.getElementById("box5"),
  box6 = document.getElementById("box6"),
  box7 = document.getElementById("box7"),
  box8 = document.getElementById("box8"),
  box9 = document.getElementById("box9");

if (
  box1.innerHTML !== "" &&
  box1.innerHTML === box2.innerHTML &&
  box1.innerHTML === box3.innerHTML
)
  selectWinnerBoxes(box1, box2, box3);
else if (
  box4.innerHTML !== "" &&
  box4.innerHTML === box5.innerHTML &&
  box4.innerHTML === box6.innerHTML
)
  selectWinnerBoxes(box4, box5, box6);
else if (
  box7.innerHTML !== "" &&
  box7.innerHTML === box8.innerHTML &&
  box7.innerHTML === box9.innerHTML
)
  selectWinnerBoxes(box7, box8, box9);
else if (
  box1.innerHTML !== "" &&
  box1.innerHTML === box4.innerHTML &&
  box7.innerHTML === box1.innerHTML
)
  selectWinnerBoxes(box1, box4, box7);
else if (
  box2.innerHTML !== "" &&
  box2.innerHTML === box5.innerHTML &&
  box2.innerHTML === box8.innerHTML
)
  selectWinnerBoxes(box2, box5, box8);
else if (
  box3.innerHTML !== "" &&
  box3.innerHTML === box6.innerHTML &&
  box3.innerHTML === box9.innerHTML
)
  selectWinnerBoxes(box3, box6, box9);
else if (
  box1.innerHTML !== "" &&
  box1.innerHTML === box5.innerHTML &&
  box1.innerHTML === box9.innerHTML
)
  selectWinnerBoxes(box1, box5, box9);
else if (
  box3.innerHTML !== "" &&
  box3.innerHTML === box5.innerHTML &&
  box3.innerHTML === box7.innerHTML
)
  selectWinnerBoxes(box3, box5, box7);
}

for (var i = 0; i < boxes.length; i++) {
boxes[i].onclick = function () {
  if (this.innerHTML !== "X" && this.innerHTML !== "O") {
    if (x_or_o % 2 === 0) {
      console.log(x_or_o);
      this.innerHTML = "X";
      turn.innerHTML = "O turn now";
      getWinner();
      x_or_o += 1;
    } else {
      console.log(x_or_o);
      this.innerHTML = "O";
      turn.innerHTML = "X turn now";
      getWinner();
      x_or_o += 1;
    }
  }
};
}

function replay() {
for (var i = 0; i < boxes.length; i++) {
  boxes[i].classList.remove("win");
  boxes[i].innerHTML = "";
  turn.innerHTML = "Play";
  turn.style.fontsize = "25px";
}
}