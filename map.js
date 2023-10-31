let fruits = new Map()

fruits.set('maças',10)
fruits.set('bananas',5)
fruits.set('laranja',8)

console.log(fruits)

console.log(fruits.get('maças'))
console.log(fruits.get('bananas'))
console.log(fruits.get('laranja'))

fruits.set('maças',8)
fruits.set('bananas',4)
fruits.set('laranja',3)
fruits.delete('bananas')
console.log(fruits)

console.log(fruits.get('maças'))
console.log(fruits.get('bananas'))
console.log(fruits.get('laranja'))
console.log(fruits.has('bananas'))
console.log(fruits.has('laranja'))
console.log(fruits.size)