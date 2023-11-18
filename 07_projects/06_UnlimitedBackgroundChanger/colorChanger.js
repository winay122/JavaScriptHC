const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const colorGenerator = function(){
    const hex = '0123456789ABCDEF'
    let color = '#';
    
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let continueChanging;

const startChanging = function(){
    if(!continueChanging){
        continueChanging = setInterval(function(){
            document.querySelector('body').style.backgroundColor = colorGenerator();
        },1000)
    }
}

const stopChanging = function(){
    clearInterval(continueChanging)
    continueChanging = null;
}

start.addEventListener('click', startChanging)
stop.addEventListener('click',stopChanging)
