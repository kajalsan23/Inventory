import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  StockComponent } from './stock.component';
import { StockTranscationComponent } from './stocktranscation.component';
import { StockTableComponent } from './stocktable.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Stock'
    },
    children: [
      // {
      //   path: '',
      //   redirectTo: 'alerts'
      // },
      {
        path: 'addstock',
        component: StockComponent,
        data: {
          title: 'Add Stock'
        }
      },
      {
        path: 'managestock',
        component: StockTableComponent,
        data: {
          title: 'Stock Details'
        }
      },
      {
        path: 'transaction',
        component: StockTranscationComponent,
        data: {
          title: 'stock transcation'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
