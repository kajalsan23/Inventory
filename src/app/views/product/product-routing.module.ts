import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import {ProductEditComponent} from './productedit.component';
import { ProductTableComponent } from './product_table.component';
import { UpdateStockComponent } from './updatestock.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Product'
    },
    children: [
      // {
      //   path: '',
      //   redirectTo: ''
      // },
      {
        path: 'addproduct',
        component: ProductComponent,
        data: {
          title: 'Add Products'
        }
      },
      {
        path :'editproduct',
        component:ProductEditComponent,
         data:{title:'Edit Product'}
      },
      {
        path: 'manageproduct',
        component: ProductTableComponent,
        data: {
          title: 'Product Details'
        }
      },
      {
        path: 'font-awesome',
        component: UpdateStockComponent,
        data: {
          title: 'Font Awesome'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
