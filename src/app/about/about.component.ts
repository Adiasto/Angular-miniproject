import { Component, OnInit } from '@angular/core';
import { AppConstant } from 'app/app.constant'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private constants:AppConstant) { 
    
  }

}
