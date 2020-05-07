"use strict";
let squaresN = 16;
const grid_container = document.querySelector(".grid-container");
const gridSize = grid_container.clientWidth;
let squares, colorCode;
window.onload = function(){
    createGrid(grid_container);
    updateSquares()
}


const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', function(){
    squares.forEach(square => square.classList.remove("hovered"))
    squaresN = prompt('16-64:');
    resetGrid();
    createGrid()
    updateSquares();
});

const randomBtn = document.querySelector("#random");
randomBtn.addEventListener('click', function () {
    squares = document.querySelectorAll(".grid-container div");
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.removeEventListener('mouseover',bwColor)
            square.removeEventListener('mouseover',gradualColor)
            randomColor(square);
        })
    })
});

const bwBtn = document.querySelector("#bw");
bwBtn.addEventListener('click', function () {
    squares = document.querySelectorAll(".grid-container div");
    squares.forEach(square => {
        square.addEventListener('mouseover', function () {
            square.removeEventListener('mouseover',randomColor)
            square.removeEventListener('mouseover',gradualColor)
            bwColor(square);
        })
    })
});
const gradualBtn = document.querySelector("#gradual");
gradualBtn.addEventListener('click', function () {
    squares = document.querySelectorAll(".grid-container div");
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.removeEventListener('mouseover',bwColor)
            square.removeEventListener('mouseover',randomColor)
            gradualColor(square);
        })
    })
});


function updateSquares() {
    squares = document.querySelectorAll(".grid-container div");
    squares.forEach(square => {
        square.classList.add("single");
        // square.style.border = "1px solid black";
        square.style.width = gridSize/squaresN + "px";
        square.style.height = gridSize/squaresN + "px";
        square.style.boxSizing = "border-box"
        square.addEventListener('mouseover', function(){bwColor(square)})
    })
}

function createSquare(parentElement, gridSize) {
    let square = document.createElement('div');
    parentElement.appendChild(square);
}

function createGrid() {
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
function randomColor(square) {
    colorCode = Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor="#"+colorCode;
}
function bwColor(square) {
    colorCode = "02182B";
    square.style.backgroundColor="#"+colorCode;
}
function gradualColor(square) {
    colorCode = "ccc";
    square.style.backgroundColor="#"+colorCode;
}