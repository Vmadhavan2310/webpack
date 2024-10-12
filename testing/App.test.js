const {add,names,person} = require('../main.js')

test('Checking app', ()=>{
expect(add(3,3)).toBe(6)
})

test('Name list array', ()=>{
    expect(names).toEqual(['vinoth','John'])
})

test('Check object',()=>{
    expect(person).toEqual({name:'vinoth',age:28})
})

test('null', ()=>{
    expect(null).toBeNull();
    expect(1).not.toBeNull();
    expect(null).toBeFalsy();
    expect(null).not.toBeTruthy();
    expect(null).toBeDefined();
    expect().not.toBeDefined();
})


test('greaterThan', ()=>{
    expect(add(5,2)).toBe(7);
    expect(add(5,2)).toBeGreaterThan(5);
    expect(add(5,5)).toBeGreaterThanOrEqual(10);
    expect(add(5,4)).toBeLessThanOrEqual(9);
    expect(add(5,0.2)).toBeCloseTo(5.2);
})