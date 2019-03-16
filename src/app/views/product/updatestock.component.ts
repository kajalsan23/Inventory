import { Component } from '@angular/core';
import {IndustryService} from '../Service/industrysevice';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';

export interface User {
  name: string;
  email: string;
  phone: string;
  company: {
      name: string;
  }
}

@Component({
  templateUrl: 'updatestock.component.html',
  providers:[IndustryService]
})
export class UpdateStockComponent {
  dataSource : MatTableDataSource<IndustryService>;
   
  displayedColumns = ['id','name','count','actions'];
 constructor(private service: IndustryService, ) { }
 
   ngOnInit() {
     this.service.getindustries();
    }

   update()
   {
   //  this.popup.show();
   }
 
 }

//  export class UserDataSource extends DataSource<any> {
  
//   constructor(private service: IndustryService) {
//     super();
//   }
 
//   connect(): Observable<User[]> {
  
//     return this.service.getindustries();
     
//   }
// disconnect(){}
// }