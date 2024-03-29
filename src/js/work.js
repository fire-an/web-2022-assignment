import { workInfo } from "./data";

const menu = document.getElementById("menu");
const button = document.getElementById("toggle-button");

button.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

function showWork(winfos) {
  if (!Array.isArray(winfos) || winfos.length == 0) return false;
  let result = "";
  for (let i = 0; i < winfos.length; i++) {
    const winfo = winfos[i];
    result += `
    <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-0">
    <div>
      <a href="detail.html?id=${winfo.id}">
        <img src="${winfo.image}" alt="" />
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
  <hr class="my-5" />
        `;
  }

  return result;
}
document.getElementById("winfo").innerHTML = showWork(workInfo);
