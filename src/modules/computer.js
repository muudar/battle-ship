const Ship = require("./ship")

const ComputerPlayer = () =>{
    let carrier = Ship(5,"Carrier", "green");
    let battleship = Ship(4, "Battleship" , "blue");
    let cruiser = Ship(3, "Cruiser", "yellow");
    let submarine = Ship(3, "Submarine", "pink");
    let destroyer = Ship(2, "destoryer", "brown");
    let ships = [carrier,battleship,cruiser,submarine,destroyer];
    const placeShipsRandomly = (board) => {
        let modes = ['v', 'h'];
        for(let i = 0; i < ships.length; i++){
            let ship = ships[i];
            let r = board.addShip(getRandomInt(10), getRandomInt(10), modes[getRandomInt(2)], ship);
            if(r.status == 'fail'){
                i--;
            }
        }
    }
    return {
        placeShipsRandomly
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

module.exports = ComputerPlayer;