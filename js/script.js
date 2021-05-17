
"use strict";

let gridSize = 16;
let squares, colorCode;
let hoverCodeStyle=0;
const grid_container = document.querySelector("#grid-container");
const square = document.createElement('div');
const gridWidth = grid_container.clientWidth;
const clearBtn = document.querySelector("#clear");
const randomBtn = document.querySelector("#random");
const bwBtn = document.querySelector("#bw");
const gradualBtn = document.querySelector("#gradual");


/* EVENTS */
window.onload = function(){
  createGrid(gridSize);
  styleGrid()
  setHoverListener(hoverCodeStyle)
}

clearBtn.addEventListener('click', function(){
  while (grid_container.firstChild) {
    grid_container.removeChild(grid_container.firstChild);
  }
  gridSize = parseInt(window.prompt('Which grid size do you want to setup: 16-100?'));
  if (isNaN(gridSize)) {
    alert('Wrong value, please try again.')
    return 0  ;
  } else if (gridSize < 15) {
    gridSize = 16;
    alert('Out of limits. Grid will be set to minimum size: 16 x 16')
  } else if (gridSize >100) {
    gridSize = 100;
    alert('Out of limits. Grid will be set to maximum size: 100 x 100')
  }
  createGrid(gridSize);
  styleGrid()
  setHoverListener(hoverCodeStyle)
});

bwBtn.addEventListener('click', function(){
  hoverCodeStyle=0
  while (grid_container.firstChild) {
    grid_container.removeChild(grid_container.firstChild);
  }
  createGrid(gridSize);
  styleGrid()
  setHoverListener(hoverCodeStyle)
});
randomBtn.addEventListener('click', function(){
  hoverCodeStyle=1
  while (grid_container.firstChild) {
    grid_container.removeChild(grid_container.firstChild);
  }
  createGrid(gridSize);
  styleGrid()
  setHoverListener(hoverCodeStyle)
});
gradualBtn.addEventListener('click', function(){
  hoverCodeStyle=2
  while (grid_container.firstChild) {
    grid_container.removeChild(grid_container.firstChild);
  }
  createGrid(gridSize);
  styleGrid()
  setHoverListener(hoverCodeStyle)
});


function createGrid(size) {
  for (let i = 0; i < (size*size); i++) {
    grid_container.appendChild(document.createElement('div'))
  }
}
function styleGrid(){
  squares = document.querySelectorAll('#grid-container div');
  squares.forEach(square => {
    square.style.width = gridWidth/gridSize + "px";
    square.style.height = gridWidth/gridSize + "px";
  })
}
function setHoverListener(hoverStyle) {
  squares = document.querySelectorAll('#grid-container div');
  squares.forEach(square => {
    switch (hoverStyle) {
      case 0:
        square.addEventListener('mouseover',()=>{bwColor(square)})
        break;
      case 1:
        square.addEventListener('mouseover',()=>{randomColor(square)})
        break;
      case 2:
        square.style.opacity=0
        square.addEventListener('mouseover',()=>{grayScaleColor(square)})
        break;
      default:
        break;
    }
  })
}

function bwColor(square) {
  colorCode = "02182B";
  square.style.backgroundColor="#"+colorCode;
}
function randomColor(square) {
  colorCode = Math.floor(Math.random()*16777215).toString(16);
  square.style.backgroundColor="#"+colorCode;
}
function grayScaleColor(square) {
  colorCode = "02182B";
  square.style.backgroundColor="#"+colorCode;
  if (parseFloat(square.style.opacity) < 1) {
    square.style.opacity = (parseFloat(square.style.opacity)+ 0.1).toString();
  }
  
}