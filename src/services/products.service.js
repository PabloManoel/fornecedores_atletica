import http from '../http-commons';

class ProductsDataService {

    getAll() {
        return http.get("/products");
    }

    get(id){
        return http.get(`/products/${id}`);
    }
}

export default new ProductsDataService();