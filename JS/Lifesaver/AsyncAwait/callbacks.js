const posts = [
  { title: "Post One", body: "This is post one." },
  { title: "Post Two", body: "This is post two." },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) resolve();
      else reject("Error: Something went wrong");
    }, 2000);
  });
}
// setTimeout(() => {
//       posts.push(post);
//       callback();
//     }, 2000);
//   });

//Async / Await
async function init(){
    await createPost({ title: "Post Three", body: "This is post three." });
    getPosts();
}

init();

// createPost({ title: "Post Three", body: "This is post three." })
//   .then(getPosts)
//   .catch((error) => console.log(error));

//Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch("http://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

// Async /Await with fetch
async function fetchUsers(){
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

fetchUsers();

async function showAvatar() {
  // read our JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/MorganJay`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
