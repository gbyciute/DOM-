
//1. Gauti img src reiksme
const mainImage = document.querySelector('#mainImage');

const mainImagePath = mainImage.getAttribute('src');
console.log(mainImagePath);

//2.nuorodos atributo href reiksme
const link = document.querySelector('#link');
const linkHrefPath = link.getAttribute('href');
console.log(linkHrefPath);

//3.pakeiciam img src reiksme i kita
mainImage.src = 'img2.jpg';
console.log(mainImage);

//4.pakeisti href reiksme
link.href = 'https://github.com/';
console.log(link);

//5. pakeisti nuorodos teksta 'atidaryti' i  Google
// Pakeiciu teksta is Atidaryti i CONST
// NEBEREIKIA NES JAU PRIES TAI DAREM VIRSUJ......
link.textContent = 'Google';
console.log(link);

//6. PAKEISTI ELEMENTO SU ID title teksta i melyna
const title = document.querySelector('#title');
title.style.color = 'blue';

//7. pakeisti id box fono spalva i geltona
const box = document.querySelector('#box');
box.style.backgroundColor = 'yellow';

//8. id box ploti pakeisti i 20 px
box.style.width = '300px';

//9. id box paddinga i 20px
box.style.padding = '20px';

//10. id button fono ir teksto spalvas
const button = document.querySelector('#button');
button.style.backgroundColor = 'pink';
button.style.color = 'white';