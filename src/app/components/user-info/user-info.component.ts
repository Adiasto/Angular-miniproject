import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {ContentFetchService} from 'app/services/content-fetch.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  login:string="";
  UsersData=[];
  constructor(private rout:ActivatedRoute,private content:ContentFetchService,private router:Router) { }

  ngOnInit() {
     this.getUserInfo();
  }

  getUserInfo()
  {
     this.login=this.rout.snapshot.params['login'];
     this.content.getUserInfo(this.login).subscribe(UserData=>this.UsersData=UserData);
  }

  showRepo()
  {
     this.router.navigate(['/home/repos',this.login]); 
  }
}
