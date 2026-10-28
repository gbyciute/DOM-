const mainHeading = document.getElementsByTagName('h1');
console.log(mainHeading);

const paragraph1 = document.getElementsByClassName('paragraph1');
console.log(paragraph1);

const container = document.getElementById('container');
console.log(container);


const mainHeadingWithUniversal = document.querySelector('h1');
console.log(mianHeadingWithUniversal);

const paragraph1WithUniversal = document.querySelector('.paragraph1');
console.log(paragraph1WithUniversal);

const containerWithUniversal = document.querySelector('container');
console.log(containerWithUniversal);

//querySelector - paima pati pirma
//o querySelectorAll - paima visus
// su nodelistu idomiau ir daugiau galima


//prideti atributa
//cia pridejom per js foto

const firstImg = document.querySelector('.firstImg');
firstImg.setAttribute('src', 'https://hips.hearstapps.com/clv.h-cdn.co/assets/16/18/gettyimages-586890581.jpg?crop=0.668xw:1.00xh;0.219xw,0')

firstImg.alt = 'Angry cat';


//gauti atribuyo reiksme
let firstImgPath = firstImg.getAttribute('src');
console.log(firstImgPath);


//Darbas su klasemis pridedam kalse kaskam
mianHeadingWithUniversal.classList.add('mainHeading');
mianHeadingWithUniversal.classList.add('mainHeadingAnotherClass');

// o pasalinti taip
mianHeadingWithUniversal.classList.remove('mainHeadingAnotherClass');


// Keisti elementu stiliu

firstImg.style.borderRadius = '50%';
firstImg.style.height = '100px';
firstImg.style.borderStyle = 'groove';
firstImg.style.borderColor = 'green';
firstImg.style.borderWidth = '5px';

paragraph1WithUniversal.forEach((element) => (element.style.color = 'red'));