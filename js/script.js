const yoshi = document.querySelector(".yoshi");
const pipe = document.querySelector(".pipe");


const jump = () => {
    yoshi.classList.add("jump");
       setTimeout(() => {
    yoshi.classList.remove("jump"); }, 500);

}

const loop = setInterval(() => {

    const pipeposition = pipe.offsetLeft;
    const yoshiposition = +window.getComputedStyle(yoshi).bottom.replace("px", "");
    

    if (pipeposition <= 133 && pipeposition > 0 && yoshiposition <= 85 ) {

        pipe.style.animation ="none";
        pipe.style.left = `${pipeposition}px`;
                
        
        yoshi.style.animation ="none";
        yoshi.style.bottom = `${yoshiposition}px`;

        yoshi.src = "./images/gameover.png";
        yoshi.style.marginLeft = "35px";
        yoshi.style.width = "135px";

      
        clearInterval(loop);

        
    }

}, 10);


document.addEventListener("keydown", jump)
