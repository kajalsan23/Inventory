import { Injectable }   from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../models/user.model';
import {Industry} from '../models/Industry.model';

export interface industries{
  idustry_id:number;
  name:string;
}

const HttpUploadOptions = {
 
}



@Injectable()
export class IndustryService {
   formData : Industry;
   list : Industry[];
  private serviceUrl = 'https://angular5web.000webhostapp.com/api/industries';

private url = 'https://angular5web.000webhostapp.com/api/addIndustry';



  constructor(private http: HttpClient) {

   }

   getindustries(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
    
  }

//  getindustries() {
//    this.http.get(this.serviceUrl).toPromise().then(res => this.list = res as Industry[]);
//    return this.list;
//   }

// public getindustries() {
//    let url = 'https://angular5web.000webhostapp.com/api/industries';
//   return this.http.get(url);
// }


Idata() {
  return this.http.get<industries[]>(this.serviceUrl);
}

  getIndustry(id:number)
  {
    let url="https://angular5web.000webhostapp.com/api/industry/"+id;
    return this.http.get(url);
  }

 PostIndustry(data:any){
    let url="https://angular5web.000webhostapp.com/api/addIndustry";
  
    const formdata = new FormData();
    formdata.append('name', data.industry_name);
    formdata.append('state', data.state);
    formdata.append('city', data.city);
    return this.http.post(url, formdata, HttpUploadOptions)
    }

    updateIndustry(data:any){
     let url="https://angular5web.000webhostapp.com/api/updateIndustry";
     console.log(data);
     
     
       const formdata = new FormData();
    //   return this.http.post(url,formdata);
      formdata.append('industry_id', data.id);
      formdata.append('name', data.industry_name);
      formdata.append('state', data.state_code);
      formdata.append('city', data.city);
      return this.http.post(url, formdata, HttpUploadOptions)
  }
   deleteIndustry(id:any){

       const form = new FormData();
       form.append('industry_id',id);
       let url = "https://angular5web.000webhostapp.com/api/deleteIndustry";
       return this.http.post(url, form, HttpUploadOptions)
      // return this.http.delete(url,f);
   }
}


