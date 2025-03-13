//generate random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
    }
return color;
};

// console.log(randomColor());
let intervalId ;
const startChangingColor = function(){
    if(!intervalId){
    intervalId =  setInterval(changBgcolor,100);

    }

    function changBgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; //just make variable derefrence
};

document.querySelector('#start').addEventListener
('click',startChangingColor);

document.querySelector('#stop').addEventListener
('click',stopChangingColor);