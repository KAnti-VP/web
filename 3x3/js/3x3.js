/**
 * Adatok kezdő beállítása
*/
let currentPlayer = 'X';
let grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

/**
 * Hozzáadja az aktuális jelet (X vagy O) a grid tömbhöz
 * Hozzáadja a cella tartalmához az aktuális jelet
 * Módosítja az aktuális jelet
 * Kiírja a konzolba, hogy melyik cellára lett kattintva.
*/
function cellClick(row, col) {
    return function () {
        if (grid[row][col] === '') {
            grid[row][col] = currentPlayer;
            document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
        console.log(`Clicked on cell (${row}, ${col})`);
    };
}

/**
 * Beállítja a grid tömb tartalmát üres sztingekre és
 * meghívja updateGrid() függvényt
*/
function resetGrid() {
    grid = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    updateGrid();
}

/**
 * A cellák tartamát üresre állítja
*/
function updateGrid() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

/**
 * Megváltoztatja a háttér színér a getRandomColor által adott színnel
*/
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

/**
 * Generál egy véletlen színt
*/
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Létrehozza cellákat
*/
let content = ``
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        content += `<div class="cell" id="cell-${i}-${j}"></div>`
    }
}
document.getElementById("grid").innerHTML = content

/**
 * Hozzáadja az event listenert a cellákhoz
*/
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let cellElement = document.getElementById(`cell-${i}-${j}`);
        cellElement.addEventListener('click', cellClick(i, j));
    }
}

/**
 * A gombhoz adott három event listener
 * 1. törli a cellák tartalmát
 * 2. kiírja a konzolna a törlést
 * 3. megváltoztatja a háttérszínt
*/
document.getElementById('button').addEventListener('click', resetGrid);
document.getElementById('button').addEventListener('click', () => {
    console.log('Grid reset');
});
document.getElementById('button').addEventListener('click', changeBackgroundColor);
