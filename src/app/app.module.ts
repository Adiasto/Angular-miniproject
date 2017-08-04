import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ContentFetchService } from './content-fetch.service'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserReposComponent } from './user-repos/user-repos.component'
import {AppConstant} from './app.constant'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserInfoComponent,
    UserReposComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
    [
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path: 'home/:login', component:UserInfoComponent},
      {path: 'home/login/repos', component:UserReposComponent}
    ])
  ],
  providers: [ContentFetchService,AppConstant],
  bootstrap: [AppComponent]
})
export class AppModule { }
