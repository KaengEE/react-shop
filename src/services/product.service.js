import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/products";

class ProductService {
  //제품저장
  saveProduct(product) {
    return axios.post(API_URL, product, { headers: authHeader() });
  }
  //제품삭제
  deleteProduct(product) {
    return axios.delete(API_URL + "/" + product.id, { headers: authHeader() });
  }
  //전체제품조회
  getAllProducts() {
    return axios.get(API_URL);
  }
}

//클래스를 객체로 선언하여 사용
const productService = new ProductService();

export default productService;
