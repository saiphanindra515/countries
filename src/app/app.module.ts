import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'ngx-loading';

import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { CountryviewComponent } from './countryview/countryview.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountryviewComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'region',component:RegionComponent},
      {path:'',component:RegionComponent,pathMatch:'full'},
      {path:'component/:name',component:CountryviewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
