const Field = require('./field')
const Ship = require('./ship')

const Board = () => {
    let fields = []
    for(let i = 0; i < 10; i++){
        fields.push([])
        for(let j = 0; j < 10; j++){
            let f = Field(i , j);
            fields[i].push(f);
        }
    }
    const addShip = (row, column, mode, ship) =>{
        if(row > 9 || row < 0 || column > 9 || column < 0)
            throw new Error("Invalid row/column input")
        if(mode != 'h' && mode != 'v')
            throw new Error ("Incorrect mode parameter");
        let shipLength = ship.getLength();
        let toCheck = []
        if(mode == 'v'){
            if(row + shipLength - 1 > 9)
                return{
                    status : "fail",
                    msg : "Out of Bounds"
                }
            for(let i = row; i < row + shipLength; i++){
                if(fields[i][column].containsShip()){
                    return{
                        status: "fail",
                        msg: "Ship exists"
                    }
                }
            }
            
            for(let i = row; i < row + shipLength; i++){
                fields[i][column].makeFilled(ship);
            }
            return{
                status: "success"
            }
        }
        if(mode == 'h'){
            if(column + shipLength - 1 > 9)
                return{
                    status : "fail",
                    msg : "Out of Bounds"
                }
            for(let i = column; i < column + shipLength; i++){
                if(fields[row][i].containsShip()){
                    return{
                        status: "fail",
                        msg: "Ship exists"
                    }
                }
            }
            for(let i = column; i < column + shipLength; i++){
                fields[row][i].makeFilled(ship);
            }
            return{
                status: "success"
            }
        }
    }
    const hit = (i,j) => {
        if(!Number.isInteger(i) || !Number.isInteger(j)){
            throw new Error ("Non integer Input");
        }
        if(i < 0 || i > 9 || j < 0 || j > 9){
            throw new Error("Values out of bound (0 to 9)")
        }
        return fields[i][j].hitField();
    }
    return {addShip, hit, fields}
}

module.exports = Board;