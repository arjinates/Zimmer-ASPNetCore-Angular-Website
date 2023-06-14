import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/Models/product';
import { Pagination } from '../shared/Models/pagination';
import { Brand } from '../shared/Models/brand';
import { Type } from '../shared/Models/type';
import { ShopParams } from '../shared/Models/shopParams';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  pagination?: Pagination<Product[]>;
  shopParams = new ShopParams();

  constructor(private http: HttpClient) { }

  getProducts() {
    let params = new HttpParams();

    if (this.shopParams.brandId > 0) params = params.append('brandId', this.shopParams.brandId);
    if (this.shopParams.typeId) params = params.append('typeId', this.shopParams.typeId);
    params = params.append('sort', this.shopParams.sort);
    params = params.append('pageIndex', this.shopParams.pageNumber);
    params = params.append('pageSize', this.shopParams.pageSize);
    if(this.shopParams.search) params = params.append('search', this.shopParams.search);
    
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params}).pipe(
      map(response => {
        this.products = [...this.products, ...response.data];
        this.pagination = response;
        return response;
      })
    )
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }

  getShopParams() {
    return this.shopParams;
  }

  getProduct(id: number) {
    const product = this.products.find(p => p.id === id);

    if (product) return of(product);

    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  getBrands() {
    if (this.brands.length > 0) return of(this.brands);

    return this.http.get<Brand[]>(this.baseUrl + 'products/brands').pipe(
      map(brands => this.brands = brands)
    );
  }

  getTypes() {
    if (this.types.length > 0) return of(this.types)
    
    return this.http.get<Type[]>(this.baseUrl + 'products/types').pipe(
      map(types => this.types = types)
    );
 }
}