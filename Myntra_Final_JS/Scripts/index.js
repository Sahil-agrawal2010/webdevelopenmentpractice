let output_container=document.querySelector('.items-container')
let itemContainer=""
allItems.forEach((item) => {
itemContainer += `
        <div class="product_div_one">
          <div class="product_image1">
            <img
              src="${item.image}"
              alt="EarRings Image"
              height="300px"
            />
          </div>
          <p class="rating_product_one">${item.rating.stars} ⭐ | ${item.rating.totalReviews}</p>
          <p class="name_product_one">${item.company_name}</p>
          <p class="article_product_one">${item.item_name}</p>
          <div class="price_product_div_one">
            <div class="main_price_one">Rs.${item.price.current_price}</div>
            <div class="marked_price_one"><del>Rs ${item.price.original_price}</del></div>
            <div class="discount_percentage_one">(%${item.price.discount} OFF)</div>
          </div>
          <button class="getProduct_one">Add TO Cart</button>
        </div>
`
})
output_container.innerHTML=itemContainer