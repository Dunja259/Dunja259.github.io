let foto = [
    "slika1.png",
    "slika2.png",
    "slika3.png",
    "slika4.png",
    "slika1.png",
    "slika2.png",
    "slika3.png",
    "slika4.png"
]

let galerija = document.getElementById("galerija");
let modal = document.getElementById("modal");
let modalInner = document.getElementById("modal-inner");

function prikazGalerije() {
    for (let i = 0; i < foto.length; i++) {
        galerija.innerHTML += `<img src='${foto[i]}' onclick='otvoriModal(${i})'>`;

        
    }
}

function otvoriModal(i) {
    modal.style.display ="block";   
    modalInner.innerHTML = `
    <div class="predhodna" onclick='otvoriModal(${i==0? foto.length - 1 : i-1})'> < </div>
    <img src='${foto[i]}'>
    <div class="sledeca" onclick='otvoriModal(${i==foto.length - 1? 0 : i+1})'> > </div>
    ` 
}

function izlaz() {
    modal.style.display ="none";    
}

prikazGalerije();