import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from "./test.component";
import {userLoginComponent} from "./User_login.component";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
// 增加路由规则

const  appRoutes: Routes=[
  {
    path: 'cirisis-center', component:TestComponent
  },
  {
    path: 'hero/:id' ,component:userLoginComponent
  },
  {
    /**
     * 一般设置为初始值，并且会重定向到/heroses路径
     * */
    path: '',
    redirectTo: '/heroes',
    pathMatch:'full'
  },
  {
    /**
     * 常用于以上所有路由都没发现 则会匹配到这里
     * */
    path:'**',
    component:TestComponent
  }
]



@NgModule({
  declarations: [
    AppComponent
    , TestComponent
    , userLoginComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    // ,RouterModule.forRoot(appRoutes)  路由规则

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
