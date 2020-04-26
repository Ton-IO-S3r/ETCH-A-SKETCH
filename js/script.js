"use strict";
let squaresN = 16;
let grid_container;
let squares;
window.onload = createGrid(document.querySelector("grid-container"));
updateSquares()


const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', function(){
    squares.forEach(square => square.classList.remove("hovered"))
    squaresN = prompt('16-64:');
    resetGrid();
    createGrid()
    updateSquares();
});

function updateSquares() {
    squares = document.querySelectorAll(".single");
    squares.forEach(square => square.addEventListener('mouseover', fixColor))
}

function createSquare(parentElement) {
    let square = document.createElement('div');
    const gridSize = parentElement.clientWidth;
    square.classList.add("single");
    square.style.border = "1px solid black";
    square.style.width = gridSize/squaresN + "px";
    square.style.height = gridSize/squaresN + "px";
    square.style.boxSizing = "border-box"
    parentElement.appendChild(square);
}

function createGrid() {
    grid_container = document.querySelector(".grid-container");
    let gridSize = grid_container.clientWidth;
        for (let i = 0; i < (squaresN*squaresN); i++) {
            createSquare(grid_container)
        }
}

function resetGrid() {
    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.lastChild);
    }
}
function fixColor() {
    this.classList.add("hovered");
}
