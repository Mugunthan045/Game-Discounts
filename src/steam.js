import "./style.css";
const { deals, getStores } = require("./api");


const closebtn = document.querySelector('.closebtn');
const nav = document.querySelector('.nav');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const storeid = urlParams.get("storeid");

const loader = document.querySelector(".loader");
const titleRow = document.querySelector(".zero-row")
async function currentDeals() {
  titleRow.style.display='none';
  loader.style.display= 'block';
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
      document.querySelector(".store-container").appendChild(storeID_1);
    }
    loader.style.display= 'none';
    titleRow.style.display='flex';
  });
}

closebtn.addEventListener("click",closeNav);
nav.addEventListener("click",openNav);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

currentDeals();
