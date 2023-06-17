function rotate(){

    let timing = document.getElementById("line");
    let degree = 0;

    function rotateAtInterval(){
        degree = degree + 5;
        timing.style.transform = `rotate(${degree}deg)`;
        timing.style.transitionTimingFunction = 'linear';
        timing.style.transitionDuration = '0.4s'; 
        
    }

    setInterval(rotateAtInterval,100)

}

rotate();