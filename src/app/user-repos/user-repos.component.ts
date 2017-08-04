import { Component, OnInit } from '@angular/core';
import { ContentFetchService} from 'app/content-fetch.service';
import { ActivatedRoute} from "@angular/router"
import {Observable} from "rxjs/Observable"
import {AppConstant} from 'app/app.constant'

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {


  constructor(private _content:ContentFetchService,private _rout:ActivatedRoute,private constants:AppConstant) { }

  _repos:Observable<any>;

  ngOnInit() {
    let login = this.constants.loginUser;
    this._content.getRepository(login).subscribe(Repos=>this._repos=Repos);
  }

}