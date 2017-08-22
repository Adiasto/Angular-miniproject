import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppConstant} from 'app/app.constant';

@Injectable()
export class ContentFetchService {
  constructor(private http:Http,private constants:AppConstant) { }
   private url:string=this.constants.BASEURL;
  getInfo()
  {
    return this.http.get(this.url).map((response:Response)=>response.json());
  }
  getUserInfo(user:string)
  {
    return this.http.get(this.url+"/"+user).map((responseU:Response)=>responseU.json());
  }

  getRepository(login:string)
  {
    return this.http.get(this.url+"/"+login+"/repos").map((responseR:Response)=>responseR.json());
  }
}
