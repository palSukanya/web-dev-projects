let boxes= document.querySelectorAll(".box");
let reset = document.querySelector("#b1");
let newGame = document.querySelector("#b2");
let msghide = document.querySelector(".msg-hide");
let msg = document.querySelector("#msg");
let turnX= true;
let count = 0;
msghide.classList.add("hide");
const winIndexes = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msghide.classList.add("hide");
  };
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnX) {
        box.innerText = "X";
        turnX = false;
      } else {
        box.innerText = "O";
        turnX = true;
      }
      box.disabled = true;
      count++;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
    }
});
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msghide.classList.remove("hide");
    disableBoxes();
  };
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msghide.classList.remove("hide");
    disableBoxes();
  };
  const checkWinner = () => {
    for (let pattern of winIndexes) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;
  
      if (pos1 != "" && pos2 != "" && pos3 != "") {
        if (pos1 === pos2 && pos2 === pos3) {
          showWinner(pos1);
          return true;
        }
      }
    }
  };
  newGame.addEventListener("click", resetGame);
  reset.addEventListener("click", resetGame); 