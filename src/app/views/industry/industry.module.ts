// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Forms Component
import { IndustryComponent } from './industry.component';

import {IndustryEditComponent} from './industryedit.component';

import { IndustryTablesComponent } from './industry_tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ModalModule } from 'ngx-bootstrap/modal';


// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';




// Components Routing
import { IndustryRoutingModule } from './industry-routing.module'; 
import {CdkTableModule} from '@angular/cdk/table';
import { MaterialModule } from '../material.module';
import { ToastrModule } from 'ng6-toastr-notifications';
 import {MatDialogModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IndustryRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    MaterialModule,
   
  ],
  exports: [
    CdkTableModule,
  
   
  ],
  declarations: [
   
    IndustryComponent,
    IndustryEditComponent,
    IndustryTablesComponent,
   
  ]
})
export class IndustryModule { }
