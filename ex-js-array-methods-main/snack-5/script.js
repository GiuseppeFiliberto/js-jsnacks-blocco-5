const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const oddNumbs = nums.filter((number) =>{
    if (number % 2 === 0){
        return true
    }
    return false

})
console.log(oddNumbs);

//  Qui si potrebbe usare anche una versione più corta 

/* const oddNumbs = nums.filter((number) => number % 2 === 0)
console.log(oddNumbs); */

// Risultato: [2, 8, 4, 12]