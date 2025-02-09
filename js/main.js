
const container = document.querySelector('#container')
const btn = document.querySelector('#btn')


// event listener to change color of divs with class = square


function changeColor(){
    const write =document.querySelectorAll('.square')
    write.forEach(function(square) {
        square.dataset.opacity = 0;
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'yellow';

            
           
            console.log('I changed the background color with JavaScript');
        });
    
        square.addEventListener('mouseout', function() {
            square.style.backgroundColor = 'black';
            console.log('I changed the background color with JavaScript');
         
            let currentOpacity = parseFloat(square.dataset.opacity);
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                square.dataset.opacity = currentOpacity;

                square.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        });
    });
    
    }


//btn prompt and input validation
btn.addEventListener('click', function(){
   let response=  prompt('Enter number of squares per side for the new grid.')
   console.log(response)
   response=parseInt(response)

   if(Number.isNaN(response)||response>100|| response<0){
    alert('Enter a number less than 100.')
   }else{
    createGrid(response)
   }
});

//create grid function
function createGrid(squaresPerSide){
    container.innerHTML=''; // remove old grid

    const containerSize = container.clientWidth
    const squareSize = containerSize/squaresPerSide




//for loop makes grid
    for(i=0; i<squaresPerSide*squaresPerSide;i++){
        let newDiv= document.createElement('div')
        newDiv.classList.add('square')
        newDiv.style.width=`${squareSize}px`
        newDiv.style.height=`${squareSize}px`
        container.appendChild(newDiv)
        console.log('new div created')
        
        
    }
    changeColor()
}
createGrid(16); //default 16x16 grid
