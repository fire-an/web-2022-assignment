import { workInfo } from "./data";

const menu = document.getElementById("menu");
const button = document.getElementById("toggle-button");

button.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

const id = new URLSearchParams(window.location.search).get("id");

function showWork(works) {
  if (!Array.isArray(works) || works.length == 0) return false;
  let result = "";
  const work = works.find((item) => item.id == id);
  result = `
  <div class="">
  <div class="">
    
      <img class="mx-auto mb-5" src="${work.image}" alt="" />
    
  </div>
  <div class="col-span-2">
    <h3 class="text-[30px] leading-[60px] font-bold">
    ${work.name}
    </h3>
    <div class="mb-4">
      <span class="p-1 bg-[#142850] text-white rounded-lg mr-3"
        >2020</span
      >
      <span class="text-[20px] text-[#8695A4]">${work.shortDescription}</span>
    </div>

    <p>
      ${work.description}
    </p>
  </div>
</div>

  `;
  return result;
}

document.getElementById("detail").innerHTML = showWork(workInfo);
