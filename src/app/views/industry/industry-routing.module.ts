import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndustryComponent } from './industry.component';

import {IndustryEditComponent} from './industryedit.component';

import { IndustryTablesComponent } from './industry_tables.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Industry'
    },
    children: [
      {
        path: 'addindustry',
        component: IndustryComponent,
        data: {
          title: 'Add Industry'
        }
      },
    
  {
        path: 'editindustry',
        component: IndustryEditComponent,
        data: {
          title: 'Edit Industry'
        }
      },

      {
        path: 'manageindustry',
        component: IndustryTablesComponent,
        data: {
          title: 'Industry Details'
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryRoutingModule {}
