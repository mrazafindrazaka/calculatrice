const operation = (type, n1, n2) => {
    switch (type) {
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        case '+':
            return n1 + n2
        default:
            console.error('unknown operation')
    }
}

const getResult = (calculate) => {
    let splitCalculate = calculate.match(/-?\d+|\+|\*|\//g)
    for (let count = 0; count < splitCalculate.length; count++) {
        if (splitCalculate[count] === '*' || splitCalculate[count] === '/') {
            if (splitCalculate[count] === '/' && splitCalculate[count + 1] === '0') {
                splitCalculate = null
                break
            }
            splitCalculate[count - 1] = operation(
                splitCalculate[count],
                parseInt(splitCalculate[count - 1]),
                parseInt(splitCalculate[count + 1])
            ).toString()
            splitCalculate[count] = ''
            splitCalculate[count + 1] = ''
            splitCalculate = splitCalculate.filter((element) => {
                return element !== ''
            })
            count = 0
        }
    }
    if (splitCalculate === null)
        return null
    let finalStep = splitCalculate.filter(Number).map(Number)
    let result = 0
    for (const number of finalStep) {
        result = operation('+', result, number)
    }
    return result
}

const calculate = (req, res) => {
    const result = getResult(req.body.calculate)
    res.status(200).json({result: result})
}

module.exports = {
    getResult,
    calculate
}
