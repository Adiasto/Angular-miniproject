 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { AppComponent } from './app.component';
import { ContentFetchService } from './services/content-fetch.service'
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserReposComponent } from './components/user-repos/user-repos.component'
import {AppConstant} from './app.constant'

const routes:Routes =[
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path: 'home/:login', component:UserInfoComponent},
      {path: 'home/repos/:login', component:UserReposComponent}
        ];

@NgModule(
{
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
}
)
export class AppRouterModule
{

}