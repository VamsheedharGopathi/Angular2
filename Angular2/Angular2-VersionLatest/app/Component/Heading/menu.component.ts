import {Component,Input} from "@angular/core"

@Component({
    moduleId: module.id,
	selector:'menu-component',
	templateUrl:'/app/Templates/menu_Component.html'
})

export class MenuComponent{
	 @Input()
  user:String;
}