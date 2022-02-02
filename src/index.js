import "./main.css";
import "./img/Steam.png";
import "./img/GamersGate.png";
import "./img/GreenManGaming.png";
import "./img/Direct2Drive.png";
import "./img/GOG.png";
import "./img/Origin.png";
import "./img/Humble Store.png";
import "./img/Uplay.png";
import "./img/bg.jpg";


const { getStores } = require("./api");
const searchKeyword = document.getElementById('search');
const submitBtn = document.getElementById('submit-btn');

const loader = document.querySelector(".loader");


async function getstore() {
  /* getStores().then((data) => console.log(data)); */
 
  loader.style.display= 'block';
  await getStores().then((data) => {
    for (let i = 0; i < 14; i++) {
      if (data[i].isActive == 1) {
        console.log(data[i]);
        var store = document.createElement("div");
        store.className = "store";
        store.innerHTML = `
                <a href="./Steam.html?storeid=${data[i].storeID}">
                <img id="storeicon" src ="./img/${data[i].storeName}.png" />
                </a>
                `;

        document.querySelector(".storelist-container").appendChild(store);
      }
      loader.style.display= 'none';
      
    }
  });
}

searchKeyword.addEventListener("keydown",(e)=>{
  if((e.code)=="Enter"){
    window.location=`./search.html?keyword=${searchKeyword.value}`;
  }
})

submitBtn.addEventListener("click",()=>{
  window.location=`./search.html?keyword=${searchKeyword.value}`;
})

getstore();
