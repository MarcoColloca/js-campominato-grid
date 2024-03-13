console.log('JS Trial')

const gridDOMElement = document.getElementById('grid'); // object
// console.log(gridDOMElement)

const startButtonDOMElement = document.getElementById('generate-grid'); // object
console.log(startButtonDOMElement);



startButtonDOMElement.addEventListener('click', function(){
    
    const gridSide = 10
    const numOfCells = gridSide ** 2 // ** significa elevato a, quindi si ottiene 10 x 10
    
    for(let i = 0; i < numOfCells; i++){
        const cellNumber = i + 1;
        // console.log(cellNumber);
    
        const cellDOMElement = document.createElement('div');
        cellDOMElement.className = 'square';
        cellDOMElement.innerHTML = cellNumber;
    
        gridDOMElement.appendChild(cellDOMElement)
    
    
        cellDOMElement.addEventListener('click', function(){
    
            console.log('Hai clickato la cella numero ', cellNumber)
    
            cellDOMElement.classList.toggle('bg-azure')
        })
    }
})