const submit = document.querySelector(".comment-submit");
const commentList = document.querySelector(".comments");
const commentAuthor = document.querySelector(".comment-author");
const commentInput = document.querySelector(".comment-input");
const commentHeading = document.querySelector(".comments-container-title");
const commentArray = [];
// Check for saved wishlist items
// const stored = JSON.parse(localStorage.getItem('commentList')).reverse();

// If there are any saved items, update our list
// if (stored){
//     stored.forEach((item)=>{
//         commentList.innerHTML +=  `
//         <div class="comment flex items-start justify-start">
//         <img class="comment-avatar" src="${item.avatar}" alt="${item.author}">
//             <div class="flex-1">
//                 <h3 class="comment-author">${item.author}</h3>
//                 <div class="comment-body">${item.comment}</div>
//             </div>
//         </div>`;
//     });
// }

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
  commentInput.value = "";
  commentArray.push(data);
  localStorage.setItem("commentList", JSON.stringify(commentArray));
  //   const commentBody = commentList.querySelectorAll(".comment");
  //   commentBody.forEach((comment) => {
  //     comment.addEventListener("dblclick", deleteComment);
  //   });
  //console.log(commentArray);
};

const deleteComment = (event) => {
  //   const comment = event;
  //   console.log(comment);
  //console.log(commentArray);
};

submit.addEventListener("click", appendComment, false);
// submit.addEventListener("dblclick", function () {
//   localStorage.clear();
//   commentList.innerHTML = stored;
// });

const commentBody = document.querySelectorAll(".comment");
commentBody.forEach(function (comment) {
  comment.addEventListener("mouseover", function () {
    console.log("hello");
    //commentList.remove(comment);
  });
});
