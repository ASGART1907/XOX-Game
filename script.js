const blocks = document.querySelectorAll(".block");
const container = document.querySelector(".game-container");
const turn = document.querySelector("strong");
const winner = document.querySelector(".winner");
const winPlayer = document.querySelector(".win-player");
const againBtn = document.querySelector(".againBtn");

const winBlock = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


let player = "O";
let isWin = false;
turn.innerHTML = "X'turn!";

againBtn.addEventListener("click",() => {
  blocks.forEach(block => {
    block.classList.remove("X");
    block.classList.remove("O");
    block.innerHTML = "";
    winner.style.display = "none";
    isWin = false;
  })
  turn.innerHTML = "X'turn!";
});


blocks.forEach(block => block.addEventListener("click",() => setBlock(block)));

const setBlock = (block) => {
  if(block.innerHTML !== "") return;
  turn.innerHTML = `${player}'turn!`;
  player === "O" ? player = "X" : player = "O";
  block.innerHTML = player;

  let isTurn = block.innerHTML === "X";
  if(isTurn){
    block.style.color = "deeppink"
    block.classList.add("X");
  }else{
    block.style.color = "limegreen"
    block.classList.add("O");
  }
  tie();
  if(win()){
    winner.style.display = "flex";
    winPlayer.innerHTML = `${player}'win`;
  }
}

const win = () => {
  return winBlock.some(cells => {
    return cells.every(index => {
      return blocks[index].classList.contains(player);
    });
  })
  console.log(content);
}


const tie = () => {
  const isDraw = [...blocks].every(block => {
    return block.innerHTML === "X" || block.innerHTML === "O";
  })

  if(isDraw){
    winner.style.display = "flex";
    winPlayer.innerHTML = "Tie";
  }
}































