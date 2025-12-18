let bagItemObjects;
let DELIVERY_FEES=140
window.addEventListener("load", (event) => {
  loadBagItemObjects();
  showDataInfo();
  showTotalPrice();
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
                <a href="#" class="remove_item" onclick='removeFromBag(${item.id})'>X</a>
 </div>`;
}


function removeFromBag(itemId){
  bagItems=bagItems.filter(bagId=> bagId!=itemId)
  localStorage.setItem('bagItems',JSON.stringify(bagItems))
  loadBagItemObjects()
  showDataInfo()
  displayBagCount()
}


function showTotalPrice(){
  let bag_summary=document.querySelector('.aside_div')
  let ToalItems=bagItems.length
  let TotalDiscount=0
  let finalPrice=0
  bagItemObjects.forEach(bagItem=>{
    console.log(bagItemObjects)
    TotalDiscount+=bagItem.price.original_price-bagItem.pricecurrent_price
    finalPrice+=(bagItem.price.original_price-TotalDiscount)+140
    DELIVERY_FEES=bagItems.length==0?0:140

    bag_summary.innerHTML=`
            <p class="main_heading_details">PRICE DETAILS (${ToalItems} Items)</p>
        <div class="total_price">
          <p class="total_money">Total MRP</p>
          <p class="total_amount">Rs ${bagItem.price.current_price}</p>
        </div>
        <div class="discount_price">
          <p class="discount_price_text">Discount on MRP</p>
          <p class="discount_amount">- Rs ${bagItem.TotalDiscount}</p>
        </div>
        <div class="deliver_details">
          <p class="deliver_fee">Delivery Fee</p>
          <p class="delivery_amount">Rs ${DELIVERY_FEES}</p>
        </div>
        <hr class="small_line" />
        <div class="total">
          <p class="total_text">Total Amount</p>
          <p class="total_number">Rs ${finalPrice}</p>
        </div>
        <button class="final_click">PLACE ORDER</button>
    `
  })
}
