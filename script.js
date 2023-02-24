
function getComputerChoice(){
    let ch=["rock","paper","scissors"];
    let rand=Math.floor(Math.random()*(3));
    return ch[rand];
} 
function playround(playerSelection,ComputerSelection) {
    let ps=playerSelection.toLowerCase();
    let cs=ComputerSelection.toLowerCase();
    let res;
    if (ps===cs){
        res="tie";
        console.log('its a tie');
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
        console.log(`you Won! ${playerSelection} beats ${ComputerSelection}`);
        
    }
    else{
        console.log(`you Lost! ${ComputerSelection} beats ${playerSelection}`);
        
    }
    return res;
    
    
}
function game(){
    let yourscore=0;
    let compscore=0;
    for(let i=0;i<5;i++){
        let player=prompt("your choice");
        let pschoice=player.toLowerCase();
        let error=(pschoice=="paper")?"no":(pschoice=="rock")?"no":(pschoice=="scissors")?"no":"yes";
        
        while (error=="yes"){
            console.log("you entered the wrong choice");
            player=prompt("your choice: ");
            pschoice=player.toLowerCase();
            error=(pschoice=="paper")?"no":(pschoice=="rock")?"no":(pschoice=="scissors")?"no":"yes";
           
        }
    
        let computer=getComputerChoice();
       
        let result=playround(player,computer);
        if (result==player.toLowerCase()){
            yourscore+=1;
        }else if(result=="tie"){
            yourscore+=1;
            compscore+=1;
        }
        else{
            compscore+=1;
        }
    }
    console.log(`your score ${yourscore}`);
    console.log(`computer score ${compscore}`);
    return (yourscore>compscore)?"you won computer lost":(yourscore<compscore)?"you lost computer won":"you both won";

}


