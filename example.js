// let pets = [
//     {
//         name: 'Fido',
//         type: 'dog'
//     },
//     {
//         name: 'Jerry',
//         type: 'mouse'
//     },
//     {
//         name: 'Felix',
//         type: 'cat'
//     }
// ]
const character = {
    name: 'Felix',
    type: 'cat'
}


let characterV2 = { ...character, age:20 } 
console.log(characterV2)
console.log(character)