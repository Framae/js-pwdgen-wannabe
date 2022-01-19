/* Calcolo anno attuale */

// const annoNascita = 1988;
// let eta = prompt("Quanti anni hai?");
// eta = parseInt(eta);
// let annoAttuale = annoNascita + eta;
// document.getElementById('annoAttuale').innerHTML = annoAttuale;



//camel case
// let annoDiNascita;


// let primaStringa = "Ciao";
// let secondaStringa = "Mondo!";

// let risultato = 'Dentro questo DIV ho scritto: ' + primaStringa + ' ' + secondaStringa;

// let concatenazione = `Dentro questo DIV ho scritto: ${primaStringa} ${secondaStringa}` ;


// console.log(risultato);
// console.log(concatenazione);


// richiesta nome

let name = prompt("Inserire nome") 
document.getElementById("firstName").innerHTML = name;

// richiesta cognome

let lastName = prompt("Inserire cognome")
document.getElementById("lastName").innerHTML = lastName


// richiesta colore preferito

let color = prompt("favourite color")
document.getElementById("color").innerHTML = color

// password


let password = name + lastName + color 
document.getElementById("password").innerHTML = password