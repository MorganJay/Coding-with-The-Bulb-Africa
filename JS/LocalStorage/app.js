const submit = document.querySelector(".comment-submit");
const commentList = document.querySelector(".comments");
const commentAuthor = document.querySelector(".comment-author");
const commentInput = document.querySelector(".comment-input");
const commentHeading = document.querySelector(".comments-container-title");
let commentCount = 0;

const template = (data) => {
  commentList.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="comment flex items-start justify-start">
    <img class="comment-avatar" src="${data.avatar}" alt="${data.author}">
        <div class="flex-1">
            <h3 class="comment-author">${data.author}</h3>
            <div class="comment-body">${data.comment}</div>
        </div>
    </div>
    `
  );
};

const appendComment = (event) => {
  event.preventDefault();

  //define dynamic data to add
  const data = {
    avatar: "demo/MYPICTUREsmall.jpeg",
    author: commentAuthor.textContent,
    comment: commentInput.value,
  };

  if (data.comment.length < 1) return;
  template(data);
  localStorage.setItem(commentCount, commentList.children[commentCount].outerHTML);
  commentInput.value = "";
  commentCount++;
  console.log(commentCount);
  const commentBody = commentList.querySelectorAll(".comment");
  commentBody.forEach((comment) => {
    comment.addEventListener("dblclick", deleteComment);
  });
  // give each comment a key
};

// const storeComment = () =>{
//     localStorage.setItem(data.index, commentList.innerHTML);
// };

// Check for saved wishlist items
const saved = Object.values(localStorage);
// If there are any saved items, update our list
if (saved) {
  commentList.innerHTML = saved.toString();
}

const deleteComment = (event) => {
  const comment = event.target.parentElement.parentElement;
  localStorage.removeItem(commentCount, comment);
  commentList.innerHTML = "";
};

submit.addEventListener("click", appendComment, false);
submit.addEventListener("dblclick", function () {
  localStorage.clear();
  console.log(saved);
  commentList.innerHTML = saved;
  commentCount = 0;
});

const commentBody = document.querySelectorAll(".comment");
commentBody.forEach((comment) => {
  comment.addEventListener("dblclick", deleteComment, false);
});
