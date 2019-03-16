import { Component, OnInit,ViewChild } from '@angular/core';
import { IndustryService } from '../Service/industrysevice';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatTableDataSource, MatPaginator, MatDialogConfig,MatSort } from '@angular/material';
import { IndustryEditComponent } from './industryedit.component';
import { ToastrManager } from 'ng6-toastr-notifications';
import {Router} from '@angular/router';
import {User} from '../models/user.model'; 
import { Industry } from '../models/Industry.model';
import Swal from 'sweetalert2';



@Component({
  templateUrl: 'industry_tables.component.html',
  providers: [IndustryService]

})
export class IndustryTablesComponent implements OnInit {


  Industry:any;
  data:any;
  response:any;
  industryList: any;
  loading: boolean = true;

 // @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'name', 'city', 'actions'];
  dataSource : MatTableDataSource<IndustryService>;
 
 //dataSource = new UserDataSource(this.service);
 

 
  constructor(public service: IndustryService, 
    public dialog: MatDialog,
    public toastr: ToastrManager,
    private router:Router) { 

    }

  ngOnInit() {
    this.loading = true;
      this.service.getindustries();
     // this.loading = false;
  }

openDialog(id) {
  
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  this.service.getIndustry(id).subscribe(res =>{
      this.Industry = res;
      this.data = this.Industry.data; 
            
       
      dialogConfig.data = {
        id : this.data.id,
        industry_name : this.data.name,
        city: this.data.city,
        state: this.data.state_code
      };

      this.dialog.open(IndustryEditComponent, dialogConfig);
  });

}
 
   
    private deleteIndustry(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.service.deleteIndustry(id).subscribe(res => {
            this.response = res;
              if(this.response.response == 'success'){
                this.service.getindustries();
                
                this.toastr.successToastr(this.response.message);
              }  
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        
        }
      })
    }

}

