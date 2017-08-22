import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ContentFetchService } from 'app/services/content-fetch.service'
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserReposComponent } from './components/user-repos/user-repos.component'
import {AppConstant} from './app.constant'
import {AppRouterModule} from './app.routerModule'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserInfoComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [ContentFetchService,AppConstant],
  bootstrap: [AppComponent]
})
export class AppModule { }
