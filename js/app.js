//Variables
const elementBody = document.querySelector('body');
const welcome = document.querySelector('.welcome');

//img
const imgs = document.querySelectorAll('.welcome__img');
const morning = document.querySelectorAll('.morning');
const gm = document.querySelector('.gm')

window.addEventListener('scroll', scrollHistory);

function scrollHistory(e){    
        const scrollPosition = window.innerHeight / 1; //pantalla completa
        const scrollPositionDiv = window.innerHeight / 1.5; //patalle 1/3
        const scrollPositionHalf = window.innerHeight / 2; //Mitad de pantalla
    
        scrollBody(elementBody, scrollPositionHalf);
        animationTotal(welcome, scrollPosition);
        
    document.body.style.setProperty('--start', scrollPositionHalf);
    document.body.style.setProperty('--scroll-revelation', scrollPosition);
}

//scrollBody
function scrollBody(name, scrollPositionHalf){    
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;
    if(scrollPositionHalf > namePosition){
    document.body.style.setProperty('--scroll', (namePosition - 453) / nameHeight );
    }
}

function animationTotal(name, scrollPosition){    
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;

    if(scrollPosition > namePosition + 2000 ){
        welcome.style.setProperty('--animation', (namePosition) / nameHeight );
    }
    else if(scrollPosition > namePosition + 100 ){

        welcome.style.setProperty('--animation', (namePosition) / nameHeight );
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.bottom = "" 
            imgs[i].style.transform = ""      
        }

        for (let i = 0; i < morning.length; i++) {
            morning[i].style.opacity = ""     
        }

        gm.style.opacity=""
        
    }
    else{
    }
}

//img bottom 0
for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.bottom = "0";
    imgs[i].style.transform = "1"    
}

for (let i = 0; i < morning.length; i++) {
    morning[i].style.opacity = "0"   
}

gm.style.opacity="0"

window.addEventListener();