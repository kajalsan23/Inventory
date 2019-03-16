import { Component, Inject, OnInit } from '@angular/core';
import {ProductService} from '../Service/productservice';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections'; 
import {MatDialog,MatDialogConfig} from '@angular/material';
import {ProductComponent} from './product.component';
import {UpdateStockComponent} from './updatestock.component';
import { ToastrManager } from 'ng6-toastr-notifications';
import Swal from 'sweetalert2';
import {User} from '../models/user.model';
import {ProductEditComponent} from './productedit.component';

@Component({
  templateUrl: 'product_table.component.html',
  providers:[ProductService]
})
export class ProductTableComponent implements OnInit {

  response:any;
  product:any;
  data:any;

  displayedColumns = ['id', 'image_url', 'name', 'industry','actions'];
 // dataSource = new UserDataSource(this.service,this.dialog);
  animal: string;
  name: string;
  constructor(public service: ProductService,public dialog: MatDialog,
     private toastr: ToastrManager) { }

  ngOnInit()
  {
    this.service.getProducts();
   
    
  }

  openDialog(id) {
  
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.service.getPD(id).subscribe(res =>{
        this.product = res;
        console.log(this.product);
        
        this.data = this.product;       
         
        dialogConfig.data = {
            id : this.data.id,
          selectindustry : this.data.industry_id,
          name: this.data.name,
          image:this.data.image_url,
        
        };
  
        this.dialog.open(ProductEditComponent, dialogConfig);
    });
  
  }

  private deleteproduct(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      if (result.value) {
        this.service.deleteProduct(id).subscribe(res => {
          this.response = res;
          console.log(this.response);
          
            if(this.response.response == 'success'){
              this.service.getProducts();
              
              this.toastr.successToastr(this.response.message);
            }  
          })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      
      }
    })
  }


  
    // private deleteproduct(id) {
     
    //   this.service.deleteProduct(id).subscribe(res => {
    //     this.response = res;
    //       console.log(this.response.respons);
  
    //       if(this.response.response == 'success'){
  
    //         Swal.fire({
    //           title: 'Are you sure?',
    //           text: 'You will not be able to recover this imaginary file!',
    //           type: 'warning',
    //           showCancelButton: true,
    //           confirmButtonText: 'Yes, delete it!',
    //           cancelButtonText: 'No, keep it'
    //         }).then((result) => {
    //           if (result.value) {
    //             Swal.fire(
    //               'Deleted!',
    //               'Your imaginary file has been deleted.',
    //               'success'
    //             )
              
    //           } else if (result.dismiss === Swal.DismissReason.cancel) {
    //             Swal.fire(
    //               'Cancelled',
    //               'Your imaginary file is safe :)',
    //               'error'
    //             )
    //           }
    //         })
  
    //        }
    //    })
    // }

  }

// export class UserDataSource extends DataSource<any> {

// constructor(private service: ProductService, public dialog: MatDialog) {
//   super();
// }

// connect(): Observable<User[]> {
//   return this.service.getProducts();
// }


// disconnect() {}

// }
