
function getComputerChoice(){
    let ch=["rock","paper","scissors"];
    let rand=Math.floor(Math.random()*(3));
    return ch[rand];
} 
function playround(playerSelection,ComputerSelection) {
    let ps=playerSelection;
    let cs=ComputerSelection;
    let res;
    if (ps===cs){
        res="tie";
        showres('its a tie');
        return res;
    }
    else{
        if(ps=="rock"){
            res=(cs=="paper")?cs:ps;
        }
        else if(ps=="paper"){
            res=(cs=="scissors")?cs:ps;
        }
        else{
            res=(cs=="rock")?cs:ps;
        }     
    }
    if (res==ps){
        showres(`you Won! ${playerSelection} beats ${ComputerSelection}`);
        
    }
    else{
        showres(`you Lost! ${ComputerSelection} beats ${playerSelection}`);
        
    }

    return res;
    
    
}
let yourscore=0;
let compscore=0;
function game(ch){
        let player=ch;
    
        let computer=getComputerChoice();
       
        let result=playround(player,computer);
        
        if (result==player){
            yourscore+=1;
        }else if(result=="tie"){
            yourscore+=1;
            compscore+=1;
        }
        else{
            compscore+=1;
        }
    
    showres(`your score ${yourscore}`);
    showres(`computer score ${compscore}`);
    
   
}
function start(cho){
    if(yourscore<5 && compscore<5){
        game(cho);
    }
    else{
    showres((yourscore>compscore)?"you won computer lost":(yourscore<compscore)?"you lost computer won":"you both won");
    showres("Game Ended")
    }
}

document.addEventListener('DOMContentLoaded', () => {
const btn1=document.querySelectorAll('button');

btn1.forEach((btn)=>{
    btn.addEventListener('click',()=>{start(btn.value)});
});
});
const container=document.querySelector('#container');


function showres(res){
    const pele=document.createElement('p');    
    pele.textContent=`${res}`;
    container.appendChild(pele); 
}
