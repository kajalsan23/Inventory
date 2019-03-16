
import { Injectable }   from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
//import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';




const HttpUploadOptions = {
  // headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }



  postlogin(data:any){
    let url="https://angular5web.000webhostapp.com/api/login";
  
    const formdata = new FormData();
    formdata.append('user', data.user);
    formdata.append('pass', data.pass);
    return this.http.post(url, formdata, HttpUploadOptions)
    }

   
}


