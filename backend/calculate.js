const operation = (type, n1, n2) => {
    switch (type) {
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': return n1 / n2
        default: console.error('unknown operation')
    }
}

const calculate = (req, res) => {
    console.log(operation('+', 1, 2))
    res.status(200).send('ok')
}

module.exports = calculate
