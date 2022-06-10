import { workInfo } from "./data";

const id = new URLSearchParams(window.location.search).get("id");

function showWork(works) {
  if (!Array.isArray(works) || works.length == 0) return false;
  let result = "";
  const work = works.find((item) => item.id == id);
  result = `
  <div class="grid lg:grid-cols-3 grid-col-1 gap-8">
  <div>
    <a href="#">
      <img src="${work.image}" alt="" />
    </a>
  </div>
  <div class="col-span-2">
    <h3 class="text-[30px] leading-[60px] font-bold">
    <a href="#">${work.name}</a>
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
