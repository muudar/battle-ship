const Field = (row, column) => {
    if(row == undefined || column == undefined)
        throw new Error("2 parameters must be passed");
    if(row > 9 || row < 0 || column > 9 || column < 0)
        throw new Error("Input between 0 and 9");
    if(!Number.isInteger(row) || !Number.isInteger(column))
        throw new Error("Non Intger Input");
    let hit = false;
    let ship = null; 

    const hitField = () => hit = true;

    const isHit = () => hit;

    const containsShip = () => {
        if(ship)
            return true;
        return false;
    }

    const makeFilled = (s) => {
        if(containsShip()) 
            throw new Error ("Ship already here!")
        ship = s;
    };

    return {
        hitField, isHit, containsShip, makeFilled,
    }
}

module.exports = Field;