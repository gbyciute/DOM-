// sukurti nauja elementa HTMLAllCollection
const newImg = document.createElement('img');
newImg.src = 'https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg';
newImg.alt = 'dog';



const newOrderedList = document.createElement('ol');
newOrderedList.li = 'orderdList';
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');

newOrderedList.append(listItem1, listItem2);
container.appendChild(newImg);
container.appendChild(newOrderedList);
//arba
// container.appendChild(newImg, newOrderedList);

//patalpinti texta 1 VAR textcontent
listItem1.textContent = 'asdasdasdas';
//2VAR su innerText
//3VAR yra innerHTML BLOGAS!!!//

//INSERTaDJACENTeLEMENT
//beforebegin
//afterbegin
//beforeend
//afterend

container.insertAdjacentElement('beforebegin, newOrderedList');
//PAKEICIAM objekto vieta kur norim