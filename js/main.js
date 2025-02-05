
const container = document.querySelector('#container')



for(i=0; i<256;i++){
    let newDiv= document.createElement('div')
    newDiv.classList.add('square')
    container.appendChild(newDiv)
    console.log('new div created')
    
}

// event listener to change color of divs with class = square
const write =document.querySelector('.square')

write.addEventListener('mouseover',function(){
    write.style.backgroundColor ='yellow';
    console.log('I changed the background color with javascript')
});
write.addEventListener('mouseout',function(){
    write.style.backgroundColor ='yellow';
    console.log('I changed the background color with javascript')
});

