// console.log("Working")
// let music=new Audio("music.mp3")
// let turn=new Audio("music.mp3")
// let gameover=new Audio("music.mp3")
// //Function to change The Turn
// const changeTurn=()=>{
//     if(turn==="X")
//     return "0"
//     else{
//         return "X"
//     }
// }
// //Function to Check Win
// const checkWin=()=>{

// }
//Game Logic
// const boxes=Array.from(document.getElementsByClassName("box"));
// boxes.forEach((Element)=>{
//     console.log(Element)
//     const innerSpan=Element.querySelector(".boxtext");

//     Element.addEventListener("click",()=>{
//         Element.style.backgroundColor="red";
//         innerSpan.textContent="X";
        
//     })
// })


// const box=document.getElementsByClassName("box")[0];
// const span=document.getElementsByClassName("boxtext")[0];
// box.addEventListener("click",()=>{
//     console.log("boxCLicked")
//     box.style.backgroundColor = "red";
    
//     if(span.innerText==" ")
//     {
//     span.innerText="O"
//     }

// // })
const boxes=Array.from(document.getElementsByClassName("box"))
boxes.forEach((Element)=>{
console.log(Element)
})
