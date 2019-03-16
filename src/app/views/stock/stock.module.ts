// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';
import { StockComponent } from './stock.component';

import { StockTranscationComponent } from './stocktranscation.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { StockTableComponent } from './stocktable.component';

// Notifications Routing
import { StockRoutingModule } from './stock-routing.module';

import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';


@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BsDropdownModule.forRoot(),
    // BrowserModule,
     CommonModule
  ],
  declarations: [
    StockTableComponent,
    StockTranscationComponent,
    StockComponent
  ]
})
export class StockModule { }
