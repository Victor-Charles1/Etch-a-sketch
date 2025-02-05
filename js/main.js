
const container = document.querySelector('#container')

let newDiv= document.createElement('div')
container.appendChild(newDiv)

for(i=1; i<16;i++){
    let newDiv= document.createElement('div')
    newDiv.classList.add('square')
    container.appendChild(newDiv)
console.log('new div created')
}