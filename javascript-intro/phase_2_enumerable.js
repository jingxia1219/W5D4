Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; ++i){
    callback(this[i], i);
  }
};

Array.prototype.myMap = function (callback) {
  const result = [];
    this.myEach ((el, index) => {
      result.push(callback(el, index));
    });
  return result;
};


Array.prototype.myReduce = function (acc, callback) {
  let index = 0;
  if ( acc == null) {
    acc = this[0];
    index = 1; 
  }
   else {
      index = 0;
   }
   this.slice(index).myEach (function (el) {
     acc = callback(acc, el);
   }
 );
   return acc;
};