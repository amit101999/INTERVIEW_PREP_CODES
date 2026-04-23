// reverse in 2 ways
// const str = "hello world";
// let reversedStr = "";
// for (let i = 0; i < str.length; i++) {
//   reversedStr = str[i] + reversedStr;
// }

// console.log(reversedStr);
// console.log(str.split("").reverse().join(""));

// const debounce = (fn, delay) => {
//   let timer = null;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this);
//       // here we are binding this to the function so that it can access the correct context when it is called after the delay
//     }, delay);
//   };
// };

// const printdata = () => {
//   console.log("hello world");
// };

// const handleSearch = debounce(printdata, 2000);
// handleSearch();
// handleSearch();
// handleSearch();
// handleSearch();
// handleSearch();
// handleSearch();

// const throttle = (fn, delay) => {
//   let timer = null;
//   return () => {
//     let curr = new Date().getTime();
//     if (timer - curr > delay) {
//       timer = curr;
//       fn.apply(this);
//     }
//   };
// };

//
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}



