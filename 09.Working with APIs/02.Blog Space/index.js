const blogList = document.getElementById("blog-list");
const submitBtn = document.querySelector("button");

const url = "https://apis.scrimba.com/jsonplaceholder/posts";

fetch(url, { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    let top5Posts = data.slice(0, 5);
    let arr = [];

    top5Posts.forEach((data) => {
      let newDiv = renderPosts(data.title, data.body);
      arr.push(newDiv);
    });

    blogList.append(...arr);
  });

document.getElementById("new-post").addEventListener("submit", function (e) {
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");

  // Preventing for reloading the form
  e.preventDefault();

  const data = {
    title: postTitle.value,
    body: postBody.value,
  };
  // Post request
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  fetch(url, options)
    .then((resposne) => resposne.json())
    .then((post) => {
      console.log(post);
      // Adding to DOM
      // Adding to DOM
      // Adding to DOM
      let newDiv = renderPosts(post.title, post.body);
      blogList.prepend(newDiv);
    });

  // Removing the current values
  postTitle.value = "";
  postBody.value = "";
});

// renderPosts function
function renderPosts(currTitle, currBody) {
  const title = document.createElement("h3");
  const p = document.createElement("p");
  const div = document.createElement("div");

  title.textContent = currTitle;
  p.textContent =
    currBody.substring(0, 1).toUpperCase() + currBody.substring(1);

  div.append(title, p);

  return div;
}
