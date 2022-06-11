import { posts } from "./data";

const menu = document.getElementById("menu");
const button = document.getElementById("toggle-button");

button.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

function showPosts(posts) {
  if (!Array.isArray(posts) || posts.length == 0) return false;
  let result = "";
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    result += `
    <div>
    <h3 class="text-[30px] text-[#21243D] font-medium">
      ${post.title}
    </h3>
    <div class="my-3">
      <span class="text-[#21243D] text-[20px]">${post.date}</span
      ><span class="mx-3">|</span
      ><span class="text-[#8695A4] text-[20px]">${post.shortDescription}</span>
    </div>
    <p>
      ${post.description}
    </p>
  </div>
  <hr class="my-8" />
          `;
  }

  return result;
}
document.getElementById("posts").innerHTML = showPosts(posts);
