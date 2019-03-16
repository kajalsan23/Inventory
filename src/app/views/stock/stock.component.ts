
// import { Component } from '@angular/core';
// import { ProductService, Products } from '../Service/productservice';
// import {industries, IndustryService} from '../Service/industrysevice';
// import {StockService} from '../Service/stocksevice';
// import { ToastrManager } from 'ng6-toastr-notifications';
// import {NgForm} from '@angular/forms';

// @Component({
//   templateUrl: 'stock.component.html',
//   providers:[IndustryService,ProductService,StockService,]
// })
// export class StockComponent {

//   selectindustry : any;
//   industry: any;
//   selectproduct: any;
//   product : any;
//   added : any;
//   size: any;
//   response:any;

//   constructor(private inserv: IndustryService,private pserv:ProductService, public stockserv : StockService,private toastr:ToastrManager) { }
  
//   isCollapsed: boolean = false;
//   iconCollapse: string = 'icon-arrow-up';

//   collapsed(event: any): void {
//     // console.log(event);
//   }

//   expanded(event: any): void {
//     // console.log(event);
//   }

//  ngOnInit () {

//     this.inserv.Idata().subscribe(
//        industries => {
//        this.industry = industries;		// FILL THE ARRAY WITH DATA.
//        }
//    );

//   //  this.pserv.productList().subscribe(
//   //   Products => {
//   //      this.product = Products
//   //    }
//   //  )

//   // this.resetform();
//   }

// resetform(form?:NgForm)
// {
//     if(form!=null)
//     form.resetForm();
//     this.stockserv.formData = {

//      selectproduct:'',
//      selectindustry:'',
//      size:'',
//      added:'',

//     }
    
// }
  
// Addstock(form:NgForm)
//   {
//     let data = {
//     selectindustry :this.selectindustry,
//     selectproduct : this.selectproduct,
//     added : this.added,
//     size : this.size,
//     }
    
//     console.log(form.value);
//     this.stockserv.poststock(form.value).subscribe(res => {
//       this.response = res;
//       if(this.response.response == 'success')
//       {
//         this.toastr.successToastr(this.response.message);
//         this.resetform(form);   
//       }
//       else if(this.response.response == 'error')
//       {
//         this.toastr.errorToastr(this.response.message);
//       }
//       else{
//         this.toastr.errorToastr('Invalid Request');
//       }
     
          

//     });
    
//  }

// }


import { Component } from '@angular/core';
import { ProductService, Products } from '../Service/productservice';
import {industries, IndustryService} from '../Service/industrysevice';
import {StockService} from '../Service/stocksevice';
import {Stock} from '../models/Stock.model';
import { ToastrManager } from 'ng6-toastr-notifications';
import {NgForm} from '@angular/forms';


@Component({
  templateUrl: 'stock.component.html',
  providers:[IndustryService,ProductService,StockService]
})
export class StockComponent {

  selectindustry : any;
  industry: any;
  selectproduct: any;
  product : any;
  added : any;
  size: any;
  response:any;
  
  constructor(private inserv: IndustryService,private pserv:ProductService,
     private stockserv : StockService,private toastr:ToastrManager) { }
  
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }



  ngOnInit () {


    this.inserv.Idata().subscribe(
       industries => {
       this.industry = industries;		// FILL THE ARRAY WITH DATA.
       }
   );

   this.pserv.productList().subscribe(
    Products => {
       this.product = Products
     }
   )

  }

  resetform(form?:NgForm)
{
    if(form!=null)
    form.resetForm();
    this.stockserv.formData = {

     selectproduct:'',
     selectindustry:'',
     size:'',
     added:'',

    }
    
}

  // Addstock()
  // {
  //  {
  //      let data = {
  //       selectindustry: this.selectindustry,
  //       selectproduct : this.selectproduct,
  //          added : this.added,
  //          size : this.size,
         
  //      }
      //  console.log(data);
      //      this.stockserv.poststock(data).subscribe(res => {
      //          console.log(res);
      //       })
      //       alert("Added Successfully");
           // console.log("save successfully");

Addstock(form:NgForm)
  {
    let data = {
    selectindustry :this.selectindustry,
    selectproduct : this.selectproduct,
    added : this.added,
    size : this.size,
    }
    
    console.log(data);
           this.stockserv.poststock(data).subscribe(res => {
               console.log(res);
            })
            this.toastr.successToastr("Stock Successfully..!!");
          //   alert("Added Successfully");
          //  console.log("save successfully");


  //   console.log(form.value);
  //   this.stockserv.poststock(form.value).subscribe(res => {
  //     this.response = res;
  //     if(this.response.response == 'success')
  //     {
  //       this.toastr.successToastr(this.response.message);
  //       this.resetform(form);   
  //     }
  //     else if(this.response.response == 'error')
  //     {
  //       this.toastr.errorToastr(this.response.message);
  //     }
  //     else{
  //       this.toastr.errorToastr('Invalid Request');
  //     }
  //  });
    
 }

           


  }
  



