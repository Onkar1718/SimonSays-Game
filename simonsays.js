let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

var audio1=new Audio("game_music.mp3");
audio1.loop=true;
window.addEventListener("keypress", function () { // game is started after pressing any key
    if (!started) {
        var audio=new Audio("game_start.mp3");
        audio.play();
        console.log("game is started");
        started = true;
        levelup();
    }
});

function levelup() {
    level++;
    audio1.play();
    let h3 = document.querySelector("h3");
    h3.innerText = `Level ${level}`;

    let number = Math.floor(Math.random() * 4 + 1);
    let num = "btn" + number;
    gameSeq.push(num);

    console.log(gameSeq); // This will print the sequence
    let activebutton = document.querySelector("." + num); 
    btnflash(activebutton);
}

function btnflash(activebutton) {
    activebutton.classList.add("flash");

    setTimeout(function () {
        activebutton.classList.remove("flash");
    }, 400);
}

function btnpress() {
    var audio=new Audio("btn-click.mp3");
    audio.play();
    console.log("button is pressed");
    let btnClass = this.classList[1]; // Get button class (btn1, btn2, etc.)
    userSeq.push(btnClass); 
    console.log(userSeq);

    btnflash(this); // Flash the button on press
    checkuserInput(userSeq.length-1);

    // You can add user input check logic here later
}

 function checkuserInput(currentlevel){
    if(userSeq[currentlevel]===gameSeq[currentlevel]){
        // console.log("correct button pressed");
        if(userSeq.length===gameSeq.length){
            setTimeout(function(){
                userSeq=[];
                levelup();
            },1000);
        }
    }
    else{
        console.log("incorrect button pressed");
        var audio = new Audio("game_over.mp3");
        audio.play();
        audio1.pause();
        resetgame();
    }
    
 }

 function resetgame(){
    level=0;
    gameSeq=[];
    userSeq=[];
    started=false;
    let h3=document.querySelector("h3");
    h3.innerText="Game Over, Press any key to start";

 }

// Attach the event listener correctly
let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
    btn.addEventListener("click", btnpress);
}





// function presskey(){
// let button=document.querySelector(".btn-container")
// button.addEventListener("click",function(event){
// if(event.target.classList.contains('btn')){
//     if(event.target.classList.contains('btn1')){
//         console.log("Green button clicked");
//     }
//     else if(event.target.classList.contains('btn2')){
//             console.log("Yellow button clicked");
//     }
//     else if(event.target.classList.contains('btn3')){
//             console.log("Red button clicked");
//     }
//     else{
//          console.log("Blue button clicked");
//     }
// }
// // levelup();
// }); 
// }
// let container = document.querySelector('.btn-container');
// container.addEventListener('click', function(event) {
//     // Check if the clicked element has the 'btn' class
//     if (event.target.classList.contains('btn')) {
//         if (event.target.classList.contains('btn1')) {
//             console.log("Green button clicked");
//         } else if (event.target.classList.contains('btn2')) {
//             console.log("Yellow button clicked");
//         } else if (event.target.classList.contains('btn3')) {
//             console.log("Red button clicked");
//         } else if (event.target.classList.contains('btn4')) {
//             console.log("Blue button clicked");
//         }
//     }
// });
