let target = 16
const app = document.getElementById("app");
const cssRoot = document.querySelector(':root');

function createGrid(): void {
    let i = 0
    while (i++ < target) {
        let newSquare = document.createElement('div');
        newSquare.id = "appSquare";
        app?.appendChild(newSquare);
        console.log(i);
    }
}

createGrid();