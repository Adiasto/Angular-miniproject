import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppConstant} from './app.constant';

@Injectable()
export class ContentFetchService {
  constructor(private _http:Http,private constants:AppConstant) { }
   private _url:string=this.constants.baseURL;
  getInfo()
  {
    return this._http.get(this._url).map((response:Response)=>response.json());
  }
  getUserInfo(user:string)
  {
    return this._http.get(this._url+"/"+user).map((responseU:Response)=>responseU.json());
  }

  getRepository(login:string)
  {
    return this._http.get(this._url+"/"+login+"/repos").map((responseR:Response)=>responseR.json());
  }
}
