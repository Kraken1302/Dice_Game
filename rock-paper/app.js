userScore=0;
compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let Userscorepara=document.querySelector("#user-score");
let Compscorepara=document.querySelector("#comp-score");


//3 block
const compChoice=() =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

//4 block
const drawgame= () =>{
    console.log("game was draw");
    msg.innerText = "Game Was A Draw. Try Again"
};

//5 block
let showWinner= (userwin) =>{
    if(userwin){
        userScore++;
        Userscorepara.innerText=userScore;
        console.log("you Win");
        msg.innerText = " You Win !"
    }
    else{
        compScore++;
        Compscorepara.innerText=compScore;
        console.log("you loose");
        msg.innerText = " You Loose."
    }
}



//2 block only first 2 lines
const playgame= (userChoice)=>{
    console.log("userchoice", userChoice);
    const compselect= compChoice();
    console.log("compchoice", compselect);

    if(userChoice===compselect){
        drawgame();
    }else{
        let userwin="true";
        if(userChoice==="rock"){
            userwin= compselect==="scissors"? true : false;
        }else if(userChoice==="paper"){
            userwin= compselect==="scissors"? false : true;
        }else{
            userwin= compselect==="rock"? false : true;
        }
        showWinner(userwin);
    }
};



//1 block
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice );
        playgame(userChoice);
    });
});


//41 min