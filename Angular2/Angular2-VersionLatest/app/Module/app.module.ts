import { NgModule }      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app.Routing';
import {CommonModule} from '@angular/common';
import {PageComponent} from "../Component/page/page.component";
import {MenuComponent} from "../Component/Heading/menu.component";
import {BodyModule,Components } from './body.module';
import {FooterComponent} from "../Component/Footer/footer.component";
import { HttpModule } from '@angular/http';
import {HttpCallService} from '../Services/HttpCall.Service';
import {AuthenticateService} from '../Services/Authenticate.Service';
@NgModule({
  imports:      [ BrowserModule,CommonModule,AppRoutingModule,BodyModule,HttpModule],
  declarations: [ PageComponent,MenuComponent,FooterComponent,Components],
  providers:[HttpCallService,AuthenticateService],
  bootstrap:    [ PageComponent]
})

export class AppModule { 

}