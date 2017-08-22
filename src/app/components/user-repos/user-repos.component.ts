import { Component, OnInit } from '@angular/core';
import { ContentFetchService} from 'app/services/content-fetch.service';
import { ActivatedRoute} from "@angular/router"
import {Observable} from "rxjs/Observable"
import {AppConstant} from 'app/app.constant'

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {


  constructor(private content:ContentFetchService,private rout:ActivatedRoute,private constants:AppConstant) { }

  login:string="";
  repos:Observable<any>;

  ngOnInit() {
    this.getRepository();
  }

  getRepository()
  {
    this.login=this.rout.snapshot.params['login'];
    this.content.getRepository(this.login).subscribe(Repos=>this.repos=Repos);
  }
}