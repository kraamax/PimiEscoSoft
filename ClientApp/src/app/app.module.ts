import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { FactureAddComponent } from './facture-add/facture-add.component';
import { FactureListComponent } from './facture-list/facture-list.component';
import { FactureDetailsListComponent } from './facture-details-list/facture-details-list.component';
import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteAddComponent,
    ClienteListComponent,
    ClienteEditComponent,
    ProductoEditComponent,
    ProductoAddComponent,
    ProductoListComponent,
    FactureAddComponent,
    FactureListComponent,
    FactureDetailsListComponent,
    MensajeModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  entryComponents:[MensajeModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
