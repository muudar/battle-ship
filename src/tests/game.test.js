const Field = require('../modules/field');
const Board = require('../modules/board');
const Ship = require('../modules/ship');


let board = Board();
let carrier = Ship(5,"Carrier");
let battleship = Ship(4, "Battleship");
let cruiser = Ship(3, "Cruiser");
let submarine = Ship(3, "Submarine");
let destroyer = Ship(2, "destoryer");

test("Placements work", () =>{
    expect(board.addShip(9,9,'v',carrier)).toEqual({
        status: 'fail',
        msg: 'Out of Bounds'
    });
    expect(board.addShip(5,6,'h', carrier)).toMatchObject({
        status: 'fail'
    })
    expect(board.addShip(5,6,'v', carrier)).toMatchObject({
        status: 'success'
    })
    expect(board.addShip(2,3,'h', battleship)).toMatchObject({
        status: 'success'
    })
    expect(board.addShip(0,6,'v', cruiser)).toMatchObject({
        status: 'fail'
    })
    expect(board.addShip(6,1,'v', cruiser)).toMatchObject({
        status: 'success'
    })
    expect(board.addShip(0,6,'v', destroyer)).toMatchObject({
        status: 'success'
    })
    expect(board.addShip(5,3,'h', submarine)).toMatchObject({
        status: 'success',
    })
})

test("Testing hits", () =>{
    expect(board.hit(0,6)).toMatchObject({
        status : "success"
    })
    expect(destroyer.isSunk()).toBe(false)
    expect(board.hit(0,6)).toMatchObject({
        status : "fail"
    })
    expect(board.hit(1,6)).toMatchObject({
        status : "success"
    })
    expect(destroyer.isSunk()).toBe(true);
    expect(board.hit(0,6)).toMatchObject({
        status : "fail"
    })
    expect(() => board.hit(12,6)).toThrow();
})