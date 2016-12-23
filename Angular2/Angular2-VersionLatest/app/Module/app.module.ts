import { NgModule }      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {PageComponent} from "../Component/page/page.component";
import {MenuComponent} from "../Component/Heading/menu.component";
import {BodyModule,Components } from './body.module';
import {FooterComponent} from "../Component/Footer/footer.component";

@NgModule({
  imports:      [ BrowserModule,CommonModule,BodyModule],
  declarations: [ PageComponent,MenuComponent,FooterComponent,Components],
  bootstrap:    [ PageComponent]
})

export class AppModule { 

}