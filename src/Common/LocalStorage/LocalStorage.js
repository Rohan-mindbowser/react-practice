export function addProductToLocalStorage(product) {
  let previousCartItem = localStorage.getItem("cartItem");
  let newCartItems = [];
  if (previousCartItem) {
    newCartItems = JSON.parse(previousCartItem);
  }
  let isUpdatedQuantity = false;
  newCartItems.forEach((item) => {
    if (item._id === product[0]._id) {
      item.quantity = item.quantity + 1;
      localStorage.setItem("cartItem", JSON.stringify(newCartItems));
      isUpdatedQuantity = true;
    }
  });

  if (!isUpdatedQuantity) {
    newCartItems.push({ ...product[0], quantity: 1 });
    localStorage.setItem("cartItem", JSON.stringify(newCartItems));
    toast("Product added in cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
}
