import { Component, Input } from "@angular/core"
import { AuthenticateService } from "../../Services/Authenticate.Service"
@Component({
	moduleId: module.id,
	selector: 'menu-component',
	templateUrl: '/app/Templates/menu_Component.html'
})

export class MenuComponent {
	isLoggedIn: boolean = false;
	constructor(private Authenticate: AuthenticateService) {
		setInterval(() => {
               this.isLoggedIn = this.Authenticate.isLoggedIn();
        }, 1000);
	}
	@Input() user: String;
	logout(){
		this.Authenticate.logOut();
	}
}