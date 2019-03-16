import { Component } from '@angular/core';

import { ProductService } from '../Service/productservice';
import { industries, IndustryService } from '../Service/industrysevice';
import { MatDialog } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgForm } from '@angular/forms';

export interface industries {
  // idustry_id:number;
  name: string;

}

@Component({
  templateUrl: 'product.component.html',
  providers: [IndustryService, ProductService]
})
export class ProductComponent {

 selectindustry: any;
  industry: any;
  name: any;
  date: any;
  url: any;
  image: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  response: any;

  constructor(private inserv: IndustryService, private pserv: ProductService, private toastr: ToastrManager) { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  ngOnInit() {

this.resetForm();

    this.inserv.Idata().subscribe(
      industries => {
        this.industry = industries;		// FILL THE ARRAY WITH DATA.
      }
    );

  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.image = this.selectedFiles.item(0);
    console.log(this.image);
  }

  getFileDetails(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
    console.log(this.url);

  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.pserv.formData = {
      id:null,
      name: '',
      selectindustry: '',
      image:''

    }
  }

  
  addproduct(form:NgForm) {
 let data = {
           name: this.name,
         // date:this.date,
          industry_id:this.selectindustry,
          image:this.image,
      }
      console.log(data);
          this.pserv.addproduct(data).subscribe(res => {
            this.response = res;
              console.log(res);
               if(this.response.response == 'success'){
                this.toastr.successToastr(this.response.message);
                this.resetForm(form);
              } else if(this.response.response == 'error'){
                this.toastr.successToastr(this.response.message);
              } else {
                this.toastr.successToastr('Something went wrong.');
              }
           })
            }

            Delete(id)
            {
               
            }

}
