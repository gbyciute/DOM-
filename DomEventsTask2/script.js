//1. su JS sukuriam 5 html elementus
const element1 = document.createElement('h1');
const element2 = document.createElement('h2');
const element3 = document.createElement('h3');
const element4 = document.createElement('h4');
const element5 = document.createElement('h5');

const container = document.getElementById('container');

element1.textContent = 'PIRMAS';
element2.textContent = 'ANTRAS';
element3.textContent = 'TRECIAS';
element4.textContent = 'KETVIRTAS';
element5.textContent = 'PENKTAS';

container.append(element1, element2, element3, element4, element5);
element1.classList.add('pirmas');
element2.id = ('antras');
element3.classList.add('trecias');
element4.id = ('ketvirtas');

document.getElementById('antras').style.color = 'red';
document.getElementById('ketvirtas').style.color = 'yellow';
document.querySelector('.pirmas').style.color = 'blue';
document.querySelector('.trecias').style.color = 'green';
document.querySelector('h5').style.color = 'pink';

const divs = document.querySelectorAll('div');

divs.forEach(div => {
    div.style.height = '200px';
    div.style.width = '100px';
    div.style.backgroundColor = 'brown';
});

//5. BUTTON CHANGING COLOR

const button1 = document.getElementById('button1');
const colours = ['red', 'blue', 'green', 'purple', 'yellow', 'pink'];
let spalvosIndex = 0; //pradedam nuo raudonos

button1.addEventListener('click', () => {
    divs.forEach(div => {
        div.style.backgroundColor = colours[spalvosIndex];
        spalvosIndex++;


        if (spalvosIndex >= colours.length) {
        spalvosIndex = 0;
    }
    });
});

//6. random 6 p tagai, random zodizia is masyvo

