
import { Component } from '@angular/core';
import {StatesService,States} from '../Service/stateservice';
import {IndustryService} from '../Service/industrysevice';
import { Alert } from 'selenium-webdriver';
import { ToastrManager } from 'ng6-toastr-notifications';
import {NgForm} from '@angular/forms';

export interface States{
  name:string;
  code: string;
}

@Component({
  templateUrl: 'industry.component.html',
  providers: [StatesService,IndustryService]

})
export class IndustryComponent  {

  industry_name:any;
  city:any;
  state : any;
  states : States[];
  Industry:any;
  response:any;


  constructor(private stateservice: StatesService, private Iserv: IndustryService,public toastr: ToastrManager){}

  ngOnInit () {
    this.stateservice.GetData().subscribe(
        States => {
        this.states = States;		// FILL THE ARRAY WITH DATA.
        }
    );

  }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
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
    let data = {
      industry_name: this.industry_name,
      state : this.state,
      city: this.city,
    
  }
      this.Iserv.PostIndustry(data).subscribe(res => {
          console.log(res);
       })
       this.toastr.successToastr('Save Data Successfully');
       this.resetForm(form);
    
    
    }
  }
 
