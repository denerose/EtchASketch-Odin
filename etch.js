"use strict";
let target = 16;
const app = document.getElementById("app");
const cssRoot = document.querySelector(':root');
function updateCSS(target) {
    let sqrTarget = Math.sqrt(target);
    cssRoot === null || cssRoot === void 0 ? void 0 : cssRoot.style.setProperty('--total', sqrTarget);
    console.log(target);
}
function clearGrid() {
    const grid = document.getElementById("grid");
    grid === null || grid === void 0 ? void 0 : grid.remove();
    console.log("goodbye grid!");
}
function createGrid(target) {
    clearGrid();
    let newGrid = document.createElement('div');
    newGrid.id = "grid";
    app === null || app === void 0 ? void 0 : app.appendChild(newGrid);
    const grid = document.getElementById("grid");
    let i = 0;
    updateCSS(target);
    while (i++ < target) {
        let newSquare = document.createElement('div');
        newSquare.id = "appSquare";
        grid === null || grid === void 0 ? void 0 : grid.appendChild(newSquare);
        console.log(i);
    }
}
