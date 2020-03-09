console.log("Ejercicio 1");
//Funcion arrow
const Cuadrado = (a) => {
    let result = Math.pow(a, 2);
    return result;
};

console.log(Cuadrado(4));

console.log("Ejercicio 2");
let number = 10;


const rango = (a) => {
    var valor = a;
    if (valor >= 1 && valor <= 100) {
        console.log("El numero " + valor + " esta en rango de 1 a 100");
    } else {
        console.log("El numero " + valor + " esta duera del rango de 1 a 100");
    }
    return valor;
};
console.log(rango(12));
console.log("Ejercicio 3");
const Conversion = (a) => {
    var numero = a;
    minutos = numero / 60;
    console.log("Los minutos son: " + minutos);
    horas = minutos / 60;
    console.log("Las horas son: " + horas);
    segundos = horas * 3600;
    console.log("Los segundos son: " + segundos);

    return numero;
};
console.log(Conversion(3600));

console.log("Ejercicio 4");
const Mayor = (a, b, c, d) => {


    if (a >= b && a >= c && d) {
        console.log("El mayor es: " + a);

    } else {
        if (b >= a && b >= c && b >= d) {
            console.log("El mayor es: " + b);
        } else {
            if (c >= a && c >= b && c >= d) {
                console.log("El mayor es: " + c);

            } else {
                console.log("El mayor es: " + d);

            }
        }
    }
    return null;
};
console.log(Mayor(30, 2, 5, 4));
console.log("Ejercicio 5");
let lista = [1, 2, 3, 4, 5];
suma = 0;

for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
}
console.log(suma);

console.log("Ejercicio 6=====================");

function BuscarelementoLista(buscar) {
    if (listab.indexOf(buscar) > -1) {
        console.log(true);
    } else if (listab.indexOf(buscar) === -1) {
        console.log(false);
    }
}
var listab = [1, 2, 3, 4, 5];
BuscarelementoLista(4);

console.log("===============================");
console.log("Ejercicio 7")
var lisOrde = [2, 1, 5, 8, 6];
console.log(lisOrde);
var list = lisOrde.sort();
console.log(list);

for (i = 0; i < lisOrde.length; i++) {
    console.log(lisOrde[i] == (list[i]));
}


console.log("Ejercicio 8")
lista1 = ["gato", "perro", "borrego", "elefante", "elefante"] // Array con mi listado
lista2 = ["gato", "perro", "borrego", "gallo"] // Array 2 con mi listado

// Uso un bucle para evaluar los dos arrays pues ambos tendrán la misma longitud
for (i = 0; i < lista1.length; i++) {
    console.log(lista1[i].includes(lista2[i]));
}



console.log("Ejercicio 9");
const sumalist = (a) => {

    var itera = a;

    for (let i = 0; i < itera; i++) {
        result = i + (i - 1) + 2;
        console.log(result);

    }

};
console.log(sumalist(10));

console.log("Ejercicio 10");
var listpar = [2, 7, 6, 8, 4, 5];

for (let i = 0; i < listpar.length; i++) {
    if (i % 2 == 0) {
        console.log("Numero par: " + listpar[i])
    }

}
console.log("Ejercicio 11");


let conjunA = new Set(['A', 'B', 'C', 'F', 'Y']);
let conjunB = new Set(['B', 'K', 'L', 'Y', 'H']);
let union = new Set([...conjunA, ...conjunB]);
console.log(union);
let intersection = new Set([...conjunA].filter(x => conjunB.has(x)));
console.log(intersection);
let difference = new Set([...conjunA].filter(x => !conjunB.has(x)));
console.log(difference);

console.log("Ejercicio 12");

function miMapa(fn) {

    var resultado = [];
    for (indice = 0; indice < this.length; indice++) {

        resultado[indice] = fn(this[indice]);
    }
    return resultado;

}

Array.prototype.miMapa = miMapa;
var resultado = lista.miMapa(function (elemento) {

    return elemento * 2;
})
console.log(resultado);

let vocales = new Map();
vocales.set(1,'a');
vocales.set(2,'e');
vocales.set(3,{ size: 'XXL', dorsal: '02' });
vocales.set(4,'o');
vocales.set(5,'u');

console.log(vocales.size); //5

for (let vocal of vocales) {
    console.log(vocal);
}
console.log(vocales.has('baz'));
console.log(vocales.get(3));



