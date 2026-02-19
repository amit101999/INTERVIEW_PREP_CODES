// remove duplicate number
const num = [1, 1, 2, 2, 3, 1, 4];
console.log(num);

let set = [...new Set(num)];

// implement debouncing fucntion
const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const handleSearch = debounce(() => {
  console.log("Searching...");
}, 3000);

handleSearch();
handleSearch();
handleSearch();
handleSearch();
handleSearch();
handleSearch();
handleSearch();
handleSearch();

// implement throttling function
const throttle = (func, delay) => {
  let timer;

  return function (...args) {
    const date = Date.now();
    if (date - timer >= delay) {
      func.apply(this, args);
      timer = date;
    }
  };
};

const handleScroll = throttle(() => {
  console.log("Scrolling...");
}, 3000);

handleScroll();
handleScroll();
handleScroll();
handleScroll();
handleScroll();
//


// implement promise.all

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

const promise2 = new Promise((resolve, reject)) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 3000);
};

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 1000);
});

Promise.all([promise1, promise2, promise3])

