//Dados 20 numeros entereos, informar el promedio que los mayores que 100 y la suma de los menores que -10.

function promYsum ( arrData){
    
    let sumTot = 0
    let k = 0
    let sumProm = 0  
    let totalProm = 0

    for (let i = 0; i < arrData.length ; i++) {
    
        if (arrData[i]>100) {
             //promedio 
            k = k + 1
            sumProm = sumProm + arrData[i]
            totalProm = sumProm / k
        }
        else if ( arrData[i] < -10){
            
            //suma
            sumTot = sumTot + arrData[i]

        }
    }
    console.log(totalProm)
    console.log(sumTot)
}

 export{promYsum}