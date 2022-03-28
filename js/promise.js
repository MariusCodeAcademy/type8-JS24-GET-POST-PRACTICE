function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2sec');
      resolve();
    }, 2000);
  });
}
function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('3sec');
      resolve();
    }, 3000);
  });
}
function fn3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('4sec');
      resolve();
    }, 4000);
  });
}

// fn1()
//   .then(() => fn2())
//   .then(() => fn3())
//   .then(() => console.log('after all'));
// fn2();
// fn3();

// console.log('after all');

// Promise.all([fn1(), fn2(), fn3()]).then(() => console.log('after all'));

const init = async () => {
  const res1 = fn1();
  const res2 = fn2();
  const res3 = fn3();

  await res1;
  await res2;
  await res3;

  console.log('after all');
};
init();
