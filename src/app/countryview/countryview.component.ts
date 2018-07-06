import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import {ToastrService} from 'ngx-toastr';
import { Location } from '@angular/common';
declare var jquery : any;
declare var $ : any;



@Component({
  selector: 'app-countryview',
  templateUrl: './countryview.component.html',
  styleUrls: ['./countryview.component.css'],
  providers : [Location]
 
})
export class CountryviewComponent implements OnInit {
  public name:string;
  public country;
  public loading:boolean=false;
 public currentcountry=[];
 public allcountries;
 public cnt=[];
 public flagofsearch:boolean=false;
 public code;
 public currencyresponse;
public language;
public languageresponse;
  //my object for header design 
  public header=[
    {
      'name':'Asia',
      'img':'https://www.carnegiecouncil.org/news/announcements/437/_res/id=Picture/Asia_satellite_plane_shaded.jpg',
      'Description':'Asia is usually defined as part of the landmass of Eurasia becoming the largest and most populous continent of the world with around 4 000 millions people. It is surrounded by the Pacific Ocean in the eastthe Arctic Ocean in the north and the Indian Ocean in the south'
    },
    {
      'name':'Africa',
      'img': 'https://sciencetrends-techmakaillc.netdna-ssl.com/wp-content/uploads/2017/11/Africa_satellite_orthographic-770x865.jpg',
      'Description':'Africa is the worlds second largest and second most-populous continent (behind Asia in both categories). At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earths total surface area and 20% of its land area. With 1.2 billion people as of 2016, it accounts for about 16% of the worlds human population'
    },
    {
      'name':'Oceania',
      'img':'https://c8.alamy.com/comp/JP30D9/oceania-map-australasia-polynesia-melanesia-micronesia-region-detailed-JP30D9.jpg',
      'Description':'Oceania is a geographic region comprising Melanesia, Micronesia, Polynesia and Australasia. Spanning the eastern and western hemispheres, Oceania covers an area of 8,525,989 square kilometres (3,291,903 sq mi) and has a population of 40 million'
    },
    {
      'name':'Europe',
      'img':'https://www.telegraph.co.uk/content/dam/books/2016/04/20/europemap_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg',
      'Description':'Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west and the Mediterranean Sea to the south. It comprises the westernmost part of Eurasia.'
    }
    ,{
      'name':'Americas',
      'img':'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Americas_satellite_map.jpg/1200px-Americas_satellite_map.jpg',
      'Description':'The Americas also collectively called America comprise the totality of the continents of North and South America. Together, they make up most of the land in Earths western hemisphereand comprise the New World.Along with their associated islands, they cover 8% of Earths total surface area and 28.4% of its land area.'
    }
  ]
  constructor(public router:ActivatedRoute,
    public httpservice:HttpserviceService,
    public toastr:ToastrService,
    public location:Location) { }

  ngOnInit() {
    this.name=this.router.snapshot.paramMap.get('name');
    this.code=this.router.snapshot.paramMap.get('code');
    this.language=this.router.snapshot.paramMap.get('langcode');
    console.log(this.code);
    
    if(this.name){
      
      this.countries();
    }
    for(let h of this.header){
      if(h.name==this.name){                    // to displaying information of selected region
        this.currentcountry.push(h);
        console.log(this.currentcountry);
      }
      
    }
 if(this.code){

   this.getcur();
 }
 if(this.language){
  this.getlang();
 }
  }
  // goback button
  public goback=()=>{
    this.location.back();
  }
  //all countries http service request
  public countries = ()=>{
    this.loading=true;
    this.httpservice.country(this.name).subscribe(
      data=>{
        this.allcountries=data;
        
        this.loading=false;
        this.toastr.success('successful!');
      },
      error=>{
        this.loading=false;
        
        this.toastr.warning('some error occured!')
      }
    )
  }
// logic for displaying country through search bar 
  public singlecountry=()=>{
    if(this.cnt.length>0){
      this.cnt=[];
    }
    console.log(this.country);
     for(let all of this.allcountries){    
       if(this.country==all.name){
          this.cnt.push(all);
         
         }
     }
     console.log(this.cnt);
     if(this.cnt.length==0){
       this.toastr.error('check spellings','sorry!');
     }
     else{
       this.flagofsearch=true;
       
     }
  }
  // currency http service request
  public getcur=()=>{
    this.loading=true;
    this.httpservice.currency(this.code).subscribe(
      data=>{
        this.currencyresponse=data;
        this.loading=false;
        console.log(this.currencyresponse);
      },
      error=>{
     console.log('error');
     this.loading=false;
      }
    )
  }

  // language http request
  public getlang=()=>{
    this.loading=true;
    this.httpservice.language(this.language).subscribe(
      data=>{
        this.languageresponse=data;
        console.log(this.languageresponse);
        this.toastr.success('success!');
        this.loading=false;
      },
      error=>{
        this.loading=false;
        this.toastr.error('error!');
      }
    )
  }

}
