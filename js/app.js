console.log('JS Trial')


/// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\\

function gameClickStart(){

    let gridSide = parseInt(difficultySelectorDOMElement.value);
    const numOfCells = gridSide ** 2 // ** significa elevato a, quindi si ottiene 10 x 10    

    for(let i = 0; i < numOfCells; i++){

        const cellDOMElement = document.createElement('div');
        let divClass = 'square-easy'

        const cellNumber = i + 1;
        cellDOMElement.innerHTML = cellNumber;


        if(difficultySelectorDOMElement.value === '10'){
     
            divClass = 'square-hard';
        
        } else if(difficultySelectorDOMElement.value === '9'){
      
            divClass = 'square-medium';
           
        } 

        cellDOMElement.classList.add(divClass)
        gridDOMElement.appendChild(cellDOMElement)

        cellDOMElement.addEventListener('click', function(){
        
            console.log('Hai clickato la cella numero ', cellNumber)
    
            cellDOMElement.classList.toggle('bg-azure')
        })
    }

    startButtonDOMElement.removeEventListener('click', gameClickStart);
}


function gameClickReset(){

    gridDOMElement.innerHTML= '';
    startButtonDOMElement.addEventListener('click', gameClickStart);

}


/// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\\










const gridDOMElement = document.getElementById('grid'); // object

const startButtonDOMElement = document.getElementById('generate-grid'); // object

const difficultySelectorDOMElement = document.getElementById('difficulty-selection')

const restartButtonDOMElement = document.getElementById('delete-grid')



startButtonDOMElement.addEventListener('click', gameClickStart);

restartButtonDOMElement.addEventListener('click', gameClickReset);