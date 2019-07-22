import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { FactureAddComponent } from './facture-add/facture-add.component';
import { FactureListComponent } from './facture-list/facture-list.component';
import { FactureDetailsListComponent } from './facture-details-list/facture-details-list.component';
import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';

const routes: Routes = [
  {
    path:'mensaje',
    component:MensajeModalComponent
    },
  {path:'clienteadd',
  component:ClienteAddComponent
  },
  {
    path:'clientelist',
    component:ClienteListComponent
    },
    {
      path:'clienteedit/:id',
      component:ClienteEditComponent
      },
      {
        path:'productoedit/:id',
        component:ProductoEditComponent
        },
        {
        path:'productolist',
        component:ProductoListComponent
        },
        {
        path:'productoadd',
        component:ProductoAddComponent
        },
        {
          path:'factureadd',
          component:FactureAddComponent
          },
          {
            path:'facturelist',
            component:FactureListComponent
            },
            {
              path:'facturedetailslist/:id',
              component:FactureDetailsListComponent
              }
        
  ];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
