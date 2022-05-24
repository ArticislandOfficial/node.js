const {colores, planetas} = require('./universo.js');

console.log('Variable');
console.log(colores);

console.log('-----------');
console.log('Recorrido');
console.log('-----------');
colores.forEach(
    color => {
        console.log(`El color es ${color}`);
    }
);

console.log('Variable');
console.log(planetas);

console.log('-----------');
console.log('Recorrido planetas');
console.log('-----------');
planetas.forEach(
    planeta => {
        console.log(`El planeta ${planeta}`);
    }
);