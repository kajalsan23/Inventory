
import { Component } from '@angular/core';
import {StockService} from '../Service/stocksevice';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { StockComponent } from './stock.component';
import {Stock} from '../models/Stock.model';

@Component({
  templateUrl: 'stocktable.component.html',
  providers:[StockService]

})
export class StockTableComponent {
  dataSource = new UserDataSource(this.service);
   
  displayedColumns = ['industry','product','XS','S','M','L','XL','XXL','XXXL','XXXXL','total','actions'];
 constructor(private service: StockService,private dialog: MatDialog ) { }
 
   ngOnInit() { }

   edit()
   {
     //const MatDialogConfig = new MatDialogConfig();
       this.dialog.open(StockComponent);
     // this.dialog.setCanceledOnTouchOutside(true);
   }

 }



 export class UserDataSource extends DataSource<any> {
  
  constructor(private service: StockService ) {
    super();
  }
 
  connect(): Observable<Stock[]> {
  
    return this.service.getStock();
     
  }
 
  disconnect() {}
}

