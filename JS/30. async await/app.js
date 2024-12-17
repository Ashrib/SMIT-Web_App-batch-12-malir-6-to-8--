// let promise = new Promise((reslove, reject)=>{

//   // reslove('done');

//   reject('error');

// });

// console.log(promise)

let aFun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 3000);
  });
};
console.log(aFun());

let inpName = prompt();

let userFetch = async () => {
  try {
    let data = await fetch(`https://api.github.com/users/${inpName}`);
    data = await data?.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    console.error(error);
    console.error(error);
  }
};
userFetch();





