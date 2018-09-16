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
    expect(addNum(1,2)).to.equal(3);
  });
  it("expect reduce numbers 1,3,5,100 and return 108", () => {
    expect(addNum(1,3,5,100),to.equal(108));
  })
})