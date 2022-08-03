//Dados 10 valores numericos, informar cual es el mayor.
let nums = [9,5,6,50,2]

function numMayor(nums) {

    let aux = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if(aux < nums[i]){
            aux = nums[i]
        }
    }
    console.log(aux)
}

numMayor(nums)