import readline from 'readline'

const input = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

const name = await input('Enter your name? ')
const age = await input('Enter your age? ')
console.log(`Hi ${name}, you are ${age} .`)
