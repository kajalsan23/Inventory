import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../Service/loginservice';
import { ToastrManager, Toastr } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls:['./login.component.less'],
  providers:[LoginService]
})
export class LoginComponent {


  user: string;
  pass: string;
  status : any;
  response : any;

  constructor(private _router: Router,private loginserv:LoginService, private toastr:ToastrManager) { }

    public login() {
        {
        let data = {
            user: this.user,
            pass: this.pass,
          
        }
          this.response =   this.loginserv.postlogin(data).subscribe(res => {
            this.response = res;
            console.log(this.response.status);

            if(this.response.status == 'success')
            {
             // alert("Login..!!");
             this.toastr.successToastr("User Login Successfully..!");
             this._router.navigate(['/dashboard']);
             }
             
             else{
             // alert("invalid user..!!");
             this.toastr.errorToastr("Invalid User..!");
                 }
         }) 
    
            //     console.log(res);
            //  })
            // console.log("save successfully");
            // alert("Save Data Successfully..!!");
            //  this._router.navigate(['/dashboard']);
          
          }
        }
      }
     
   
