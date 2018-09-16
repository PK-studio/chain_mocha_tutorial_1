const myApp = {
  summary: (...args)=>{
    const reducer = (nextNum, currentValue) => {return nextNum + currentValue};
    let sum =  args.reduce(reducer);
    return sum;
  }
};

module.exports = myApp;