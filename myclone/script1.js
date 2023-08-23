let audioTurn=new Audio("ting.mp3")
let turn="X"
const changeTurn=()=>{
    if(turn==="X")
    turn= "O"
    else{
        turn= "X"
    }
}
flag=false;
isGameOver=false;
function changeColor(a,b,c)
{
    boxes[a].style.backgroundColor="pink";
    boxes[b].style.backgroundColor="pink";
    boxes[c].style.backgroundColor="pink";

}
function resetColor()
{
    boxes.forEach(element=>{
        element.style.backgroundColor="white";
    })
}
function checkWin()
{
    flag=false;
    
    if(boxtext[0].innerText==="X"&&boxtext[1].innerText==="X"&&boxtext[2].innerText==="X"||boxtext[0].innerText==="O"&&boxtext[1].innerText==="O"&&boxtext[2].innerText==="O")
    {
        flag=true;
        changeColor(0,1,2);
    }
    else if(boxtext[3].innerText==="X"&&boxtext[4].innerText==="X"&&boxtext[5].innerText==="X"||boxtext[3].innerText==="O"&&boxtext[4].innerText==="O"&&boxtext[5].innerText==="O")
    {
        flag=true;
        changeColor(3,4,5);
    }
    else if(boxtext[6].innerText==="X"&&boxtext[7].innerText==="X"&&boxtext[8].innerText==="X"||boxtext[6].innerText==="O"&&boxtext[7].innerText==="O"&&boxtext[8].innerText==="O")
    {
        flag=true;
        changeColor(6,7,8);

    }
    else if(boxtext[0].innerText==="X"&&boxtext[3].innerText==="X"&&boxtext[6].innerText==="X"||boxtext[0].innerText==="O"&&boxtext[3].innerText==="O"&&boxtext[6].innerText==="O")
    {
        flag=true;
        changeColor(0,3,6);

    }
    else if(boxtext[1].innerText==="X"&&boxtext[4].innerText==="X"&&boxtext[7].innerText==="X"||boxtext[1].innerText==="O"&&boxtext[4].innerText==="O"&&boxtext[7].innerText==="O")
    {
        flag=true;
        changeColor(1,4,7);

    }
    else if(boxtext[2].innerText==="X"&&boxtext[5].innerText==="X"&&boxtext[8].innerText==="X"||boxtext[2].innerText==="O"&&boxtext[5].innerText==="O"&&boxtext[8].innerText==="O")
    {
        flag=true;
        changeColor(2,5,8);

    }
    else if(boxtext[0].innerText==="X"&&boxtext[4].innerText==="X"&&boxtext[8].innerText==="X"||boxtext[0].innerText==="O"&&boxtext[4].innerText==="O"&&boxtext[8].innerText==="O")
    {
        flag=true;
        changeColor(0,4,8);

    }
    else if(boxtext[2].innerText==="X"&&boxtext[4].innerText==="X"&&boxtext[6].innerText==="X"||boxtext[2].innerText==="O"&&boxtext[4].innerText==="O"&&boxtext[6].innerText==="O")
    {
        flag=true;
        changeColor(2,4,6);
    }
  
}

let boxtext=Array.from(document.getElementsByClassName("boxtext"));
let boxes=Array.from(document.getElementsByClassName("box"));
boxes.forEach(Element=>{
    let textOfBox=Element.querySelector('.boxtext')
    Element.addEventListener("click",()=>{
        if(textOfBox.innerText==='')
        {
            textOfBox.innerText=turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            if(flag)
            {
                document.querySelector(".imgbox img").style.display = "block";
                changeTurn();
                document.getElementsByClassName("info")[0].innerText=turn +" WINS";
                isGameOver=true;
            }
            else{
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
})

let btn=document.getElementById("reset");
btn.addEventListener("click",()=>{
    boxtext.forEach(element => {
        element.innerText=""; 
        document.getElementsByClassName("info")[0].innerText="Turn for X";
        document.querySelector(".imgbox img").style.display="none";
        turn="X"
        resetColor();
     });
})

