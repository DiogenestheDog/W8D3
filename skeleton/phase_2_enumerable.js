Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let results = [];
  this.myEach(function(el) {
    results.push(callback(el));
  });
  return results;
};

// function doubler(n) {
//   return n * n;
// }

// let arr = [1, 2, 3];

// let res = arr.myMap(doubler);

// console.log(res);


Array.prototype.myReduce = function(callback, initialValue = undefined) {
  let arr = this.slice(); 
  let acc = initialValue || arr.shift();
  arr.myEach(function(el) {
    acc = callback(acc, el);
  });
  return acc;
};

let arr1 = [1, 2, 3];

console.log(arr1.myReduce(function (acc, el) {
  return acc + el;
}));

console.log(arr1);

console.log([1, 2, 3].myReduce(function (acc, el) {
  return acc + el;
}, 25));

console.log(arr1);