import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.Routing';
import { CommonModule } from '@angular/common';
import { PageComponent } from "../Component/page/page.component";
import { MenuComponent } from "../Component/Heading/menu.component";
import { BodyModule, Components } from './body.module';
import { SpinnerComponent } from "../Component/Loader/loader.component";
import { FooterComponent } from "../Component/Footer/footer.component";
import { HttpModule } from '@angular/http';
import { HttpCallService } from '../Services/HttpCall.Service';
import { AuthenticateService } from '../Services/Authenticate.Service';
import { LocalStorageService,SessionStorage } from '../Services/LocalStorage';
import {SharedModule} from '../SharedResource/Shared.Module';
import {ChartComponent} from '../SharedResource/Components/ChartComponent'
//import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [BrowserModule, CommonModule, AppRoutingModule,SharedModule, BodyModule, HttpModule],
  declarations: [PageComponent, MenuComponent, FooterComponent, Components, SpinnerComponent],
  providers: [HttpCallService, AuthenticateService, LocalStorageService,SessionStorage],
  bootstrap: [PageComponent],
  entryComponents:[ChartComponent]//,
 // exports: [ListComponent]
})

export class AppModule {

}