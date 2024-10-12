const {add,names,person} = require('../main.js')

test('Checking app', ()=>{
expect(add(3,3)).toBe(6)
})

test('Name list array', ()=>{
    expect(names).toEqual(['vinoth','Johns'])
})

test('Check object',()=>{
    expect(person).toEqual({name:'vinoth',age:28})
})