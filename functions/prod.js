const prod = (...numbers) => {
    return numbers.reduce((acc, num) => {
        return acc * num
    }, 1)
}

module.exports = prod;