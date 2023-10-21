const getEle = (id) => document.getElementById(id);

/**
 * FUNCTION RENDER PHONE LIST
 */
const renderProductList = (productArr) => {
  var content = "";
  for (var i = 0; i < productArr.length; i++) {
    let ele = productArr[i];
    content += `
    <div class="product">
    <img src=${ele.img} alt="">
    <h3>${ele.name}</h3>
    <p>${ele.price}</p>
    <p>${ele.desc}</p>
    <button>Add to Cart</button>
    </div>`;
  }
  getEle("renderProducts").innerHTML = content;
};

/**
 * RENDER CART
 */

const renderCart = (cart) => {
  let content = "";
  cart.forEach((ele) => {
    content += `<div class="product">
  <div class="product__1">
    <div class="product__thumbnail">
      <img src=${ele.product.img}
        alt="Phone image">
    </div>
    <div class="product__details">
      <div style="margin-bottom: 8px;"><b>${ele.product.name}</b></div>
      <div style="font-size: 90%;">Screen: <span class="tertiary">${
        ele.product.screen
      }</span></div>
      <div style="font-size: 90%;">Back Camera: <span class="tertiary">${
        ele.product.backCamera
      }</span></div>
      <div style="font-size: 90%;">Front Camera: <span class="tertiary">${
        ele.product.frontCamera
      }</span></div>
      <div style="margin-top: 8px;"><a href="#!" onclick ="btnRemove('${
        ele.product.id
      }')">Remove</a></div>
    </div>
  </div>
  <div class="product__2">
    <div class="qty">
      <span><b>Quantity:</b> </span> &nbsp &nbsp
      <span class="minus bg-dark" onclick ="btnMinus('${
        ele.product.id
      }')">-</span>
      <span class="quantityResult mx-2">${ele.quantity}</span>
      <span class="plus bg-dark" onclick ="btnAdd('${ele.product.id}')">+</span>
    </div>
    <div class="product__price"><b>$${
      ele.quantity * ele.product.price
    }</b></div>
  </div>
</div>`;
  });
  getEle("cartList").innerHTML = content;

  /**
   * Total Phone
   */
  let cartCount = 0;
  cart.forEach((item) => {
    cartCount += item.quantity;
  });
  const uiTotal = totalCart(cart);
  const shipping = uiTotal > 0 ? 50 : 0;
  getEle("cartCount").innerHTML = cartCount;
  getEle("shipping").innerHTML = "$" + shipping;
  getEle("subTotal").innerHTML = "$" + uiTotal;
  getEle("tax").innerHTML = "$" + Math.floor(uiTotal * 0.1);
  getEle("priceTotal").innerHTML = "$" + Math.floor(uiTotal * 1.1 + shipping);
};

export { renderProductList, renderCart };
