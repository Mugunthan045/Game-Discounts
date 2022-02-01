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

export { deals, getStores };
