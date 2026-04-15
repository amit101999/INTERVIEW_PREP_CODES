// // once , memoize function
// function hello() {
//   console.log("Hello World");
// }

// const helloprint = once(hello);
// const helloprint = memoize(hello);

// helloprint();
// helloprint();
// helloprint();
// helloprint();

// faltten object
const obj = {
  name: "amit",
  address: {
    city: "dehradun",
    state: "uttarakhand",
  },
};

function falttenObj(obj, result = {}, prefix = "") {
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && key !== null) {
      falttenObj(obj[key], result, newKey);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

let answer = falttenObj(obj, {}, "");
console.log(answer);

// group by
const arr = [
  { name: "amit", city: "dehradun" },
  { name: "sumit", city: "dehradun" },
  { name: "rohit", city: "delhi" },
];

const grpFunctions = (arr, key) => {
  return arr.reduce((acc, curr) => {
    const groupkey = curr[key];
    if (!acc[groupkey]) {
      acc[groupkey] = [];
    }
    acc[groupkey].push(curr);
    return acc;
  }, {});
};

console.log(grpFunctions(arr, "city"));

// implement pipe in js - this execute functions in sequence from left to right

const add = (x) => x + 2;
const multiply = (x) => x * 3;

function pipe(...fn) {
  return (value) => {
    return fn.reduce((acc, fn) => fn(acc), value);
  };
}

const result = pipe(add, multiply);

console.log(result(5));

// implement compose in js - this execute functions in sequence from right to left

function compose(...fn) {
  return (value) => {
    return fn.reduceRight((acc, fn) => fn(acc), value);
  };
}

let res = compose(add, multiply);
console.log(res(5));

// implemeent sleep
function sleep(ms) {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved("I am resolved");
    }, ms);
  });
}

async function main() {
  console.log("Hello");
  const res = await sleep(2000);
  console.log(res);
  console.log("World");
}

main();
