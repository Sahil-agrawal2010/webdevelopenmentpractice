let itemContainer=document.querySelector('.items-container')

let product_Data=[
    {
        image:"/Myntra_Final_JS/images/1.jpg",
        rating:{
            stars:4.5 ,
            totalReviews:1400
        },
        company_name:"Carlton London",
        item_name:"Rhodium-Plated CZ Floral Studs",
        price:{
            current_price:606,
            original_price:1045,
            discount:42
        }

    }
]

itemContainer.innerHTML=`
        <div class="product_div_one">
          <div class="product_image1">
            <img
              src="${product_Data[0].image}"
              alt="EarRings Image"
              height="300px"
            />
          </div>
          <p class="rating_product_one">${product_Data[0].rating.stars} ⭐ | ${product_Data[0].rating.totalReviews}</p>
          <p class="name_product_one">${product_Data[0].company_name}</p>
          <p class="article_product_one">${product_Data[0].item_name}</p>
          <div class="price_product_div_one">
            <div class="main_price_one">Rs.${product_Data[0].price.current_price}</div>
            <div class="marked_price_one"><del>Rs ${product_Data[0].price.original_price}</del></div>
            <div class="discount_percentage_one">(%${product_Data[0].price.discount} OFF)</div>
          </div>
          <button class="getProduct_one">Add TO Cart</button>
        </div>
`