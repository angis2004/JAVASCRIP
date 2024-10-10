/**elementos */
let frutas = ["manzana", "pera", "fresa"];
/**Como mostrar esos elementos/ */

document.write(frutas[2])

let nombre = ["pc_Angie"];
let procesador = ["Intel core i7"];
let ram = ["16gb"];
let espacio = ["1TB"];

let frase = `El nombre de mi pc es : <b> ${nombre}</b> <br>
             El procesaro es :<b> ${procesador} </b> <br>
             La memoria  ram es de :<b>  ${ram}</b> <br>
             El espacio es de  :<b> ${espacio}</b> <br> `;

document.write(frase);

//WHILE = pregunta a cada rato si la funcion (variable se esta cuimpliendo )
// primero se pregunta luego se ejecuta 


// let numero = 15;
// while (numero <10){
// numero++;
// document.write( " Estoy en la vuelta numero " +numero +"<br>" )
// }

//doWHILE = primero se hace y despues se pregunta para luego 
//ejecutarlo (hacer-mientras)

let numero2 = 15;
do {
    document.write(" Estoy en la vuelta numero " + numero2 + "<br>") //Lode  la parentesis es concatenacion para que la frase este en uno solo
    numero2++;
}
while (numero2 <= 10)

// - Sentencia break  = El break hace que el bucle finalice . 

let numero3 = 0;
while (numero3 < 1000) {
    numero3++;
    document.write(numero3);
    if (numero3 == 10) {
        break;
    }
}
document.write("<br>finalizo el bucle <br>")




/*FOR = increment = i*/




for (let i = 0; i < 6; i++) { //// i++ Imprime 0
    document.write(i + "")

}

for (let i = 6; i > 0; --i) {
    document.write(i + "<br>");
}

for (let i = 0; i < 6; ++i) { // ++i Imprime 1
    document.write(i + "<br>")

}



for (let i = 0; i < 6; ++i) { // ++i Imprime 1
    document.write(i + "<br>")
    if (i == 10) {
        break;
    }
}

//variable i = permite acceder a las posiciones de cada elemento del array. 
/*FOR = increment = i (CONTADOR) */




let frutas2 = [" manzana", "pera", "fresa"];
for (let i = 0; i < frutas2.length; i++) { // ++i Imprime 0

    //Comparacion  Si son iguales, se ejecuta el continue
    if (frutas2[i] == "manzana") {  // se saltea  
        continue;

    }
    document.write("La fruta es : " + frutas2[i] + "<br>");
}

//FOR IN  y FOR OF = la variable ya lao creamos nosotros.
//FOR IN  devuelve  posicion osea el indice donde esta posicionado 0,1,2,etc
//FOR Of = guarda el valor de la posicion .  

let animales = ["gato", "perro", "conejo"];


for (animal in animales) {
    document.write(animal + "<br>"); /*este muestra la posicion es decir el numero 0,1* */

};


for (animal of animales) {
    document.write(animal + "<br>"); /*y este muestra la variable que se encuentra en esa posicion */
}


/*** */

let alumnos1 = ["maria", "susana", "pablo"];
let alumnos2 = ["roger", "rachell", alumnos1, "rachelpp"];


for (let alumnos in alumnos2) {
    if (alumnos == 1) {


        for (let alumnos of alumnos1) {
            if (array ="rachell"){
                continue;
            }
            document.write(alumnos + "<br>");
            // break;
        }
    } else {
        document.write(alumnos2[alumnos]+"<br>");

    }
}



// Matriz con 3 arrays (subarrays o filas)
//Primer bucle (index): , Segundo bucle (x):
const miArray = [
    [1,2,3],  // Fila 0
    [4,5,6],  // Fila 1
    [7,8,9]   // Fila 2
]; 

// Primer bucle: recorre cada fila del array
for (let index = 0; index < miArray.length; index++) {
    let fila = miArray[index]; // Obtiene la fila actual (subarray)
    document.write(" Fila " + index + " : "); // Imprime el número de fila

    // Segundo bucle: recorre los elementos dentro de cada fila
    for (let x = 0; x < fila.length; x++) {
        document.write(fila[x] + " "); // Imprime los elementos de la fila
    }
}

//creando una funcion
function saludar(){
    let respuesta = prompt("Hola , como te fue tu dia");
    
    if (respuesta =="bien"){
     alert ("que bien xd");
    }else{
    // alert("es una pena"); 
    return "ok";
    }
}
//llamando
// saludar();


//prompt() devuelve valores como cadenas (strings)

// function suma(num1, num2) {
//     let resultado = num1 + num2;
//     alert(`"La suma es:" ${resultado}`);
// }

//     const suma = function(num1, num2) {
//     let resultado = num1 + num2;
//     alert(`"La suma es:" ${resultado}`);
// }


 const suma = (num1 , num2) =>{
    let resultado  = num1 + num2;
    alert(`"La suma es:" ${resultado}`);
 }


suma(10, 4);