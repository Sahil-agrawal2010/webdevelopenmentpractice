let bagItemObjects;
window.addEventListener("load", (event) => {
  loadBagItemObjects();
  showDataInfo();
});

function loadBagItemObjects() {
  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < allItems.length; i++) {
      if (itemId === allItems[i].id) {
        return allItems[i];
      }
    }
  });
}

function showDataInfo() {
  let itemsContainer = document.querySelector(".main_item_product_container");
  let innerCode = "";
  bagItemObjects.forEach((bagItem) => {
    innerCode += generateItemCode(bagItem);
  });
  itemsContainer.innerHTML = innerCode;
}

function generateItemCode(item) {
  return `<div class="item_contaoiner">
<img class="image_1" src="${item.image}" alt="" height="150px">
                <p class="product_name">${item.company_name}</p>
                <p class="product_company">${item.item_name}</p>
                <div class="price_product_one">
                  <p class="first_price">Rs ${item.price.current_price}</p>
                  <del class="second_price">Rs ${item.price.original_price}</del>
                  <p class="discount">(${item.price.discount}% OFF)</p>
                </div>
                <p class="return_plocy">14 days return available</p>
                <div class="deliver">
                <p>Deliver by</p><p class="date">10 Oct 2023</p>
                </div>
                <a href="#" class="remove_item">X</a>
 </div>`;
}
