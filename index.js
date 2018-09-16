const myApp = {
  addNum: (...args)=>{
    const reducer = (nextNum, currentValue)=> nextNum+currentValue;
    let sum =  args.reduce(reducer);
    return sum;
  }
};

module.exports = myApp;