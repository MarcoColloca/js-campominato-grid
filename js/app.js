console.log('JS Trial')

const gridDOMElement = document.getElementById('grid')
// console.log(gridDOMElement)

const gridSide = 10
const numOfCells = gridSide ** 2 // ** significa elevato a, quindi si ottiene 10 x 10

for(let i = 0; i < numOfCells; i++){
    const cellNumber = i + 1;
    console.log(cellNumber);

    const cellDOMElement = document.createElement('div');
    cellDOMElement.className = 'square';
    cellDOMElement.innerHTML = cellNumber;

    gridDOMElement.appendChild(cellDOMElement)
}