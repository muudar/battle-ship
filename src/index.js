import askForShipPlacement from "./modules/gameLoop"
import Board from "./modules/board";
import Ship from "./modules/ship"
import css from "./style.css"
import { loadGrids , showModule, promptShip } from "./modules/domStuff";
import ComputerPlayer from "./modules/computer"

let myBoard = Board();
let mode = 'v';
loadGrids(myBoard);
promptShip(myBoard,0, mode);

let computerBoard = Board();
let computer = ComputerPlayer();
computer.placeShipsRandomly(computerBoard);

