console.log("hola");

function calculadoraConsumo(edad, pdto, consumoDia){
    let q = edad*365*consumoDia
    return `Necesitarás ${q} de ${pdto} para el resto de tu vida.`
}

console.log( calculadoraConsumo(80, "agua mineral", 2));
console.log( calculadoraConsumo(80, "galletitas", 2));

function cambiarUltimo(array, dato){
    array.pop();
    array.push(dato);
    return array
}

console.log(cambiarUltimo([1,23,4,5], 9000));
console.log(cambiarUltimo(["ale", "maria", "brian"], "nacho"));

/*
Definí un objeto libro que tenga las propiedades:
nombre (String)
genero (String)
cantidadDePalabras (Number)
paraAdultos (booleano)
Agregale al objeto los siguientes métodos:
describirse: Debe retornar un string que indique el nombre y género del libro
puedeLeerlo: Función que recibe un parámetro (la edad) y si es para adultos y la edad es menor a 18, el método retorna false. Caso contrario, debe retornar true.
*/

let libro = {
    nombre: "harry Potter",
    genero: "fantasia",
    palabras: 7900000,
    adultos: false,
    describirse: function(){
        return `El libro se llama ${this.nombre} y el genero es: ${this.genero}`
    },
    puedeLeerlo: function(edad){
        if(this.adultos == true && edad <=18){
            return "No podés leerlo, no tenés edad suficiente"
        } else {
            return "Este es un libro infantil"
        }
    } 
}

console.log(libro.describirse());
console.log(libro.puedeLeerlo(11));
