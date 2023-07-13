

alert("Bienvenido/a al sitio web de la Universidad del Distrito 1");
let respuesta = prompt("Antes de empezar, responda: ¿de qué color era el caballo blanco de San Martin?").toUpperCase();
while(respuesta != "BLANCO"){
    respuesta=prompt("Respuesta incorrecta. Intente nuevamente").toUpperCase();
}


let usuario = prompt("Ingrese su nombre de usuario");

console.log ("Hola, " + usuario + ". Vamos a ver si promocionás tu materia, vas a final, o tenés que recursar.");
let materia = prompt("Ingrese nombre de la materia");
let parcial1= Number(prompt("Ingrese la nota obtenida en el primer parcial"));
console.log ("Nota del primer parcial de " + materia + ": " + parcial1)
let parcial2= Number(prompt("Ingrese la nota obtenida en el segundo parcial"));
console.log ("Nota del segundo parcial de " + materia + ": " + parcial2);
let promedio = (parcial1 + parcial2)/2
console.log("Tu promedio en " + materia + " es de " + promedio );

function  comoTerminoElAño(){

if(promedio >= 6.5){
        console.log("!Promocionaste!");
} else if(promedio >= 4){
        console.log("Vas a final.")
    }else{console.log("Tenés que recursar.")}
}

comoTerminoElAño();


