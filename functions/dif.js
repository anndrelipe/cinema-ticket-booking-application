const dif = (...numbers) => {
    const total = numbers.reduce((acc, num) => {
         return acc - num
     })
     return total
}
 
module.exports = dif;