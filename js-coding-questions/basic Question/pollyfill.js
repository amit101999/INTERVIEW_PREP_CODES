// write a polyfill for the promise.all method

const myPromiseAll = (promise) => {
  return new Promise((resolve, reject) => {
    const res = [];
    let completed = 0;

    if (promise.length === 0) {
      return resolve([]);
    }

    promise.forEach((p, i) => {
      Promise.resolve(p)
        .then((data) => {
          res[i] = data;
          completed++;
          if (completed === promise.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("C"), 1000));

myPromiseAll([p1, p2, p3]).then((res) => console.log(res));
