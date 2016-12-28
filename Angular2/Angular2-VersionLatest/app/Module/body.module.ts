import { NgModule }      from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
import { DivTableComponent } from '../Component/Body/divTable.component';
import { BodyComponent } from '../Component/Body/body.component';
@NgModule({
 // imports:      [ BrowserModule]
})

export class BodyModule{

}
export const Components=[ BodyComponent,DivTableComponent];
