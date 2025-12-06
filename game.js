let listnerscore = 0;
let compscore = 0;

const choise = document.querySelectorAll(".choise");
const msg = document.querySelector("#Massage");

const listnerscoreP = document.querySelector("#listnerscore");
const compscoreP = document.querySelector("#compscore");

const gencomCho = () => {
  const option = ["paper", "rock", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return option[index];
};

const drawGame = () => {
  msg.innerText = "😁Game was draw, try again";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    listnerscore++;
    listnerscoreP.innerText = listnerscore;
    msg.innerText = `🎉You Win Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscoreP.innerText = compscore;
    msg.innerText = `😒You Lose ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("User choice =", userchoice);
  const compchoice = gencomCho();
  console.log("comp choice =", compchoice);

  if (compchoice === userchoice) {
    drawGame();
  } else {
    let userwin = true;

    if (userchoice === "rock") {
      //scissor, paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //scissor, rock
      userwin = compchoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userwin = compchoice === "rock" ? false : true;
    }

    showwinner(userwin, userchoice, compchoice);
  }
};

choise.forEach((choise) => {
  choise.addEventListener("click", () => {
    const userchoice = choise.getAttribute("id");
    console.log("the choice was clicked", userchoice);
    playGame(userchoice);
  });
});
