let user_score=document.querySelector("#user_score");
let us=0;
let cs=0
let comp_score=document.querySelector("#comp_score");

let choices = document.querySelectorAll(".choice")
let mg= document.querySelector("#msg");
function computer_choice(){
    let arr =["rock","paper","scissors"]
    let i=Math.floor((Math.random())*3);
    return arr[i];
}

function check_winner(user_choice,comp_choice,is_user_winner){
    if(user_choice=="rock" && comp_choice=="paper"){
        is_user_winner=false;
    }
    else if(user_choice=="paper" && comp_choice=="scissors"){
        is_user_winner=false;
    }
    else if(user_choice=="scissors" && comp_choice=="rock"){
        is_user_winner=false;
    }
    return is_user_winner;
}
for(let choice of choices){
    choice.addEventListener("click",()=>{
        let user_choice = choice.getAttribute("id");
        let comp_choice = computer_choice();
        console.log("user_choice",user_choice);
        console.log("computer_choice",comp_choice);
        if(user_choice==comp_choice){
            
            mg.innerText="Game is Draw Play Again";
            mg.style.backgroundColor="black";
        }
        else{
            let is_user_winner=true;
            if(check_winner(user_choice,comp_choice,is_user_winner)){
                mg.innerText=`You won your ${user_choice} wins against computer ${comp_choice}`;
                mg.style.backgroundColor="green";
                us++;
                user_score.innerText=us;

            }
            else{
                mg.innerText=`You loose your ${user_choice} lost against computer ${comp_choice}`;  
                mg.style.backgroundColor="red"; 
                cs++;
                comp_score.innerText=cs;
            }

        }
        

    });
}

let rst= document.querySelector("#reset");

rst.addEventListener("click",()=>{
    user_score.innerText=0;
    comp_score.innerText=0;
    mg.innerText="Play Your Move";
    mg.style.backgroundColor="black";
});