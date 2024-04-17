"use strict"

//let megadottSzo = "labdarúgás"
let szavak = ["labdarúgás", "kosárlabda", "jégkorong", "motorverseny", "kerékpározás", "vívócsarnok", "vívás", "sífutás", "vadvizi evezés"]

// random szám
let min = 0
let max = szavak.length
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
let randomszam = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
console.log(randomszam)
//-----------------------
let karakterek = szavak[randomszam].split("").join("").toUpperCase();
console.log(karakterek)
let szoSora = document.getElementById("szoSora")


//-----------------------

let betu = document.getElementById("btn")
let jatek = document.getElementById("btnJatek")
jatek.addEventListener("click", jatekInditas, { once: true })

function jatekInditas(event) {
    for (let i = 0; i < karakterek.length; i++) {
        let betuBox = document.createElement("div")
        let karakterInBox = document.createElement("p")
        karakterInBox.setAttribute("id", "karakterInBox")
        betuBox.setAttribute("class", "col-xs-12 betuBox")
        karakterInBox.append(karakterek[i])
        betuBox.append(karakterInBox)
        szoSora.append(betuBox)
        karakterInBox.style.visibility = "hidden"
        betuBox.style.borderBottom = "3px solid black";
    }
}

var buttons = document.querySelectorAll(".betubtn")
let felhasznaltBetuk = document.createElement("p")
felhasznaltBetuk.setAttribute("id", "felhasznaltBetuk")

console.log(szoSora)

for (const betu of buttons) {
    betu.addEventListener("click",
        function () {
            var letter = this.innerHTML
            felhasznaltBetuk.append(letter)
            felhasznaltBetuk.append(" ")
            hasznaltBetukSora.append(felhasznaltBetuk)
            console.log("You clicked a button")

            for (let j = 0; j < szoSora.length; j++) {
                console.log(szoSora[j])
                if (szoSora[j].lasChild.innerHTML == betu) {
                    console.log(szoSora[j])
                    szoSora[j].lasChild.innerHTML.style.visibility = "visible"

                }
            }
       }
    )
}
//-----------------------


//-----------------------


//-----------------------

