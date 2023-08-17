"use strict";
let target = 16;
const app = document.getElementById("app");
function createGrid() {
    let i = 0;
    while (i++ < target) {
        let newSquare = document.createElement('div');
        newSquare.id = "appSquare";
        app === null || app === void 0 ? void 0 : app.appendChild(newSquare);
        // i ++;
        console.log(i);
    }
}
createGrid();
