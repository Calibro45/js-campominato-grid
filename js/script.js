/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 */ 

const selectMenu = document.getElementById('difficulty');
console.log(selectMenu);

for (let i = 0; i < selectMenu.length; i++) {

    const difficulty = selectMenu[i];
    console.log(difficulty);
}

const playBtn = document.getElementById('play-cta');
console.log(playBtn);
