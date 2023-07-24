score=0;
 cross= true;
 audio = new Audio('music1.mp3');
 audiogo = new Audio('gameover.mp3');
 setTimeout(() => {
    audio.play();
 }, );
// audio.play();
document.onkeydown= function(e){
console.log(e.key);
    if(e.key=="ArrowUp")
    {
        zebro=document.querySelector('.zebro');
        zebro.classList.add('animatezebro');
        setTimeout(() => {
            zebro.classList.remove('animatezebro');
        }, 700);
    }
    if(e.key=="ArrowRight")
    {
        zebro=document.querySelector('.zebro');
        zebrox=parseInt(window.getComputedStyle(zebro,null).getPropertyValue('left'));
        zebro.style.left=zebrox + 112 + "px";
    }
    if(e.key=="ArrowLeft")
    {
        zebro=document.querySelector('.zebro');
        zebrox=parseInt(window.getComputedStyle(zebro,null).getPropertyValue('left'));
        zebro.style.left=(zebrox - 112) + "px";
    }
}
setInterval(() => {
    zebro=document.querySelector('.zebro');
    gameover=document.querySelector('.gameover');
    obstacles=document.querySelector('.obstacles');

    zx=parseInt(window.getComputedStyle(zebro,null).getPropertyValue('left'));
    zy=parseInt(window.getComputedStyle(zebro,null).getPropertyValue('right'));

    ox=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('right'));

    offsetX=Math.abs(zx-ox);
    offsetY=Math.abs(zy-oy);
    console.log(offsetX,offsetY);
    if(offsetX<73 && offsetY<10)
    {
        gameover.innerHTML="Game Over - Reload to play again";
        obstacles.classList.remove('obstacleAni')
        cross=false;
        setTimeout(() =>{
            audio.pause();
        });
        audiogo.play();
        setTimeout(() => {
            // audio.pause();
            audiogo.pause();
        }, 1000);
        // audiogo.pause();
        // audio.pause();
    }
    else if(offsetX<105 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        },1000);
        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(obstacles,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.1;
            obstacles.style.animationDuration=newDur+'s';  
            console.log('New animation duration: ', newDur); 
        },500);
    }
    
}, 10);
function updatescore(score){
    scorecount.innerHTML= "Your score: "+score
}
