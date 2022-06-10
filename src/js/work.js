import { workInfo } from "./data";

function showWork(winfos) {
  if (!Array.isArray(winfos) || winfos.length == 0) return false;
  let result = "";
  for (let i = 0; i < products.length; i++) {
    const winfo = winfos[i];
    result += `
    <div class="grid lg:grid-cols-3 grid-col-1 gap-3">
    <div>
      <a href="#">
        <img src="" alt="" />
      </a>
    </div>
    <div class="col-span-2">
      <h3 class="text-[30px] leading-[60px] font-bold">
        ${winfo.name}
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
