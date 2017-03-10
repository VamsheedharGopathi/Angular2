import { Component, Input } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
    selector: 'list-component',
    templateUrl: '/app/Templates/list_component.html'
})

export class ListComponent {
    @Input() Collection = [];

   // constructor(private router:Router){

    //}
}