import Api from "../services/api.js";
import { renderProductList } from "../controllers/controller.js";
const getEle = (id) => document.getElementById(id);

const api = new Api();
const getListProduct = () => {
  console.log(123);
  api
    .callApi("halloween", "get", null)
    .then((result) => renderProductList(result))
    .catch((err) => console.log(err));
};
getListProduct();

getEle("search_button").addEventListener("click", () => {
  console.log(456);
  const search = getEle("search").value;
  const productName = search;

  if (productName.trim() !== "") {
    searchProductsByName(productName);
  }
});

getEle("search").addEventListener("keyup", () => {
  const search = getEle("search").value;
  if (search.trim() === "") {
    getListProduct();
  }
});

const searchProductsByName = async (productName) => {
  try {
    const products = await api.callApi(`halloween`, "get", null);
    console.log(123);
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
    renderProductList(filterProducts);
  } catch (err) {
    console.log(err);
  }
};
