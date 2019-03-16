
import { Injectable }   from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Stock} from '../models/Stock.model';

export interface stocktranscation{
  date:string;
  industry:string;
  product:string;
  addede:string;
  removed:string;

}

const HttpUploadOptions = {
  // headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}

@Injectable()
export class StockService {

  formData: Stock;

  private serviceUrl = 'https://angular5web.000webhostapp.com/api/getStock';
  private servicestocktranscationurl = 'https://angular5web.000webhostapp.com/api/getStockStatement';
  private modals: any[] = [];

  constructor(private http: HttpClient) { }

  getStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.serviceUrl);
  }

  poststock(data:any){
    let url="https://angular5web.000webhostapp.com/api/addStock";
  
    const formdata = new FormData();
    formdata.append('industry_id', data.selectindustry);
    formdata.append('product_id', data.selectproduct);
    formdata.append('added', data.added );
    formdata.append('size', data.size );
    formdata.append('removed', "0");
    return this.http.post(url, formdata, HttpUploadOptions)
    }





    update(data:any){
      let url="https://angular5web.000webhostapp.com/api/UpdateIndustry";
      const formdata = new FormData();
      formdata.append('industry_id', data.id);
      formdata.append('name', data.name);
      formdata.append('state', data.selectstate);
      formdata.append('city', data.city);
      
      
      return this.http.post(url, formdata, HttpUploadOptions)
  }

   deleteemp(id:number){
       let url="https://angular5web.000webhostapp.com/api/DeleteIndustry";
       return this.http.delete(url);
   }

   //stock transcation
   getStocktranscation(): Observable<stocktranscation[]> {
    return this.http.get<stocktranscation[]>(this.servicestocktranscationurl);
  }

}


