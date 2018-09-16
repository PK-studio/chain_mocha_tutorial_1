const expect = require('./node_modules/chai').expect;
const myApp = require("./app");

describe("Init all", () => {
  it("should load module app.js", () => {
    expect(myApp).to.be.ok;
  })
})