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
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
  <div class="col-span-2 order-2 lg:order-1">
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
  <div class="order-1 lg:order-2 mx-auto text-center w-1/2 lg:w-full">
    <img
      class="rounded-full"
      src="${info.image}"
      alt=""
    />
  </div>
</div>
          
    `;
  return result;
}
document.getElementById("info").innerHTML = showInfo(pinfo);

import { workInfo } from "./data";

function showWorks(winfos) {
  if (!Array.isArray(winfos) || winfos.length == 0) return false;
  let result = "";
  for (let i = 0; i < winfos.length; i++) {
    const winfo = winfos[i];
    result += `
    <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-1">
    <div>
      <a href="#detail.html?id=${winfo.id}">
        <img class="w-full block" src="${winfo.image}" alt="" />
      </a>
    </div>
    <div class="col-span-2">
      <h3 class="text-[30px] leading-[60px] font-bold">
      <a href="detail.html?id=${winfo.id}">${winfo.name}</a>
      </h3>
      <div class="mb-4">
        <span class="p-1 bg-[#142850] text-white rounded-lg mr-3"
          >2020</span
        >
        <span class="text-[20px] text-[#8695A4]">${winfo.shortDescription}</span>
      </div>
  
      <p>
        ${winfo.description}
      </p>
    </div>
  </div>
  <hr class="my-8 " />
        `;
  }

  return result;
}
document.getElementById("winfo").innerHTML = showWorks(workInfo);
