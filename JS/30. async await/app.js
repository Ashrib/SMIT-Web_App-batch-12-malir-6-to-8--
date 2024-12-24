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
  }
};
userFetch();





























function* countTo(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

const counter = countTo(3);
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().done);  // true



function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const nums = infiniteNumbers();
console.log(nums.next().value); // 0
console.log(nums.next().value); // 1
console.log(nums.next().value); // 2





function* asyncTasks() {
  const user = yield fetchUserData();
  const posts = yield fetchUserPosts(user.id);
  return posts;
}

const taskRunner = asyncTasks();

taskRunner.next().value.then(user => {
  taskRunner.next(user).value.then(posts => {
    console.log(posts);
  });
});








const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

function* dataFetcher() {
  yield fetchData('https://jsonplaceholder.typicode.com/posts/1');
  yield fetchData('https://jsonplaceholder.typicode.com/users/1');
}

const runAsyncGenerator = async (genFunc) => {
  const generator = genFunc();

  for (let promise of generator) {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

runAsyncGenerator(dataFetcher);

