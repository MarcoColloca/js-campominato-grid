console.log('JS Trial')


/// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\\

function gameClickStart(){
    
    
    // console.log(gridDOMElement.className)
    if(difficultySelectorDOMElement.value === 'hard'){

        const hardGridSide = 10;
        const numOfCells = hardGridSide ** 2 // ** significa elevato a, quindi si ottiene 10 x 10    
    
        for(let i = 0; i < numOfCells; i++){
            const cellNumber = i + 1;
            // console.log(cellNumber);
        
            const cellDOMElement = document.createElement('div');
            cellDOMElement.className = 'square-hard';
            cellDOMElement.innerHTML = cellNumber;
        
            gridDOMElement.appendChild(cellDOMElement)
        
        
            cellDOMElement.addEventListener('click', function(){
        
                console.log('Hai clickato la cella numero ', cellNumber)
        
                cellDOMElement.classList.toggle('bg-azure')
            })
        }

    } else if(difficultySelectorDOMElement.value === 'medium'){

        const mediumGridSide = 9;
        const numOfCells = mediumGridSide ** 2 // ** significa elevato a, quindi si ottiene 9 x 9    

        for(let i = 0; i < numOfCells; i++){
            const cellNumber = i + 1;
            // console.log(cellNumber);
        
            const cellDOMElement = document.createElement('div');
            cellDOMElement.className = 'square-medium';
            cellDOMElement.innerHTML = cellNumber;
        
            gridDOMElement.appendChild(cellDOMElement)
        
        
            cellDOMElement.addEventListener('click', function(){
        
                console.log('Hai clickato la cella numero ', cellNumber)
        
                cellDOMElement.classList.toggle('bg-azure')
            })
        }

    } else if (difficultySelectorDOMElement.value === 'easy'){

        const easyGridSide = 7;
        const numOfCells = easyGridSide ** 2 // ** significa elevato a, quindi si ottiene 7 x 7    

        for(let i = 0; i < numOfCells; i++){
            const cellNumber = i + 1;
            // console.log(cellNumber);
        
            const cellDOMElement = document.createElement('div');
            cellDOMElement.className = 'square-easy';
            cellDOMElement.innerHTML = cellNumber;
        
            gridDOMElement.appendChild(cellDOMElement)
        
        
            cellDOMElement.addEventListener('click', function(){
        
                console.log('Hai clickato la cella numero ', cellNumber)
        
                cellDOMElement.classList.toggle('bg-azure')
            })
        }
    }

    startButtonDOMElement.removeEventListener('click', gameClickStart);
    //console.log(gridDOMElement.className)
}


function gameClickReset(){

    gridDOMElement.innerHTML= '';
    startButtonDOMElement.addEventListener('click', gameClickStart);

}


/// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\\






const gridDOMElement = document.getElementById('grid'); // object
// console.log(gridDOMElement)

const startButtonDOMElement = document.getElementById('generate-grid'); // object
// console.log(startButtonDOMElement);

const difficultySelectorDOMElement = document.getElementById('difficulty-selection')
// console.log(difficultySelectorDOMElement)
// console.log(difficultySelectorDOMElement.value)

const restartButtonDOMElement = document.getElementById('delete-grid')
// console.log(restartButtonDOMElement)



startButtonDOMElement.addEventListener('click', gameClickStart);

restartButtonDOMElement.addEventListener('click', gameClickReset);