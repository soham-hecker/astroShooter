var ship=document.getElementById("ship");
var asteroid=document.getElementById("asteroid");

// asteroid.addEventListener("animationiteration",function(){
//     var rndm=((Math.floor(Math.random()*6))*17);
//     asteroid.style.left=rndm+"px";
// })

window.setInterval(function(){
    let asteroid=document.getElementById("asteroid");
    var rndm=((Math.floor(Math.random()*5))*223)
    asteroid.style.left=rndm+"px"
},4900)

document.onkeydown=function(e){
    console.log("keycode:",e.keyCode)
    var ship=document.getElementById("ship");
    var bullet=document.getElementById("bullet");
    var shipLeft=parseInt(window.getComputedStyle(ship,null).getPropertyValue('left'));
    var bulletLeft=parseInt(window.getComputedStyle(bullet,null).getPropertyValue('left'));
    if(e.keyCode==37 && shipLeft>0){
        // var ship=document.getElementById("ship");
        // shipLeft=parseInt(window.getComputedStyle(ship,null).getPropertyValue('left'));
        ship.style.left=(shipLeft-223)+"px";
        bullet.style.left=(bulletLeft-223)+"px";
    }
    else if(e.keyCode==39 && shipLeft<890){
        ship.style.left=(shipLeft+223)+"px";
        bullet.style.left=(bulletLeft+223)+"px";
    }
    else if(e.keyCode==32){
        bullet.classList.add("bulletAni");
        setTimeout(()=>{
            bullet.classList.remove("bulletAni");
        },2000)
    }
}


// CRASH
window.setInterval(function(){
    var ship=document.getElementById("ship");
    let gameOver=document.querySelector('.gameOver');
    let asteroid=document.getElementById("asteroid");
    // let ship=document.getElementById("ship");
    var asteroidTop=parseInt((window.getComputedStyle(asteroid,null)).getPropertyValue('top'));
    var shipLeft=parseInt((window.getComputedStyle(ship,null).getPropertyValue('left')));
    var shipTop=parseInt((window.getComputedStyle(ship,null)).getPropertyValue('top'));
    var asteroidLeft=parseInt((window.getComputedStyle(asteroid,null).getPropertyValue('left')));
    if(((shipLeft==asteroidLeft && (shipTop-asteroidTop)<250)) && (shipLeft==asteroidLeft && (-shipTop+asteroidTop)<5)){
        gameOver.style.opacity=100;
        asteroid.classList.remove("asteroidAni")
    }
    var bulletTop=parseInt((window.getComputedStyle(bullet,null)).getPropertyValue('top'));
    var bulletLeft=parseInt((window.getComputedStyle(bullet,null).getPropertyValue('left')));
    if(bulletLeft-asteroidLeft<120 && (bulletTop-asteroidTop)<2900){
        asteroid.classList.remove("asteroidAni")
        asteroid.classList.add("asteroidAni")

    }
},300)
