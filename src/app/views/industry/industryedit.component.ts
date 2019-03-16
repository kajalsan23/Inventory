
import { Component, Inject } from '@angular/core';
import {StatesService,States} from '../Service/stateservice';
import {IndustryService} from '../Service/industrysevice';
import { Alert } from 'selenium-webdriver';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


export interface States{
  name:string;
  code: string;
}

@Component({
  templateUrl: 'industryedit.component.html',
  providers: [StatesService,IndustryService]

})
export class IndustryEditComponent  {

  industry_name:any;
  city:any;
  state : any;
  states : States[];
  data: any
  Industry:any;
  response:any;

 constructor(private stateservice: StatesService,
    public Iserv: IndustryService,
    public toastr: ToastrManager,
    private dialogRef: MatDialogRef<IndustryEditComponent>,
    @Inject(MAT_DIALOG_DATA) data){
     this.Iserv.formData = data;
    }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    
  }

  expanded(event: any): void {
    
  }

  ngOnInit () {
    this.stateservice.GetData().subscribe(
        States => {
        this.states = States;		
        }
    );
  }

  resetForm(form? : NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.Iserv.formData = {
      id: null,
      city:'',
      state :'',
      industry_name:''
    }
  }

  onsubmit(form:NgForm)
  {
    console.log(form);

    this.updateRecord(form);
    
    
  }

  updateRecord(form:NgForm)
  {
    console.log(form.value);
      this.Iserv.updateIndustry(form.value).subscribe(res => {
      this.response = res;
        console.log(this.response.respons);
        if(this.response.response == 'success'){
          this.toastr.successToastr(this.response.message);
          //this.Iserv.getindustries();
        } else if(this.response.response == 'error'){
          this.toastr.successToastr(this.response.message);
        } else {
          this.toastr.successToastr('Something went wrong.');
        }
     })
  }

 }
