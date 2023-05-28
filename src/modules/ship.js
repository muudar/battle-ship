const Ship = (N, name) => {
    name = name
    if(!Number.isInteger(N)){
        throw new Error("N must be an integer")
    }
    if(N < 1){
        throw new Error("Integer must be 0 or above");
    }
    let timesHit = 0;

    const hit = () => {
        if(isSunk())
            throw new Error("Already sunk");
        timesHit++;
    }

    const isSunk = () => N <= timesHit;
    return{
        isSunk, hit
    }
}

let ship = Ship(1)
ship.hit()


module.exports = Ship;