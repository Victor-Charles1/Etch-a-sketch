
const container = document.querySelector('#container')



for(i=0; i<256;i++){
    let newDiv= document.createElement('div')
    newDiv.classList.add('square')
    container.appendChild(newDiv)
console.log('new div created')
}