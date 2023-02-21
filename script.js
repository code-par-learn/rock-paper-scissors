
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
        return 'its a tie';
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
        return `you Won! ${playerSelection} beats ${ComputerSelection}`;
    }
    else{
        return `you Lost! ${ComputerSelection} beats ${playerSelection}`;
    }
    
    
}
const player="paper";
const computer=getComputerChoice();

