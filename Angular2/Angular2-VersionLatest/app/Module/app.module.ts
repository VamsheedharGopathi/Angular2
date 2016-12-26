import { NgModule }      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {PageComponent} from "../Component/page/page.component";
import {MenuComponent} from "../Component/Heading/menu.component";
import {BodyModule,Components } from './body.module';
import {FooterComponent} from "../Component/Footer/footer.component";
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule,CommonModule,BodyModule,HttpModule],
  declarations: [ PageComponent,MenuComponent,FooterComponent,Components],
  bootstrap:    [ PageComponent]
})

export class AppModule { 

}