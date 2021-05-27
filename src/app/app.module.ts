import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes, RouterModule} from '@angular/router';
import { MesJeuxComponent } from './mes-jeux/mes-jeux.component';
import { NgModule } from '@angular/core';

import {JeuService} from './services/jeu.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SingleJeuComponent } from './sigle-jeu/single-jeu/single-jeu.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AjouterJeuComponent } from './ajouter/ajouter-jeu/ajouter-jeu.component';

import { SupprimerJeuComponent } from './deleteJeu/supprimer-jeu/supprimer-jeu.component';
import { HomeComponent } from './home/home/home.component';
import { CompteComponent } from './compte/compte/compte.component';
import { ModifierJeuDetailComponent } from './deleteJeu/modifier-jeu-detail/modifier-jeu-detail.component';
import { ReparerJeuComponent } from './reparer/reparer-jeu/reparer-jeu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { TestComponent } from './test/test.component';

import { DateTimePickerModule} from '@syncfusion/ej2-angular-calendars';
import { SearchComponent } from './search/search/search.component';












const appRoutes: Routes=[
  {path:'mesJeux', component:MesJeuxComponent},
  {path: 'mesJeux/:id', component:SingleJeuComponent},
  {path:'ajouter', component:AjouterJeuComponent},
  {path:'modifier', component:SupprimerJeuComponent},
  {path:'compte', component:CompteComponent},
  {path: 'modifier/:id', component: ModifierJeuDetailComponent},
  {path:'reparer', component:ReparerJeuComponent},
  {path:'test', component:TestComponent},

  {path:'', component:HomeComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MesJeuxComponent,
    SingleJeuComponent,
    AjouterJeuComponent,

    SupprimerJeuComponent,

    HomeComponent,

    CompteComponent,

    ModifierJeuDetailComponent,

    ReparerJeuComponent,

    TestComponent,

    SearchComponent,



  ],
  imports: [
    BrowserModule,

    HttpClientModule,


    ReactiveFormsModule,



    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    DateTimePickerModule,



    NgbModule
  ],

  providers: [
    JeuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
