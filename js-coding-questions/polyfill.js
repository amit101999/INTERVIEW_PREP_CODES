// polyfill for map

const arr = [1, 2, 3, 4, 5];
const myfun = (x) => console.log(x * 2);

// arr.map(myfun)  now think we have implement this map as myMap

Array.prototype.myMap = function (callback) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

arr.myMap(myfun);


