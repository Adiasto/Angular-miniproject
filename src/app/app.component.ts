import { Component,OnInit } from '@angular/core';
import {ContentFetchService} from "./services/content-fetch.service"
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContentFetchService]
})
export class AppComponent{
   data=[];
   constructor(private content:ContentFetchService,private router:Router){}
   ngOnInit()
   {
     this.getInfo();
   }

   getInfo()
   {
     this.content.getInfo().subscribe(datapoint=>this.data=datapoint);
   }
  homeClicked()
  {
     this.router.navigate(['/home']);
  }

}
