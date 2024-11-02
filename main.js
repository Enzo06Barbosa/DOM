const dogImage = document.getElementById('dog');
const button = document.querySelector('.bt');

let isdogOriginal = true;

button.addEventListener('click', () => {
    if (isdogOriginal) {
        dogImage.src = './img/panda.jpg';
    } else {
        dogImage.src = 'img/panda2.webp';
    }
    isdogOriginal = !isdogOriginal;
});

const titButton = document.querySelector('.btnTit');
const titElement = document.querySelector('.tit');

const textButton = document.querySelector('.btnText');
const textElement = document.querySelector('.text');

const audioButton = document.querySelector('.btnAudio');
const audioElement = document.querySelector('.aud');

let isTitleChanged = false;
let isTextColorChanged = false;

titButton.addEventListener('click', () => {
    if (isTitleChanged) {
        titElement.textContent = 'Primeiro Titulo';
    } else {
        titElement.textContent = 'Segundo Titulo';
    }
    isTitleChanged = !isTitleChanged;
});

textButton.addEventListener('click', () => {
    if (isTextColorChanged) {
        textElement.style.color = 'initial';
    } else {
        textElement.style.color = 'blue';
    }
    isTextColorChanged = !isTextColorChanged; 
});

audioButton.addEventListener("click", function() {
    audioElement.play();
});

const toggleButton = document.querySelector(".alt");
const buttons = document.querySelectorAll(".alinharButtons .btn1");

toggleButton.addEventListener("click", () => {
    buttons.forEach(button => {
        button.classList.toggle("nova-classe");
    });
});