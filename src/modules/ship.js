const Ship = (N, name, color = "green") => {
    if(!Number.isInteger(N))
        throw new Error("Non integer input N")
    if(N < 1 || N > 10)
        throw new Error ("N must be between 1 and 10")
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
    const getLength = () => N;
    return{
        isSunk, hit, getLength,name,color
    }
}



module.exports = Ship;