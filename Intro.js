
console.log("Hi World!")

let variable='Hi World!'
console.log(variable)

let name='Melvyn'
let favDrink='Monster'
console.log(`My name is ${name} and my favorite drink is ${favDrink}.`)

if(name == 'Liam'){
    console.log('Great name!')
}
else if (name == 'Stuart'){
    console.log('Less great name.')
}
else if (name == 'Melvyn'){
    console.log('Best name!')
}

let age = 17
let country = 'UK'
if(age >= 17 && country == 'UK'){
    console.log('What can I get you sir?')
}
else {
    console.log("Come back when you're older lad!")
}

let newName = 'Liam'
if (newName == 'Liam' || newName == 'Sam'){
    console.log('You are either Liam or Sam!')
}
else if (name == 'Melvyn'){
    console.log('Welcome!')
}
else {
    console.log("I don't know you...")
}

for (i=0; i<5; i++){
    console.log(i)
}

listNames = ['Sam', 'Stuart', 'Liam', 'Ezra', 'Melvyn']
for(i=0; i<listNames.length; i++) {
    console.log(listNames[i])
}

const myFunc = (aString) => {
    console.log(aString)
}
myFunc('Hello')

function myOtherFunction(anotherString){
    console.log(anotherString)
}
myOtherFunction("Hello again")

//Random number between 0 and 1
console.log(Math.random())

//Random number between 1 and 10, still floating point
console.log(Math.random() * 10)

//Random number between 1 and 10, using Math.floor
console.log(Math.floor(Math.random() * 10))

