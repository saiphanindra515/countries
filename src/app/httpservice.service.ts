import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import {HttpParams,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
   public BaseUrl:string = "https://restcountries.eu/rest/v2/";
  constructor(public _http:HttpClient) { }
  public country=(data)=>{
    return this._http.get(this.BaseUrl+'region/'+data);
  }
  public singlecountry = (country):any=>{
    return this._http.get(this.BaseUrl+'name/'+country+'?fullText=true');
  }
  public currency=(code)=>{
  return this._http.get(this.BaseUrl+'currency/'+code);
  }
  public language=(langcode)=>{
   return this._http.get(this.BaseUrl+'lang/'+langcode);
  }
}
