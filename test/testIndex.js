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
    const checkArray = myApp.checkArray;
    it("expect checkArray and return 0", () => {
      expect(checkArray()).to.equal(0);
    });
    it("expect add '1' and '10' and '100' to array and return array", () => {
      addNumToArray(1).then( ()=>{
        return addNumToArray(10);
      }).then( () => {
        return addNumToArray(100);
      }); 
      expect(checkArray()).to.equal(111);
    })
  })
})