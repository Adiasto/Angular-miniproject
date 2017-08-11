import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {ContentFetchService} from 'app/content-fetch.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  login:string="";
  UsersData=[];
  repos="repos";
  constructor(private _rout:ActivatedRoute,private _content:ContentFetchService,private _router:Router) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo()
  {
     this.login=this._rout.snapshot.params['login'];
    this._content.getUserInfo(this.login).subscribe(UserData=>this.UsersData=UserData);
  }

  showRepo()
  {
    this._router.navigate(['/home/repos',this.login]); 
  }
}
