const APIURL = "https://www.cheapshark.com/api/1.0/";

async function deals(store_id) {
  const storeId = store_id; /* Remove hardcode later*/
  const upperPrice = 15; /* Remove hardcode later*/
  const dealsurl = `deals?storeID=${storeId}&upperPrice=${upperPrice}`;

  const response = await fetch(APIURL + dealsurl);
  const data = await response.json();
  return data;
}

async function getStores() {
  const stores = `stores`;

  const response = await fetch(APIURL + stores);
  const data = await response.json();
  return data;
}

async function getSearchResult(searchKeyword) {
  const games = "games?title=";
  const limit = "&limit=40"
  const response = await fetch(APIURL + games + searchKeyword + limit);
  const result = await response.json();
  return result;
}

async function getStoreIDForSearch(dealID){
  const dealParam = "deals?id=";
  const respone = await fetch(APIURL + dealParam+dealID)
  const data = await respone.json()
  return data;
}


export { deals, getStores, getSearchResult, getStoreIDForSearch };
