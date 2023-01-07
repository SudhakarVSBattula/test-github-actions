const calculator = require('./index');

function testfunction(){
    const result = calculator.add(1,2);
    expect(result).toBe(3);
}
test('add two numbers and verify the result is correct',testfunction);