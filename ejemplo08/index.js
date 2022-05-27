let rectangulo = require('./rectangulo.js')
let cuadrado = require('./cuadrado.js')
//

var cowsay = require("cowsay");


console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

// or cowsay.think()
// console.log(rectangulo,circulo,cuadrado);
let clase = new cuadrado(5);
console.log(`perimetro ${clase.area()}`);
console.log(`perimetro ${clase.perimetro()}`);