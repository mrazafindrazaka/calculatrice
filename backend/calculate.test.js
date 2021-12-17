const {getResult} = require('./calculate')

test('addition', () => {
    expect(getResult('250+103')).toBe(353)
})

test('subtraction', () => {
    expect(getResult('250-300')).toBe(-50)
})

test('multiplication', () => {
    expect(getResult('70*154')).toBe(10780)
})

test('division', () => {
    expect(getResult('150/2')).toBe(75)
})

test('addition with negative number first', () => {
    expect(getResult('-500+505')).toBe(5)
})

test('subtraction with negative number first', () => {
    expect(getResult('-500-100')).toBe(-600)
})

test('multiplication with negative number first', () => {
    expect(getResult('-500*100')).toBe(-50000)
})

test('division with negative number first', () => {
    expect(getResult('-500/100')).toBe(-5)
})

test('simple priority', () => {
    expect(getResult('-48+20-60/6+3*5')).toBe(-23)
})

test('complex priority', () => {
    expect(getResult('-48/2*4*12/8')).toBe(-144)
})
