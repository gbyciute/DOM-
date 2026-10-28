// const eilutes = Number(document.getElementById('eilutes').value);
// const stulpeliai = Number(document.getElementById('stulpeliai').value);

// let lentele = "";

// for (let i = 0; i < eilutes; i++) {
//     for (let j = 0; j < stulpeliai; j++) {
//         lentele += "* ";
//     }

//     lentele += "\n";   //pereina i nauja eil
// }

// console.log(lentele);

const mygtukas = document.querySelector("button");

mygtukas.addEventListener("click", function() {

    const eilutes = Number(document.getElementById("eilutes").value);//paimam value ir tik skaicius ()NUMBERS)
    const stulpeliai = Number(document.getElementById("stulpeliai").value);

    let lentele = ""; //TUSCIA NES NIEKO NETURIM IVESTA

    for (let i = 0; i < eilutes; i++) {
        for (let j = 0; j < stulpeliai; j++) {
            lentele += "* ";
        }

        lentele += "\n"; //NAUJA EILUTE PO KIEKVIENO CIKLOI
    }

    console.log(lentele);

});