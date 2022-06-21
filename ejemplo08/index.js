// let Rectangulo = require('./rectangulo.js')
let { Cuadrado } = require("./cuadrado.js");
let { Rectangulo } = require("./rectangulo");
let { Circulo } = require("./circulo");

//

// var cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U ",
//   })
// );

// or cowsay.think()
// console.log(rectangulo,circulo,cuadrado);
let cuadradoSolved = new Cuadrado(5);
console.log(`area cuadrado ${cuadradoSolved.area()}`);
console.log(`perimetro ${cuadradoSolved.perimetro()}`);

let rectanguloSolved = new Rectangulo(5, 3);
console.log(`area rectangulo ${rectanguloSolved.area()}`);
console.log(`perimetro ${rectanguloSolved.perimetro()}`);

let circuloSolved = new Circulo(10);
console.log(`area circulo ${circuloSolved.area()}`);
console.log(`perimetro ${circuloSolved.perimetro()}`);
