const Field = require('./field');
const Board = require('./board');
const Ship = require('./ship');

const askForShipPlacement = (board, ship, random = false) =>{
    if(random){

    }
    let placed = false;
    let err = false;
    while(!placed){
        if(err)
            alert("Error! Try again: ");
        alert(`Place ${ship.name} of length ${ship.getLength()}`);
        let row = parseInt(prompt("Enter row: "));
        let column = parseInt(prompt("Enter column: "));
        let mode = prompt("Enter mode (v) or (h)");
        let r = board.addShip(row, column, mode, ship);
        placed = r.status == 'success';
        err = true;
    } 
}

module.exports = askForShipPlacement;