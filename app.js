let userScore=0;
let compScore=0;
let choices= document.querySelectorAll(".choice");
let msg= document.querySelector(".msg");
let uScore= document.querySelector(".user");
let cScore= document.querySelector(".computer");

const genCompChoice= ()=> {
    const option= ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);

    return option[randIdx];
};

const playGame = (userChoice) => {
    //computer choice generated
    const compChoice= genCompChoice();
    if(userChoice == compChoice){
        msg.innerText= "It's a Draw. Try again";
        msg.style.backgroundColor = "#200E3A";

    }
    else if((userChoice=="paper"&& compChoice=="rock")||(userChoice=="rock"&& compChoice=="scissors")||(userChoice=="scissors"&& compChoice=="paper")){
        msg.innerText= `You Won. ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        userScore++;
    }
    else {
        msg.innerText= `You lost. ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "red";
        compScore++;
    }
    uScore.innerText= userScore;
    cScore.innerText= compScore;
};
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});
