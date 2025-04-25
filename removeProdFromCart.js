import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { UpdateCartProductTotal } from "./updateCartProductTotal";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
      // update the localStorage after removing the item
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  //   to remove the div on click
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
  }

  //show toast when product added to the cart
  showToast("delete", id);

  UpdateCartProductTotal(cartProducts);




};