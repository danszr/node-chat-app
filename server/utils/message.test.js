var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage("Jen Zhang", "Hey");

    expect(res.from).toBe("Jen Zhang");
    expect(res.text).toBe("Hey");
    expect(res.createdAt).toBeA("number");
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "jen zhang";
    var latitude = 45;
    var longitude = 40;
    var res = generateLocationMessage(from, latitude, longitude);

    expect(res.from).toBe(from);
    expect(res.url).toBe(`https://www.google.com/maps?q=45,40`);
    expect(res.createdAt).toBeA("number");
  });
});
