
const container = document.querySelector('#container')

// prompt('Enter number of squares per side for the new grid.')

for(i=0; i<256;i++){
    let newDiv= document.createElement('div')
    newDiv.classList.add('square')
    container.appendChild(newDiv)
    console.log('new div created')
    
}

// event listener to change color of divs with class = square
const write =document.querySelectorAll('.square')

write.forEach(function(square) {
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'yellow';
        console.log('I changed the background color with JavaScript');
    });

    square.addEventListener('mouseout', function() {
        square.style.backgroundColor = 'yellow';
        console.log('I changed the background color with JavaScript');
    });
});

const btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
   let choice=  prompt('Enter number of squares per side for the new grid.')
   console.log(choice)
});