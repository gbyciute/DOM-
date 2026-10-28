const firstImg = document.querySelector('.firstImg');
console.log(firstImg);

firstImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMI6OQQ7DbHGGqf_yBGE5YSluHkxn75J9JpAC39yNwy3_sVDub-fk8hxa&s=10';

//function() galiu ir tiap
firstImg.addEventListener('click', ()=>{
    console.log('paspaudziau ant paveiskliuko')

    firstImg.style.borderRadius = '50%';
    firstImg.style.border = '5px dotted green';
});

//const container = document.getElementById('container');


// const changingColourButton = document.createElement('button');
// changingColourButton.textContent = 'MygtukasWow';
// container.appendChild(changingColourButton);

// changingColourButton.addEventListener('click', ()=>{
//     const mainHeading = document.querySelector('h1')

//     if(mainHeading.style.color === 'red') {
//         mainHeading.style.color = 'blue';
//     } else {
//         mainHeading.style.color = 'red';
//     }

/////2 VARIANTAI KAIP RASYTI
    // mainHeading.style.color === 'red'
    // ?mainHeading.style.color === 'blue'
    // :mainHeading.style.color === 'red';
// }) //NESIKEICIA BUTTONAS

const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstNameInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (e) => { //e = event
    e.preventDefault();//kad nepersikrautu psl idedam event
    console.log(firstName.value);

    // const paragraph = document.createElement('p');
    // paragraph.textContent = firstNameInput.value;
    // container.appendChild(paragraph);

    //form.reset();//sita rasom func gale visada

    firstNameInput.value = '';
});


//passwordas

const passwordInput = document.getElementById("password");
const revealPasswordInput = document.getElementById('revealPassword');

revealPasswordInput.addEventListener('change', () => {
    revealPasswordInput.checked 
    ? (passwordInput.type='text') 
    : (passwordInput.type = 'password');
})
