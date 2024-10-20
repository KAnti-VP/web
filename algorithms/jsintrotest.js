import * as fgv from './dolgozat.js'

const arraysEqualSorted = (arr, test) => JSON.stringify(arr.sort((a, b) => a - b)) == JSON.stringify(test.sort((a, b) => a - b));
const arraysEqual = (arr, test) => JSON.stringify(arr) == JSON.stringify(test);
const threeRulesSolution = () => {
    let rule = 1
    let counter = 0
    const result = []
    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0) {
            counter++
            if (rule == counter) {
                rule++
                if (rule > 3) rule = 1
                counter = 0
                continue
            }
        }
        result.push(i)
    }
    return result
}

const secondsSolution = (time) => {
    let result = 24 * 3600
    const times = time.split(':')
    result -= times[0] * 3600
    result -= times[1] * 60
    result -= times[2] * 1
    return result
}

const digitsAverageSolution = (number) => {
    let sum = number.toString().split('').reduce((total, item) => +total + +item)
    return sum / number.toString().length
}


export let total = 0

export const isLeapYearTest = () => {
    const max = 4
    let pont = 0
    pont += fgv.isLeapYear(2000) == true
    pont += fgv.isLeapYear(2001) == false
    pont += fgv.isLeapYear(1900) == false
    pont += fgv.isLeapYear(2024) == true
    total += pont / max * 100
    console.log(`isLeapYear: ${pont / max * 100}`)
}

export const divisorsTest = () => {
    const max = 4
    let pont = 0
    pont += arraysEqualSorted(fgv.divisors(4), [1, 2, 4])
    pont += arraysEqualSorted(fgv.divisors(7), [1, 7])
    pont += arraysEqualSorted(fgv.divisors(24), [1, 2, 3, 4, 6, 8, 12, 24])
    pont += arraysEqualSorted(fgv.divisors(1), [1])
    total += pont / max * 100
    console.log(`divisors: ${pont / max * 100}`)
}

// 0 - papír, 1 - kő, 2 - olló
export const rockPaperScissorsTest = () => {
    const max = 9
    let pont = 0
    pont += fgv.stonePaperScissorsWinner(0, 0) == "The game is a tie."
    pont += fgv.stonePaperScissorsWinner(1, 1) == "The game is a tie."
    pont += fgv.stonePaperScissorsWinner(2, 2) == "The game is a tie."
    pont += fgv.stonePaperScissorsWinner(0, 1) == "The first player wins."
    pont += fgv.stonePaperScissorsWinner(0, 2) == "The second player wins."
    pont += fgv.stonePaperScissorsWinner(1, 0) == "The second player wins."
    pont += fgv.stonePaperScissorsWinner(1, 2) == "The first player wins."
    pont += fgv.stonePaperScissorsWinner(2, 0) == "The first player wins."
    pont += fgv.stonePaperScissorsWinner(2, 1) == "The second player wins."
    total += pont / max * 100
    console.log(`stonePaperScissors: ${pont / max * 100}`)
}

export const gradeCalculatorTest = () => {
    const max = 9
    let pont = 0
    pont += fgv.gradeCalculator(100, 100) == 'A'
    pont += fgv.gradeCalculator(90, 100) == 'A'
    pont += fgv.gradeCalculator(80, 100) == 'B'
    pont += fgv.gradeCalculator(70, 100) == 'C'
    pont += fgv.gradeCalculator(60, 100) == 'D'
    pont += fgv.gradeCalculator(50, 100) == 'E'
    pont += fgv.gradeCalculator(40, 100) == 'F'
    pont += fgv.gradeCalculator(30, 100) == 'F'
    pont += fgv.gradeCalculator(0, 100) == 'F'
    total += pont / max * 100
    console.log(`gradeCalculator: ${pont / max * 100}`)
}

export const cuboidTest = () => {
    const max = 7
    let pont = 0
    pont += arraysEqual(fgv.cuboid(1,1,0), [0,0])
    pont += arraysEqual(fgv.cuboid(1,0,1), [0,0])
    pont += arraysEqual(fgv.cuboid(0,1,1), [0,0])
    pont += arraysEqual(fgv.cuboid(1,1,1), [6,1])
    pont += arraysEqual(fgv.cuboid(2,2,2), [24,8])
    pont += arraysEqual(fgv.cuboid(1,2,3), [22,6])
    pont += arraysEqual(fgv.cuboid(10.4, 13.5, 8.2), [672.76, 1151.28])
    total += pont / max * 100
    console.log(`cuboid: ${pont / max * 100}`)
}

export const threeRulesTest = () => {
    const max = 1
    let pont = 0
    pont += arraysEqual(fgv.threeRuls(), threeRulesSolution())
    total += pont / max * 100
    console.log(`threeRuls: ${pont / max * 100}`)
}

export const secondsTest = () => {
    const max = 5
    let pont = 0
    pont += fgv.seconds('0:0:0') == 86400 //secondsSolution('0:0:0')
    pont += fgv.seconds('23:59:59') == 1 //secondsSolution('23:59:59')
    pont += fgv.seconds('11:59:59') == 43201 //secondsSolution('11:59:59')
    pont += fgv.seconds('14:34:42') == 33918 //secondsSolution('14:34:42')
    pont += fgv.seconds('24:0:0') == 0 //secondsSolution('24:0:0')
    total += pont / max * 100
    console.log(`seconds: ${pont / max * 100}`)
}

export const fizzbuzzTest = () => {
    const max = 5
    let pont = 0
    pont += fgv.fizzbuzz(1) == 1
    pont += fgv.fizzbuzz(3) == 'fizz'
    pont += fgv.fizzbuzz(10) == 'buzz'
    pont += fgv.fizzbuzz(30) == 'fizzbuzz'
    pont += fgv.fizzbuzz(37) == 37
    total += pont / max * 100
    console.log(`fizzbuzz: ${pont / max * 100}`)
}

export const factorialTest = () => {
    const max = 5
    let pont = 0
    pont += fgv.factorial(1) == 1
    pont += fgv.factorial(3) == 6
    pont += fgv.factorial(5) == 120
    pont += fgv.factorial(8) == 40320
    pont += fgv.factorial(11) == 39916800
    total += pont / max * 100
    console.log(`factorial: ${pont / max * 100}`)
}

export const digitsAverageTest = () => {
    const max = 5
    let pont = 0
    pont += fgv.digitsAverage(111) == digitsAverageSolution(111)
    pont += fgv.digitsAverage(268) == digitsAverageSolution(268)
    pont += fgv.digitsAverage(0) == digitsAverageSolution(0)
    pont += fgv.digitsAverage(2468) == digitsAverageSolution(2468)
    pont += fgv.digitsAverage(99) == digitsAverageSolution(99)
    total += pont / max * 100
    console.log(`digitsAverage: ${pont / max * 100}`)
}
