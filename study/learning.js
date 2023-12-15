/**
 * Practicing JavaScript code.
 * 
 * 'node [filename].js' on command-line to run in terminal
 */

const x = 1  // immutable
let y = 5  // mutable

console.log(x, y)
y += 10
console.log(x, y)
y = 'sometext'
console.log(x, y)
//x = 4  // causes error


// Arrays
const t = [1, -1, 3]  // array contents still mutable since variable 't' only points to array object
t.push(5)
const t2 = t.concat(5)  // creates new array

//console.log(t.length)
//console.log(t[1])

t.forEach(value => {
    console.log(value)
})

console.log(t)
console.log(t2)



// Mapping
const ti = [1, 2, 3]

const m1 = ti.map(value => value * 2)
console.log(m1)  // [2, 4, 6] is printed

const m2 = ti.map(value => '<li>' + value + '</li>')
console.log(m2)  // ['<li>1</li>', '<li>2</li>', '<li>3</li>'] is printed



// Destructuring assignment
const tii = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)  // [3, 4, 5] is printed



// Objects
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD'
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov'
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)  // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])  // 35 is printed

object1.address = 'Helsinki'  // adding new properties to objects
object1['secret number'] = 12341



// Functions
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result = sum(1, 5)
console.log(result)

const square = p => {
    console.log(p)
    return p * p
}

const square2 = p => p * p  // shortened square function

const tiii = [1, 2, 3]
const tSquared = tiii.map(p => p * p)  // tSquared is now [1, 4, 9]


// function declaration (older method)
function product(a, b) {
    return a * b
}
const resulti = product(2, 6)  // result is now 12

// function expression
const average = function(a, b) {
    return (a + b) / 2
}
const resultii = average(2, 5)  // result is now 3.5