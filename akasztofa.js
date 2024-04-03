"use strict"

let megadottSzo = "labdarúgás"
let szavak = ["labdarúgás", "kosárlabda", "jégkorong", "motorverseny", "kerékpározás", "vívócsarnok", "vívás", "sífutás", "vadvizi evezés"]

// random szám
let min = 0
let max = szavak.length
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
let randomszam  = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
console.log(randomszam)
//-----------------------

let karakterek = szavak[randomszam].split("");
console.log(karakterek)
//console.log(karakterek[szavak])
const ujkarakter = "_ ";
const ujSzo = ujkarakter.repeat(karakterek.length);

//-----------------------

let betu = document.getElementById("btn")
//const egesz = document.getElementById("container")
let jatek = document.getElementById("btnJatek")

jatek.addEventListener("click", jatekInditas, {once:true})
//betu.addEventListener("click", buttonFunction)

function jatekInditas (event)
{
    let szo = document.createElement("p")
    //let container = document.getElementById("container")
    szo.setAttribute("id", "kitalalando")
    szo.append(ujSzo)
    szoSora.append(szo)
   
}

var buttons = document.querySelectorAll(".betubtn")
console.log(buttons)
let felhasznaltBetuk = document.createElement("p")
felhasznaltBetuk.setAttribute("id", "felhasznaltBetuk")

for (const betu of buttons)
{
    betu.addEventListener("click", 
    function() {
        let body = document.body
        var letter = this.value
        felhasznaltBetuk.append(letter)
        szoSora.append(felhasznaltBetuk)
        console.log("You clicked a button")
    }
    )
}



//-----------------------
   // Az output div kiválasztása
    //var output = document.getElementById('output');
    // Az output tartalmának törölése
    //output.innerHTML = '';

     //megadottBetuk.append(felhasznaltBetuk)
    // A kiválasztott betű hozzáfűzése az outputhoz
    //output.textContent = letter;

// function betuValasztas(event)
// {
//    foreach (betu in karakterek[szavak])
//     {
//         if (karakterek[szavak].includes(betu))
//         {
//             karakterek[szavak] == betu
//         }
//     }


//     let felhasznaltBetuk = document.createElement("p")
//     felhasznaltBetuk.setAttribute("id", "felhasznaltBetuk")
//     felhasznaltBetuk.append(betu)
//     megadottBetuk.append(felhasznaltBetuk) 
// }

//-----------------------
// const buttons = document.querySelectorAll(".btn");

// // loop through each button and add a click event listener
// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     // do something when the button is clicked
//     console.log("You clicked a button");
    

//   });
// });

// buttons.forEach(function(buttonFunction)
//  {
//   buttonFunction.click = function() {

//     let body = document.body
//     var letter = this.value
//     felhasznaltBetuk.append(letter)
//     szoSora.append(felhasznaltBetuk)
//     console.log("You clicked a button")

//   }  
// })