//1.  sukurti elementa ir i ji ideti savo texta
const container = document.getElementById('container');
const element1 = document.createElement('p');
element1.textContent = 'PIRMAS ELEMENTAS';
console.log(element1);

//2 sukurti elementa ir i ji ideti kita elementa su tekstu
const container2 = document.createElement('div');
const element2 = document.createElement('h1');
element2.textContent = 'ANTRAS ELEMENT';
container2.append(element2);
console.log(container2);

//3. pazymeti elementa ir add atribute with value prideti klase id ir<a> <img> atributus su reiksmem
container2.classList.add('container2');
element2.id = ('element2');

const attributes = document.createElement('a');
attributes.href = 'https://www.google.com';
attributes.target = '_blank';
attributes.textContent = 'Open me';

const myImage = document.createElement('img');
myImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMI6OQQ7DbHGGqf_yBGE5YSluHkxn75J9JpAC39yNwy3_sVDub-fk8hxa&s=10';
myImage.setAttribute('alt', 'Gražus paveikslėlis');

attributes.appendChild(myImage);
container2.appendChild(attributes);
container.appendChild(container2);

//4. sukurti p tago elementus div viduje, pazymeti elementu masyva ir stiliu add
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');

p1.textContent = 'Pirmas tekstas';
p2.textContent = 'Antras tekstas';
p3.textContent = 'Trecias tekstas';
p4.textContent = 'ketvirtas tekstas';

container.append(p1, p2, p3, p4);

const elements = [p1, p2, p3, p4];

elements[0].style.color = 'white';
elements[0].style.backgroundColor = 'green';
elements[1].style.color = 'red';
elements[1].style.backgroundColor = 'black';
elements[2].style.color = 'white';
elements[2].style.backgroundColor = 'green';
elements[3].style.color = 'red';
elements[3].style.backgroundColor = 'black';

//5.paimti is input ir atspauzdinti konsoleje bei psl
const myInput = document.getElementById('myInput'); //paimam
const myButton = document.getElementById('myButton'); //paimam
const result = document.getElementById('result'); //paimam

myButton.addEventListener('click', () => {
    console.log(myInput.value)
    result.textContent = myInput.value; //PAIMAM MYINPUT REIKSME ()VALUE
}); ///cia ir                           //RESULTINAM PUSLAPYJE!!! (result);

//6. sukurti 2 mygtukus, paspausti pirma ir -> sukuriamas elementas, o sukurus 2 - el -> removed. STYLE
const myContainer = document.getElementById('myContainer');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');


container.append(button1, button2);
button1.style.backgroundColor = 'blue';
button2.style.backgroundColor = 'pink';
button1.style.width = '80px';
button2.style.width = '80px';
button1.style.height = '20px';
button2.style.height = '20px';
button1.style.color = 'white';
button2.style.color = 'white';
button1.textContent = 'SHOW';
button2.textContent = 'HIDE';

button1.addEventListener('click', () => {
    const smile = document.createElement('p');
    smile.classList.add('smile'); 
    smile.textContent = 'HELLO!'
    smile.style.color = 'red'
    container.appendChild(smile);
});

button2.addEventListener('click', () => {
    const smile = document.querySelector('.smile'); //pasirenkam ka salinam

    if (smile) { //jeigu yra pasalinam
        smile.remove();
    }
});


//7.sukurti click counter, skaiciuoti paspaudimus ir salia myugtuko matom skaiciu

const counterButton = document.getElementById('counterButton');
const counter = document.getElementById('counter');

let count = 0; //pradesim skaiciuot nuo 0
counterButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});



















