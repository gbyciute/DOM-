//1. sukurti h2 ir i id=root patalpinti
const root = document.getElementById('root');
const newHeader1 = document.createElement('h2');
newHeader1.textContent = 'Mano pirmasis elementas';
root.appendChild(newHeader1);

console.log(root);

//2. sukurti <p> ir i root vidu
const newPElement = document.createElement('p');
newPElement.textContent = 'Tai yra mano sukurtas tekstas';
root.appendChild(newPElement);

//3. nuajas div, aprasyti ploti, auksti ir spalva fono ir i root
const newDiv = document.createElement('div');
newDiv.style.width = '300px';
newDiv.style.height = '100px';
newDiv.style.backgroundColor = 'pink';
root.appendChild(newDiv);

//4. sukuriam button ir i root
const button1 = document.createElement('button');
button1.textContent = 'Spausti';
root.appendChild(button1);

//5. sukurti img prideti src ir alt ir i root
const image = document.createElement('img');
image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKf4dfJ_mg9uXVqLmivPQpBc1uhbh7j7p3re_dd8ObeJCQajGNOwdzAI&s=10';
image.alt = 'suniukas';
root.appendChild(image);

//6. a elementa sukurti aprasyti stiliu
const aElement = document.createElement('a');
aElement.textContent = 'Apsilankyti svetaineje';
aElement.href = 'https://github.com/';

root.appendChild(aElement);

//7. nauja div
const newDiv2 = document.createElement('div');
newDiv2.textContent = 'Apsilankyti svetaineje';
newDiv2.style.width = '200px';
newDiv2.style.height = '50px';
newDiv2.style.backgroundColor = 'blue';
newDiv2.style.color = 'white';

root.appendChild(newDiv2);

//8. NUAJUS P ir visiem skirtingas spalvas 3
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
p1.textContent = 'Good Morning Everyone';
p2.textContent = 'Hello, my name is....';
p3.textContent = 'Goodbye, have a nice day BoB Smith';

p1.style.color = 'red';
p2.style.color = 'green';
p3.style.color = 'yellow';

root.appendChild(p1);
root.appendChild(p2);
root.appendChild(p3);





