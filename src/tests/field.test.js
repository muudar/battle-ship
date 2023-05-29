const Field = require('../modules/field');
const Board = require('../modules/board');
const Ship = require('../modules/ship')

test('Field initialization works', () =>{
    let field = Field(1,2);
    expect(field).not.toBe(null)
})

test('Board initialization works', () =>{
    let board = Board();
    expect(board).not.toBe(null);
})

test('Adding Ship to Board Test', () =>{
    let board = Board();
    let ship = Ship(5);
    expect(() => board.addShip(10,10,'v',Ship(2))).toThrow();
    expect(board.addShip(9,9,'v',ship)).toEqual({
        status: "fail",
        msg: "Out of Bounds"
    })
    expect(board.addShip(9,9,'h',ship)).toEqual({
        status: "fail",
        msg: "Out of Bounds"
    })
    expect(board.addShip(4,6,'h',Ship(3))).toEqual({
        status: "success"
    })
    expect(board.addShip(3,6,'h',Ship(3))).toEqual({
        status: "success"
    })
    expect(board.addShip(2,6,'v',Ship(3))).toEqual({
        status: "fail",
        msg: "Ship exists"
    })
    expect(board.addShip(2,8,'h',Ship(3))).toEqual({
        status: "fail",
        msg: "Out of Bounds"
    })
    expect(board.addShip(4,5,'h', Ship(3))).toEqual({
        status : "fail",
        msg: "Ship exists"
    })
})


test('Field Handles wrong input', () =>{
    expect(() => Field(1)).toThrow();
    expect(() => Field("1", "2")).toThrow();
    expect(() => Field(1,5)).not.toThrow();
    expect(() => Field()).toThrow
})

