let target: number = 16
const app = document.getElementById("app");
const cssRoot = document.querySelector(':root') as any;

function updateCSS(target: number) {
    let sqrTarget = Math.sqrt(target as number);
    cssRoot?.style.setProperty('--total', sqrTarget);
    console.log(target);
}

function clearGrid(): void {
    const grid = document.getElementById("grid");
    grid?.remove();
    console.log("goodbye grid!")
}

function createGrid(target: number): void {
    clearGrid();
    let newGrid = document.createElement('div');
    newGrid.id = "grid";
    app?.appendChild(newGrid);
    const grid = document.getElementById("grid");
    let i = 0
    updateCSS(target as number);
    while (i++ < target) {
        let newSquare = document.createElement('div');
        newSquare.id = "appSquare";
        grid?.appendChild(newSquare);
        console.log(i);
    }
}