import { Component,OnInit } from '@angular/core';
import {ContentFetchService} from "./content-fetch.service"
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContentFetchService]
})
export class AppComponent{
   data=[];
   constructor(private _content:ContentFetchService,private _router:Router){}
   ngOnInit()
   {
     this.getInfo();
   }

   getInfo()
   {
     this._content.getInfo().subscribe(datapoint=>this.data=datapoint);
   }
  homeClicked()
  {
    this._router.navigate(['/home']);
  }

}
