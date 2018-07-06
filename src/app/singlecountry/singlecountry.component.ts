import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import {Location} from '@angular/common';
declare var jquery : any;
declare var $ : any;
@Component({
  selector: 'app-singlecountry',
  templateUrl: './singlecountry.component.html',
  styleUrls: ['./singlecountry.component.css']
})
export class SinglecountryComponent implements OnInit {

  constructor(public route:ActivatedRoute,public httpser:HttpserviceService,public location:Location) { }
   public countryname;
   public loading:boolean=false;
   public res;
   public img;
  ngOnInit() {
   this.countryname=this.route.snapshot.paramMap.get('cname');
   console.log(this.countryname);
   this.getcountry();
   
   

   
  }
  public getcountry = ()=>{
    this.loading=true;
    this.httpser.singlecountry(this.countryname).subscribe(
      data=>{
      
      this.res=data;
      this.loading=false;
      console.log(this.res);

      
      },
      error=>{
      this.loading=false;
      }
    )
  }
public goback=()=>{
 this.location.back(); 
  
}

}
