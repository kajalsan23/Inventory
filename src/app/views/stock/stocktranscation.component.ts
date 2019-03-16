import { Component } from '@angular/core';

import {StockService, stocktranscation} from '../Service/stocksevice';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';

@Component({
  templateUrl: 'stocktranscation.component.html',
  providers:[StockService]

})
export class StockTranscationComponent {
  dataSource = new UserDataSource(this.service);
   
  displayedColumns = ['date','industry','product','size','added','removed','actions'];
 constructor(private service: StockService ) { }
 
   ngOnInit() { }
 }

 export class UserDataSource extends DataSource<any> {
  
  constructor(private service: StockService ) {
    super();
  }
 
  connect(): Observable<stocktranscation[]> {
  
    return this.service.getStocktranscation();
     
  }
 
  disconnect() {}
}

