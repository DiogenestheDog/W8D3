Array.prototype.uniq = function () {
  let results = [];
  let ctx = this;
  this.forEach(function (el) {
    if (!results.includes(el)) {
      results.push(el); 
    }
  }, ctx);
  return results;
}; 

// Array.prototype.twoSum = function () {
//   let results = [];
//   let that = this;
//   that.slice(0, that.length - 2).forEach(function (el, i) {
//     that.slice(i + 1).forEach(function(el2, j) {
//       if (that[i] + that[j] === 0) {
//         results.push([i, j]);
//       }
//     });

//   });
//   return results;
// };

Array.prototype.twoSum = function () {
  let results = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) { 
      if (this[i] + this[j] === 0) {
        results.push([i,j])
      }
    }
  }
  return results;
}

Array.prototype.transpose = function() {
  let transposed = Array.from({length: this[0].length}, () => Array.from({length: this.length}));
  let arr = this;
  arr.forEach( (el, row)=> {
    el.forEach( (el2, col)=> {
      transposed[col][row] = arr[row][col];
    });
  });
  return transposed;
}