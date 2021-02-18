import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody) {
    const baseUrl = 'http://localhost:3000/product/';
    return this.httpClient.post(baseUrl, productBody);
  }

  viewProduct(productId) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.get(baseUrl);
  }

  updateProduct(productId, productBody) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.put(baseUrl, productBody);
  }
  deleteProduct(productId) {
    const baseUrl = 'http://localhost:3000/product/' + productId;
    return this.httpClient.delete(baseUrl);
  }
  searchCategoryProduct(categoryId) {
    const baseUrl = 'http://localhost:3000/product/category=' + categoryId;
    return this.httpClient.get(baseUrl);
  }
  searchDateProduct(dateParam) {
    const baseUrl = 'http://localhost:3000/product/date=' + dateParam;
    return this.httpClient.get(baseUrl);
  }
}
