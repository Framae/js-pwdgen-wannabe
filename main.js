
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

let password = "La tua password è: " + name + lastName + color + "21" 
document.getElementById("password").innerHTML = password