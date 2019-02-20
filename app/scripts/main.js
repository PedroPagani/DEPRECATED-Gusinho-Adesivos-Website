'use strict'

const body = document.querySelector('body');
const faqList = document.querySelectorAll('[data-switch]');
const faqBtnQuestion = document.querySelectorAll('.q-title-container');
const show = document.querySelector('.show');



const init = () => {
    
    const loadingPage = document.querySelector('[data-loading]')


    window.onload = () => {
        loadingPage.dataset.loading = "close";
        welcomeTextAnim();
        window.onscroll = () => {
            windowPosAnim();

            
            
        }
    }
    
}


const welcomeTextAnim = () => {
    const dataMoveElements = document.querySelectorAll('[data-move="welcome-text"]');
    let element = 0;


    const interval = setInterval(() => {
        dataMoveElements[element].classList.add('animation');
        element++;
        if(element === dataMoveElements.length) {
            
            clearInterval(interval);
        }

    },100)
}

const windowPosAnim = () => {
    const currentPosition = window.pageYOffset + window.innerHeight * 0.75;
    showElement(currentPosition);
    
}



const showElement = (pos) => {
    const dataMove = document.querySelectorAll('[data-move]');
    
    dataMove.forEach((element) => {
        if(pos > element.offsetTop) {
            element.classList.add('animation');
        }
    })

}

init();








// FAQ QUESTIONS ANIMATION
for(let i = 0; i < faqBtnQuestion.length; i++) {
    faqBtnQuestion[i].addEventListener('click', (e) => {
        for (let f = 0; f < faqList.length; f++) {
            

            setTimeout(() => {
                if (i === f) {
                    
                    windowSize(f);                    
                } else {
                    faqList[f].dataset.switch = "close"
                    faqBtnQuestion[i].style.color = "white";
                    
                }
            },100)
        }
    })
}

function windowSize(f) {
    
    if (faqList[f].dataset.switch === "close") {
        faqList[f].dataset.switch = "open";
        show.innerHTML = "";
    } else {
        faqList[f].dataset.switch = "close";
    }


    if (window.innerWidth > 1024 || body.clientWidth + 17 > 1024) {
        show.appendChild(faqList[f]);
    } 
}












