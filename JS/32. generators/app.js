
let num = 5

// console.log(Math.pow(5,2))
num **=2;

console.log(num);




function* aGen(){
    console.log('start')
    yield 5;
    console.log('remain')
    yield 15;

}


let result = aGen();



console.log(result.next().value)
console.log(result.next().value)






function* countTo(max) {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

const counter = countTo(3);
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next()); 
console.log(counter.next());  



function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const nums = infiniteNumbers();
console.log(nums.next().value); 
console.log(nums.next().value); 
// console.log(nums.next().value); 
// console.log(nums.next().value); 

let fetchUserData = async()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return data?.json()
}
let fetchUserPosts = async()=>{
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return data?.json()
}

function* asyncTasks() {
  const user = yield fetchUserData();  // return user on 1st call
  const posts = yield fetchUserPosts();// return posts on 2nd call
}

const taskRunner = asyncTasks();
taskRunner?.next()?.value?.then(users =>{ // get users data
    taskRunner?.next()?.value?.then(post=>{// get posts data after users
        console.log(post)
        post.map(post=>{  // rendering all posts
            document.getElementsByTagName('body')[0].innerHTML +=
            `<div>
            <h1>title:${post?.title}</h1>
            <h3>id:${post?.id}</h3>
            </div>
            <hr>
            `
        })
    })
    
}).catch(err=>{
    console.error(err)
})


document.querySelector('.p1')
document.querySelector('#id')
document.querySelectorAll('h2')
document.querySelectorAll('.p1')





// const fetchData = async (url) => {
//   const response = await fetch(url);
//   return response.json();
// };

// function* dataFetcher() {
//   yield fetchData('https://jsonplaceholder.typicode.com/posts/1');
//   yield fetchData('https://jsonplaceholder.typicode.com/users/1');
// }

// const runAsyncGenerator = async (genFunc) => {
//   const generator = genFunc();

//   for (let promise of generator) {
//     try {
//       const result = await promise;
//       console.log(result);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
// };

// runAsyncGenerator(dataFetcher);




