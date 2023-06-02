import askForShipPlacement from "./modules/gameLoop"
import Board from "./modules/board";
import Ship from "./modules/ship"
import css from "./style.css"
import { loadGrids , showModule, promptShip , promptAttack} from "./modules/domStuff";
import ComputerPlayer from "./modules/computer"

let myBoard = Board();
let mode = 'v';
loadGrids(myBoard);
let computerBoard = Board();
let computer = ComputerPlayer();
computer.placeShipsRandomly(computerBoard);
promptShip(myBoard,0, mode, computerBoard);
