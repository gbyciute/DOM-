//1. paselektinam visus elementus
const allElements = document.querySelectorAll('a, img, div, p');
console.log(allElements);

//2. 
const div = document.querySelector('div');
div.classList.add('ddiv');
console.log(div);

const p = document.querySelector('p');
p.classList.add('pClassNew')
console.log(p);

const img = document.querySelector('img');
img.id = 'imageId';
console.log(img);
 const a = document.querySelector('a');
 a.id = 'aHrefId';
 console.log(a);

 div.style.height = '200px';
 div.style.width = '150px';
 div.style.color = 'blue';

 p.style.color = 'green';
img.src = 'https://www.purina.lt/sites/default/files/2021-02/BREED%20Hero_0032_king_charles_spaniel.jpg';

img.style.borderRadius = '50%';
img.style.borderColor = 'green';
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {console.log(p)});