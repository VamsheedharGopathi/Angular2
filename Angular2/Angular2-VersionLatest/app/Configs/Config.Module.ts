import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule } from '@angular/http';
import {ConfigRoutingModule,ConfigComponents} from './Config.Router';
import {HttpCallService} from '../Services/HttpCall.Service';
@NgModule({
    imports:[ CommonModule,FormsModule,,HttpModule],
    declarations:[ConfigComponents],
    providers:[HttpCallService]
})


export class ConfigModule{

}