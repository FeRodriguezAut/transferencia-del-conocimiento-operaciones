//produccion de la fabrica
//piezas producidas por hora
const piezasPorHora = 250;
//horas trabajadas
const horasTrabajadas = 8;
//capacidad de la caja
const capacidadCaja = 12;
//calculo de piezas, cajas y sobrantes
//total de piezas producidas
let totalPiezas = piezasPorHora * horasTrabajadas;
//calculo de cajas llenas y piezas sobrantes
let cajasLlenas = (totalPiezas / capacidadCaja);
//calculo de piezas sobrantes
let piezasSobrantes = totalPiezas % capacidadCaja;

//impresion de resultados
console.log(`En 8 horas de trabajo se fabricaron un total de ${totalPiezas} piezas.`);
console.log(`Se llenaron ${cajasLlenas} cajas de 12 piezas.`);
console.log(`Quedaron ${piezasSobrantes} piezas sueltas.`);
