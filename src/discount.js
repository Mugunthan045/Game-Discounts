import "./style.css";
const { deals, getStores } = require("./api");

const storeTitle = document.querySelector(".store_title");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const storeid = urlParams.get("storeid");

const loader = document.querySelector(".loader");
const titleRow = document.querySelector(".zero-row");

const homeIco = document.querySelector(".fa-home");

async function currentDeals() {
  titleRow.style.display = "none";
  loader.style.display = "block";
  await deals(storeid).then((data) => {
    for (let i = 0; i < data.length; i++) {
      const storeID_1 = document.createElement("div");
      storeID_1.classList.add("game");

      storeID_1.innerHTML = `
                <div class="details">
                <figure>
                    <img id="gameico" src=${data[i].thumb}>
                </figure>
                <div class="details2" onclick=window.open('https://www.cheapshark.com/redirect?dealID={${data[i].dealID}}')>
                <span class="title">${data[i].title}</span>&nbsp;
                <span class="saleprice"><del>$${data[i].normalPrice}</del>&nbsp;&nbsp;&nbsp;$${data[i].salePrice}</span>
                </div>
                </div>
                `;
      getStoreTitle();
      document.querySelector(".store-container").appendChild(storeID_1);
    }
    loader.style.display = "none";
    titleRow.style.display = "flex";
  });
}

async function getStoreTitle() {
  await getStores().then((data) => {
    for (let i = 0; i < 14; i++) {
      if (data[i].storeID == storeid) {
        storeTitle.innerHTML = ` 
      <span>${(data[i].storeName).toUpperCase()}</span>
      `;
      }
    }
  });
}

homeIco.addEventListener("click", ()=>{window.location="/index.html"})

currentDeals();

