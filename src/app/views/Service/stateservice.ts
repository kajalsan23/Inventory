
import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import { HttpClient }   from '@angular/common/http';
import 'rxjs/add/operator/map';

export interface States{
  name:string;
  code:string;
}

@Injectable()
export class StatesService {

 private serviceUrl = 'https://angular5web.000webhostapp.com/api/states';

 constructor(private http: HttpClient) { }

  GetData(): Observable<States[]> {
    return this.http.get<States[]>(this.serviceUrl);
  }

 
}


