console.log('JS Trial')


/// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\\

function gameClickStart(){

    let gridSide = parseInt(difficultySelectorDOMElement.value); //number
    const numOfCells = gridSide ** 2 // number → ** significa elevato a, quindi si ottiene 10 x 10    

    for(let i = 0; i < numOfCells; i++){

        const cellDOMElement = document.createElement('div');
        let divClass = 'square-easy' //string

        const cellNumber = i + 1; //number
        cellDOMElement.innerHTML = cellNumber; //string

        if(difficultySelectorDOMElement.value === '10'){
     
            divClass = 'square-hard'; //string
        
        } else if(difficultySelectorDOMElement.value === '9'){
      
            divClass = 'square-medium'; //string
           
        } 

        cellDOMElement.classList.add(divClass) //object
        gridDOMElement.appendChild(cellDOMElement) ////object

        cellDOMElement.addEventListener('click', function(){
        
            console.log('Hai clickato la cella numero ', cellNumber)
    
            cellDOMElement.classList.toggle('bg-azure') //object
        })
    }

    startButtonDOMElement.removeEventListener('click', gameClickStart);
}


function gameClickReset(){

    gridDOMElement.innerHTML= ''; //string
    startButtonDOMElement.addEventListener('click', gameClickStart);

}


/// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\\










const gridDOMElement = document.getElementById('grid'); //object

const startButtonDOMElement = document.getElementById('generate-grid'); //object

const difficultySelectorDOMElement = document.getElementById('difficulty-selection') //object

const restartButtonDOMElement = document.getElementById('delete-grid') //object


// Creazione delle varie griglie tramite funzione definita sopra
startButtonDOMElement.addEventListener('click', gameClickStart);


// Reset delle griglie tramite funzione definita sopra
restartButtonDOMElement.addEventListener('click', gameClickReset);