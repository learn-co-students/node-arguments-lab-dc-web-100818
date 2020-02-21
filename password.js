// code solution here
// console.log(process.argv)

process.argv.shift()
process.argv.shift()

// this leaves two arguments - the first is password length, the second is the number of passwords to print

const length = process.argv[0]
const num_of_passwords = parseInt(process.argv[1])

if (!length || !num_of_passwords){
    console.log('This program requires two arguments - a password length, and the number of passwords you would like to generate')
    return process.exit(1)
}

// console.log(`length: ${length}, number of passwords: ${num_of_passwords}`)

const generatePassword = (passwordLength) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let password = ''
    for(let i = 0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password;
}

const runProgram = (num_of_passwords) => {
    for(let i = 0; i < num_of_passwords; i++){
        console.log(generatePassword(length))
    }
    return process.exit(0)
}

runProgram(num_of_passwords)