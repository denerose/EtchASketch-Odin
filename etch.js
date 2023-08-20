"use strict";
let target = 4;
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
function colourMe(me) {
    me === null || me === void 0 ? void 0 : me.setAttribute("style", "background-color: rebeccapurple;");
}
function createGrid(input) {
    let target = input * input;
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
        newSquare.addEventListener("mouseover", () => {
            colourMe(newSquare);
        });
        grid === null || grid === void 0 ? void 0 : grid.appendChild(newSquare);
    }
}
createGrid(4);
