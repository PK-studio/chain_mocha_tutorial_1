const expect = require('chai').expect;
const myApp = require("../index");

describe("Init all", () => {
  it("should load module app.js", () => {
    expect(myApp).to.be.ok;
  })
})

describe("Test function in myApp", () => {
  const addNum = myApp.addNum;
  it("expect addNum(2,2) to return 4", () => {
    expect(addNum(2,2).to.equle(4));
  })
})