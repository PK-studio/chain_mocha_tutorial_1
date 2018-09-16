const expect = require('chai').expect;
const myApp = require("../index");

describe("Init all", () => {
  it("should load module app.js", () => {
    expect(myApp).to.be.ok;
  })
})

describe("Test function in myApp", () => {
  const summary = myApp.summary;
  it("expect addNum(2,2) to return 4", () => {
    expect(summary(1,2)).to.equal(3);
  });
  it("expect summarize numbers 1,3,4,100 and return 108", () => {
    expect(summary(1,3,4,100)).to.equal(108);
  })
})