import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var jquery : any;
declare var $ : any;

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  public regions = [
    {
      'name':'Asia',
     'numberofcountries': 47,
     'img' : 'https://www.tajmahal.gov.in/images/slider/slider.jpg'
    },
    {
      'name' : 'Africa',
      'numberofcountries': 54,
      'img':'http://www.primaryhomeworkhelp.co.uk/egypt/images/sp.jpg'

    },
   
    {
      'name':'Americas',
      'numberofcountries':35,
      'img':'https://i.ndtvimg.com/i/2018-01/statue-of-liberty_650x400_61516584069.jpg'
    },
    {
      'name':'Oceania',
      'numberofcountries':14,
      'img':'http://www.traveller.com.au/content/dam/images/1/1/k/j/n/k/image.gallery.galleryLandscape.620x414.11kg16.png/1459821698905.jpg'
    },
    {
      'name':'Europe',
      'numberofcountries':43,
      'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs-GUNYJLmTwSAVEtUJ7nH-bmDYlslGScbcQXVM72qk09iuqg'
    }
  ]
  constructor(public toastr:ToastrService) { }
  public loading:boolean = false;
  ngOnInit() {
    $(".hider").hide();
   
    
  }

    public load(){
      this.loading=true;
     setTimeout(()=>{
      this.unload();
       },1000)
     }
   public unload(){
  
  this.loading=false;
  this.toastr.success('Regions data is loaded!','scroll down!');
  $(".hider").show();
    }
  


}
