import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'ngx-loading';

import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { CountryviewComponent } from './countryview/countryview.component';
import { HttpserviceService } from './httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SinglecountryComponent } from './singlecountry/singlecountry.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountryviewComponent,
    SinglecountryComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'region',component:RegionComponent},
      {path:'',component:RegionComponent,pathMatch:'full'},
      {path:'component/:name',component:CountryviewComponent},
      {path:'country/:cname',component:SinglecountryComponent},
      {path:'component/cur/:code',component:CountryviewComponent},
      {path:'component/lang/:langcode',component:CountryviewComponent},
      {path:"*",component:RegionComponent,pathMatch:'full'}
    ])
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
