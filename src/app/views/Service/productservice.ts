import { Injectable }   from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Product} from '../models/Product.model';

export interface User {
  name: string;
  email: string;
  phone: string;
  company: {
      name: string;
  }
}

export interface Products{
  name:string;
}

const HttpUploadOptions = {
  // headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}

@Injectable()
export class ProductService {
  private serviceUrl = 'https://angular5web.000webhostapp.com/api/products';

  formData : Product;
  list : Product[];

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<User[]> {
  //   return this.http.get<User[]>(this.serviceUrl);
  // }
  getProducts(){
  this.http.get(this.serviceUrl).toPromise().then(res => this.list = res as Product[]);
   return this.list;
  }

  getPD(id:number)
  {
    //let url="https://angular5web.000webhostapp.com/api/industry/"+id;
    let url="https://angular5web.000webhostapp.com/api/product/"+id;
    return this.http.get(url);
  }


  addproduct(data:any){
    let url="https://angular5web.000webhostapp.com/api/addProduct";
  
    const formdata = new FormData();
   
    formdata.append('name', data.name);
    formdata.append('industry_id', data.industry_id);
    formdata.append('image', data.image);
    return this.http.post(url, formdata, HttpUploadOptions)
    }

    productList(){
      return this.http.get<Products[]>(this.serviceUrl);
       }

    updateProduct(data:any){
      let url="https://angular5web.000webhostapp.com/api/updateProduct";
      
        const formdata = new FormData();
     //   return this.http.post(url,formdata);
       formdata.append('product_id',data.id);
       formdata.append('name', data.name);
       formdata.append('selectindustry', data.selectindustry);
       formdata.append('image', data.image_url);
       return this.http.post(url, formdata, HttpUploadOptions)
   }
    deleteProduct(id:any){
 
        const form = new FormData();
        form.append('product_id',id);
        let url = "https://angular5web.000webhostapp.com/api/deleteProduct";
        return this.http.post(url, form, HttpUploadOptions)
       // return this.http.delete(url,f);
    }
}


