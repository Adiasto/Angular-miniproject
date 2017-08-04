import { Component,OnInit } from '@angular/core';
import {ContentFetchService} from "./content-fetch.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContentFetchService]
})
export class AppComponent{
   data=[];
   constructor(private _content:ContentFetchService){}
   ngOnInit()
   {
     this._content.getInfo().subscribe(datapoint=>this.data=datapoint);
   }
}
