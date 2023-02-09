console.log("Hellow world!")

let gameover = document.querySelector('.gameOver');
let Score = 0;
let dino = document.querySelector('.dragon');
let score = document.querySelector('.score-board');
let obs = document.querySelector('.obstacle');
let startButton = document.querySelector('.start');
let Reset = document.querySelector('.reset');
let gamestart = false;
let gameaudio = new Audio('./Resources/music.mp3');
let cross = true;

//Javascript to start game
startButton.addEventListener('click', ()=>{
    if(gamestart === false){
        gameover.innerText = "";
        obs.classList.add('obstacleAni');
        gamestart = true;
        gameaudio.play();
        gameaudio.volume = 0.4;
        score.innerText = "Your Score is : "
    }
})

// Javascript to stop game
Reset.addEventListener('click', ()=>{
    if(gamestart === true)
    {
        obs.classList.remove('obstacleAni');   
        gamestart = false;
        gameaudio.pause();
        dino.style.left = "30px";
    }
})

//To make Dino move
document.onkeydown = function(e){
    console.log("Key code is : ",e.keyCode)
    if(gamestart == true){
        // jump dino
        if(e.keyCode == 38){
            dino.classList.add('upAnimateDino');
            setTimeout(()=>{
                dino.classList.remove('upAnimateDino');
            },1000);
        }
        // left move dino
        if(e.keyCode == 39){
            dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
            dino.style.left = dinoX + 112 + "px";
        }
        // right move dino
        if(e.keyCode == 37){
            dinoX = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left'));
            dino.style.left = dinoX - 112 + "px";
        }
    }
}

// Checking collision
setInterval(()=>{
    dx = parseInt(window.getComputedStyle(dino , null).getPropertyValue('left')); 
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox =parseInt(window.getComputedStyle(obs , null).getPropertyValue('left')); 
    oy =parseInt(window.getComputedStyle(obs,null).getPropertyValue('top')); 

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if(offsetX < 90 && offsetY < 100){
        gameover.innerText = "GAME OVER";
        gameaudio.pause();
        obs.classList.remove('obstacleAni');   
        gamestart = false;   
        dino.style.left = "30px";
        Score = 0;
    }
    else{
        if(offsetX < 120 && cross){
            Score = Score + 1;
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            // for increasing the speed by time of obstaacle
            setTimeout(()=>{
                anidur = parseFloat(window.getComputedStyle(obs, null).getPropertyValue('animation-duration'));
                newdur = anidur - 0.07;
                if(newdur > 1.9){
                    document.querySelector('.obstacleAni').style.animationDuration = newdur + "s";
                }
            },500);
            updateScore(Score);
        }
    }
},50);

// Function to update Score
function updateScore(Score){
    score.innerText = "Your Score : " + Score;
}