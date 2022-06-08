import { pinfo } from "./data";
console.log(pinfo);

const menu = document.getElementById("menu");
const button = document.getElementById("toggle-button");

button.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

function showInfo(info) {
  if (typeof info == Object) return false;
  let result = "";
  result = `
    <div class="grid lg:grid-cols-3 grid-cols-1">
            <div class="col-span-2">
              <h2 class="text-[32px] lg:text-[44px] font-bold lg:mb-10 mb-5">
                Hi, I am ${info.name}, ${info.job}. I am ${info.age} years old
              </h2>
              <p class="lg:mb-10 mb-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button class="bg-[#FF6464] text-white py-2 px-5 rounded-sm">
                Download Resume
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
    `;
  return result;
}
document.getElementById("info").innerHTML = showInfo(pinfo);
