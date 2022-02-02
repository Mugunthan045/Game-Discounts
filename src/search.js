import "./style.css";
const { getSearchResult, getStoreIDForSearch } = require("./api");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sKeyword = urlParams.get("keyword");

const closebtn = document.querySelector(".closebtn");
const nav = document.querySelector(".nav");

function searchDeals() {
  getSearchResult(sKeyword).then((data) => {
    for (let i = 0; i < data.length; i++) {
      const storeID_1 = document.createElement("div");
      storeID_1.classList.add("game");

      storeID_1.innerHTML = `
                <div class="details">
                <figure>
                    <img id="gameico" src=${data[i].thumb}>
                </figure>
                <div class="details2" onclick=window.open('https://www.cheapshark.com/redirect?dealID={${data[i].cheapestDealID}}')>
                <span class="title">${data[i].external}</span>&nbsp;
                <span class="saleprice">$${data[i].cheapest}</span>
                </div>
                </div>
                `;
      document.querySelector(".store-container").appendChild(storeID_1);
    }
  });
}

closebtn.addEventListener("click", closeNav);
nav.addEventListener("click", openNav);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

searchDeals();
getSearchResult();
