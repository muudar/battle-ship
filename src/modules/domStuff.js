const Board = require("./board");
const Field = require("./field");
const Ship = require("./ship")


function loadGrids(b){
    let fields = b.fields;
    const grids = document.querySelectorAll(".grid");
    for(let grid of grids){
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
              let div = document.createElement("div");
              div.dataset.row = i;
              div.dataset.column = j;
              if(grid.classList.contains('ship-grid'))
                fields[i][j].element = div;
              grid.appendChild(div);
            }
        }
    }
}

function colorizeShipGrid(board){
  let fields = board.fields;
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
       if(fields[i][j].getShip()){
         fields[i][j].element.style['background-color'] = fields[i][j].getShip().color;
       }
       else{
        fields[i][j].element.style['background-color'] = "rgb(157, 156, 156)";
       }
    }
  }
}
function showModule(messageText) { 
    var moduleOverlay = document.createElement("div");
    moduleOverlay.className = "module";
    var moduleContent = document.createElement("div");
    moduleContent.className = "module-content";
    var message = document.createElement("p");
    message.className = "module-message";
    message.textContent = messageText;
    var okButton = document.createElement("button");
    okButton.className = "module-button";
    okButton.textContent = "OK";
    okButton.addEventListener("click", function() {
      moduleOverlay.remove();
    });
    moduleContent.appendChild(message);
    moduleContent.appendChild(okButton);
    moduleOverlay.appendChild(moduleContent);
    document.body.appendChild(moduleOverlay);
  }

  function makePlacements(curr, board,ship, mode){
    colorizeShipGrid(board);
    let N = ship.getLength();
    let shipGrid = document.querySelector(".ship-grid");
    let rotateBtn = document.querySelector(".rotate");
    rotateBtn.onclick = (event) => {
      if(mode == 'v')
        mode = 'h'
      else
        mode = 'v'
      makePlacements(curr, board,ship,mode);
    }
    for(let i = 0; i < shipGrid.children.length; i++){
      shipGrid.children[i].onmouseleave = (event)=>{
        colorizeShipGrid(board);
      }
      if(mode == "v"){
        shipGrid.children[i].onmouseover = (event) =>{
          let row = parseInt(event.target.dataset.row);
          let column = parseInt(event.target.dataset.column);
          for(let i = row; i < Math.min(row + N, 10); i++){
            let e = board.fields[i][column].element;
            e.style['background-color'] = ship.color;
          }
        }
      }
      if(mode == "h"){
        shipGrid.children[i].onmouseover = (event) =>{
          let row = parseInt(event.target.dataset.row);
          let column = parseInt(event.target.dataset.column);
          for(let i = column; i < Math.min(column + N, 10); i++){
            let e = board.fields[row][i].element;
            e.style['background-color'] = ship.color;
          }
        }
      }
      shipGrid.children[i].onclick = (event) =>{
        let row = parseInt(event.target.dataset.row);
        let column = parseInt(event.target.dataset.column);
        let r = board.addShip(row, column, mode, ship);
        if(r.status == 'fail'){
          showModule(`Error placing ${ship.name} here!\nReason is: ${r.msg}`);
        }
        else{
          promptShip(board, curr+1, mode);
        }
      }
    }
  }
  function promptShip(board, curr = 0, mode){
    let carrier = Ship(5,"Carrier", "green");
    let battleship = Ship(4, "Battleship" , "blue");
    let cruiser = Ship(3, "Cruiser", "yellow");
    let submarine = Ship(3, "Submarine", "pink");
    let destroyer = Ship(2, "destoryer", "brown");
    let ships = [carrier,battleship,cruiser,submarine,destroyer];
    if(curr >= ships.length){
      return;
    }
    let ship = ships[curr];
    showModule(`Place your ${ship.name}! Length: ${ship.getLength()}`);
    makePlacements(curr,board,ship, mode);
    
  }
export {loadGrids, showModule, promptShip};