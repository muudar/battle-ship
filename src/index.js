import askForShipPlacement from "./modules/gameLoop"
import Board from "./modules/board";
import Ship from "./modules/ship"
import css from "./style.css"
import { loadGrids , showModule, promptShip } from "./modules/domStuff";

let board = Board();
let carrier = Ship(5,"Carrier", "green");
// let battleship = Ship(4, "Battleship");
// let cruiser = Ship(3, "Cruiser");
// let submarine = Ship(3, "Submarine");
// let destroyer = Ship(2, "destoryer");
// let ships = [carrier,battleship,cruiser,submarine,destroyer];
// for(let ship of ships){
//     askForShipPlacement(board,ship);
// }
let mode = 'v';
loadGrids(board);
promptShip(board,carrier, mode);
