console.log("hellow world")
let trial=prompt("Enter the no. of trials:")
let UserScore=0
let ComputerScore=0
let dictionary={
    "0": "Stone",
    "1": "Paper",
    "2":"Scrissior"

}
let User;
let Computer;
function game(){
    Computer= Math.floor(Math.random()*3);
    console.log(dictionary) 
    User=prompt("Enter the no. bet[0-1-2] as per your choice:")
    StonePaperScirssior()
}



function StonePaperScirssior(){
    // if (User==Computer)
    console.log(`Computer=${dictionary[Computer]} & You select=${dictionary[User]}`)
    if (User==2 && Computer==1){
        console.log("Congrat's You Win")
        UserScore=UserScore+1;
    }
    else if(User==1 && Computer==0){
        console.log("Congrat's You Win")
        UserScore=UserScore+1;
    }
    else if(User==0 && Computer==2){
        console.log("Congrat's You Win")
        UserScore=UserScore+1;

    }
    else if(User==Computer){
        console.log("Tie!!!")
    }
    else{
        console.log("Sorry!,You lose")
        ComputerScore=ComputerScore+1;
    }

}
for (i=0;i<trial;i++) {
    game()
}
console.log(`Score:-Your=${UserScore} & Computer ${ComputerScore}`)
if (UserScore>ComputerScore){
    console.log("you win bro!!!!!!!")
}
else if(UserScore<ComputerScore){
    console.log("Sorry,You losss!!!!!!!")
    
}
else{
    console.log("Tieeeeeeeee!!!!!!!")
}
// 21 win
// 10 win
// 02 win



// function getcomputerchoice(){
//     if (x==0){

//     }
// }


// const a=("0","1","2")
// console.log(a[1])
// function getcomputerchoice(){
// }
// getcomputerchoice()