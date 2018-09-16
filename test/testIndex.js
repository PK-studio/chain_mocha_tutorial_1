const expect = require('chai').expect;
const myApp = require("../index");

describe("Init all", () => {
  it("should load module app.js", () => {
    expect(myApp).to.be.ok;
  })
})