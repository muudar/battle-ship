const loadGrids = () => {
    const grids = document.querySelectorAll(".grid");
    for(let grid of grids){
        for(let i = 0; i < 100; i++){
            let div = document.createElement("div");
            div.dataset.row = i;
            div.dataset.column = j;
            grid.appendChild(div);
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
export {loadGrids, showModule};