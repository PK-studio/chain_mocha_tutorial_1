const myApp = {
  summary: (...args)=>{
    const reducer = (nextNum, currentValue) => {return nextNum + currentValue};
    let sum =  args.reduce(reducer);
    return sum;
  },
  arrayOfNum: [0,0],
  addNumToArray: (num)=>{
    return new Promise((resolve, reject) => {
      myApp.arrayOfNum.push(num)
      resolve();
    });
  },
  arrayValue: () => {
    return myApp.arrayOfNum.reduce((num, currenVal) => {return num+currenVal})
  }
};

module.exports = myApp;