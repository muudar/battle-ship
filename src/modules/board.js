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
        if(mode == 'v'){
            if(row + shipLength - 1 > 9)
                return{
                    status : "fail",
                    msg : "Out of Bounds"
                }
            for(let i = row; i < 10; i++){
                if(fields[i][column].containsShip()){
                    return{
                        status: "fail",
                        msg: "Ship exists"
                    }
                }
            }
            for(let i = row; i < 10; i++){
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
            for(let i = column; i < 10; i++){
                if(fields[row][i].containsShip()){
                    return{
                        status: "fail",
                        msg: "Ship exists"
                    }
                }
            }
            for(let i = column; i < 10; i++){
                fields[row][i].makeFilled(ship);
            }
            return{
                status: "success"
            }
        }
    }
    return {addShip}
}



module.exports = Board;