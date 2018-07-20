Array.prototype.bubbleSort = function() {
  const sortedArr = this.slice();
  let unsorted = true; 
  while  (unsorted) {
    unsorted = false; 
    for ( let i = 0; i < sortedArr.length - 1 ; ++i ) {
      const a = sortedArr[i];
      const b = sortedArr[i+1];
      if (a > b) {
        sortedArr[i] = b;
        sortedArr[i+1] =a;
        unsorted = true;
      }
    }
  } 
  return sortedArr;
};

String.prototype.substrings = function () {
  const resultArr = [];
  const chars = this.split('');
  for (i = 0; i < chars.length; ++i) {
    for (j = i+1; j <= chars.length; ++j) {
      resultArr.push(chars.slice(i,j).join(""));
    }
  }
  return resultArr;
}; 