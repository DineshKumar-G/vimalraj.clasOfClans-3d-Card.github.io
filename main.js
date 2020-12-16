const container = document.querySelector('.container');
const card = document.querySelector('.card');
const img = document.querySelector('img');
const secondImage = document.querySelector('.grass-img');
const blueBg = document.querySelector('.blue-background');
const batImg = document.querySelector('.bat-img');
const leftHealer = document.querySelector('.healer-img');
const rightHealer = document.querySelector('.right-healer-img');

container.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 10;
    const y = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    img.style.transform = 'translateZ(200px)';
    secondImage.style.transform = 'translateZ(80px)'
    blueBg.style.transform = 'translateZ(40px)';
    batImg.style.transform = 'translateZ(250px)';
    leftHealer.style.transform = rightHealer.style.transform =  'translateZ(110px) scale(2)';
    leftHealer.style.top = rightHealer.style.top = '-10%';
    leftHealer.style.left = rightHealer.style.right = '-100px';
    batImg.style.top = '-100px';
})

container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = img.style.transition = secondImage.style.transition =
    blueBg.style.transition = leftHealer.style.transition = batImg.style.transition =
    rightHealer.style.transition = '0.5s ease-in-out';
    img.style.transform = blueBg.style.transform = batImg.style.transform =
        leftHealer.style.transform = rightHealer.style.transform = 'translateZ(0px)';
    secondImage.style.transform = 'translateZ(0px)';
    batImg.style.top = '0px';
    leftHealer.style.top = rightHealer.style.top = '35%';
    leftHealer.style.left = '0px';
    rightHealer.style.right = '0px';
})

container.addEventListener('mouseenter', (e) => {
    card.style.transition = '0s ease-in-out';
    img.style.transition = secondImage.style.transition = blueBg.style.transition =
        leftHealer.style.transition = batImg.style.transition =
        rightHealer.style.transition = '0.5s ease-in-out';
})