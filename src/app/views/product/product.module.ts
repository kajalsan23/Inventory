import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductTableComponent } from './product_table.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material";
import {ProductEditComponent} from './productedit.component';
import {CommonModule} from '@angular/common';
import {UpdateStockComponent} from './updatestock.component';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  imports: [ ProductRoutingModule,
     CollapseModule.forRoot(),
      MaterialModule,
      HttpClientModule,
      FormsModule,
      MatDialogModule,
      BsDropdownModule.forRoot(),
      ToastrModule.forRoot(),
      // BrowserModule,
       CommonModule

    ],

  declarations: [
    ProductComponent,
    ProductEditComponent,
    ProductTableComponent,
    UpdateStockComponent

  ],
  exports: [
    CdkTableModule,
   
  ],
})
export class ProductModule { }
