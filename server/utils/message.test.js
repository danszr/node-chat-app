var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage("Jen Zhang", "Hey");

    expect(res.from).toBe("Jen Zhang");
    expect(res.text).toBe("Hey");
    expect(res.createdAt).toBeA("number");
  });
});
