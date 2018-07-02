import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-countryview',
  templateUrl: './countryview.component.html',
  styleUrls: ['./countryview.component.css']
})
export class CountryviewComponent implements OnInit {
  public name;
  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
    this.name=this.router.snapshot.paramMap.get('name');
    console.log(this.name);
  }

}
