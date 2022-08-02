
 function clasificador(edad) {
    edad<=12 ?console.log('menor'):console.log()
    edad>12 && edad <18 ?console.log('cadete'):console.log()
    edad>=18 && edad <=26 ?console.log('juvenil'):console.log()
    edad>26 ?console.log('mayor'):console.log ()
 }
export {clasificador}