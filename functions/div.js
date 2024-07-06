const div = (...numbers) => {
    return numbers.reduce((acc, num) => {
        return acc / num
    });
};

module.exports = div;