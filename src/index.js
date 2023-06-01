import askForShipPlacement from "./modules/gameLoop"
import Board from "./modules/board";
import Ship from "./modules/ship"
import css from "./style.css"
import { loadGrids , showModule, promptShip } from "./modules/domStuff";

let board = Board();
let mode = 'v';
loadGrids(board);
promptShip(board,0, mode);
