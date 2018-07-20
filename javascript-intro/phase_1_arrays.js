Array.prototype.myUniq = function () {
  let uniqArr = [];
  
  this.forEach(el => {
    if (!uniqArr.includes(el)){
      uniqArr.push(el);
    }
  });
  
  return uniqArr;
};

Array.prototype.two_sum = function () {
  let indexArr = [];
  for (let i = 0; i < this.length - 1; ++i) {
    for (let j = i + 1; j < this.length; ++j) {
      if (this[i] + this[j] === 0){
        indexArr.push([i, j]);
      }
    }
  }
  return indexArr;
};

Array.prototype.transpose = function  ()  {
  const tArr = [];
  for (let rows = 0; rows < this[0].length; ++rows){
    tArr.push(new Array(this.length));
  }
  for (let i = 0; i < this.length; ++i) {
    for (let j = 0; j < this.length; ++j) {
      tArr[j][i] = this[i][j];
    }
  }
  return tArr;
};

