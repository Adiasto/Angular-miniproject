import { Component, OnInit } from '@angular/core';
import {ContentFetchService} from 'app/content-fetch.service'
import {Router} from "@angular/router";
import {AppConstant} from 'app/app.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ContentFetchService]
})
export class HomeComponent implements OnInit {

  data=[]
  constructor(private _content:ContentFetchService,private router:Router,private constants:AppConstant){}
  ngOnInit()
  {
    this.getInfo();
  }

  getInfo()
  {
    this._content.getInfo().subscribe(datapoint=>this.data=datapoint);
  }
  showInfo(login:string)
  {
    this.router.navigate(['home',login]);
  }
}
