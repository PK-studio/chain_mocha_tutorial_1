const expect = require('chai').expect;
const myApp = require("../index");

describe("Init all", () => {
  it("should load module app.js", () => {
    expect(myApp).to.be.ok;
  })
})

describe("Test function in myApp", () => {
  describe("summarize method", () => {
    const summary = myApp.summary;
    it("init summary: ", () => {
      expect(summary).to.be.ok;
    })
    it("expect summarize 2,2 and return 4", () => {
      expect(summary(1,2)).to.equal(3);
    });
    it("expect summarize numbers 1,3,4,100 and return 108", () => {
      expect(summary(1,3,4,100)).to.equal(108);
    })
  })

  describe("addNumToArray method: ", () => {
    const addNumToArray = myApp.addNumToArray;
    const arrayValue = myApp.arrayValue;
    it("expect arrayValue to be 0", () => {
      expect(arrayValue()).to.equal(0);
    });
    it("expect add '1' and '10' and '100' to array and arrayValue to be 111", () => {
      addNumToArray(1).then( function(){
        return addNumToArray(10);
      }).then( function (){
        return addNumToArray(100);
      }).then( function (result){
        expect(arrayValue()).to.equal(111);
      })
    })
  })
})