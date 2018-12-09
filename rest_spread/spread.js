const originalFlavors = ['Chocolate', 'Vanilla']
const newFlavors = ['Strawberry', 'Mint Chocolate Chip', 'Superman']
const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors]
console.log(inventory)

const someFunc = (name, flavor) => console.log(`${name} really likes ${flavor}`)
const args = ['Tommy', 'Vanilla']
someFunc(...args)
