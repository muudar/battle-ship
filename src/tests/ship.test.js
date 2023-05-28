const Ship = require('../modules/ship')


test("Ship Initiliaztion works", () =>{
    let ship = Ship(5);
    expect(ship.isSunk()).toBe(false);
})

test("Ship sinks after it's hit", () =>{
    let ship = Ship(3);
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(false);
    ship.hit()
    expect(ship.isSunk()).toBe(true);
})

test("Invalid input is handled", () =>{
    expect(() => Ship(-5)).toThrow();
    expect(() => Ship("wow")).toThrow();
})

test("Ship cannot be hit after it's sunk", () =>{
    let ship = Ship(2);
    ship.hit()
    ship.hit()
    expect(() => ship.hit()).toThrow();
})