let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#reset-btn");
let winr = document.querySelector(".winner");

let turn0 = true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    // console.log("box was clicked");
    if (turn0) {
        box.innerText="O";
        turn0 = false;

    } else {
        box.innerText= "X";
        turn0= true;
    }
    box.disabled = true;
    checkwinner();
    });
})


const resetgame= ()=>{
    turn0= true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        winr.classList.add("hide");
    }
}

const showinr= (winnern)=>{
    winr.innerText=`winner is ${winnern}`;
    winr.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
    rstbtn.innerText="New Game";
}

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText; 
        let pos3 = boxes[pattern[2]].innerText; 
        
        if( pos1!=""&& pos2!="" && pos3!=""){
            if(pos1== pos2 && pos2 == pos3 ){
                showinr(pos1);
                
            }
        }
    
    }
}
rstbtn.addEventListener("click", resetgame);
