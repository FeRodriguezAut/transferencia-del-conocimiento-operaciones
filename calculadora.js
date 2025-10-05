// Calculadora de gastos de viaje
//Costos fijos
const transporte = 120000;
const alojamiento = 100000;
const alimentacion = 150000;

//Sumato de valores fijos 
let total = transporte + alojamiento + alimentacion;
//valor por persona
let cadaunoPaga = total / 4;
//valor con couta extra
let coutaextra = 130000;
//valor total con couta extra
let totalConCoutaExtra = cadaunoPaga + coutaextra;
//valor sobrante total
let sobrante = total-totalConCoutaExtra*4;
//Impresion de resultados
console.log("El total del viaje es: " + total);
console.log("Cada uno debe pagar: " + cadaunoPaga);
console.log("Si cada uno paga una couta extra de " + coutaextra + " entonces cada uno pagara: " + totalConCoutaExtra);
console.log("El sobrante del viaje sera: " + sobrante);


