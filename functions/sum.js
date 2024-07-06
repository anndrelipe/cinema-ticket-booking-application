const sum = (...numbers) => {
   const total = numbers.reduce((acc, num) => {
        return acc + num
    }, 0)
    return total
}

module.exports = sum;