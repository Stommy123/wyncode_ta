const toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' }
console.log(toybox.item1)
console.log(toybox['item2'])
const { item1, item2 } = toybox
console.log(item1)
//ERROR ITEM3 WAS NEVER DEFINED console.log(item3)
const { item3: foo } = toybox
console.log(foo)
