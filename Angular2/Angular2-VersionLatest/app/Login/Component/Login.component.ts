import { Component, OnDestroy } from '@angular/core'
import { AuthenticateService } from '../../Services/Authenticate.Service'
import { User } from '../../Common.models/User.Model'
@Component({
    //moduleId:module.id,
    selector: 'Login',
    templateUrl: '/app/Login/Templates/Login.html'
})

export class LoginComponent implements OnDestroy {
    private user: User;
    chkRememberMe:boolean=false;
    constructor(private Authenticate: AuthenticateService, private u: User) {
        let data = this.getCookie('automation');
        if (data.length > 0) {
            this.user = JSON.parse(data);
            this.chkRememberMe=true;
        }
        else {
            this.user = u;
        }
    }
    login(user: User) {
        this.Authenticate.login(user)
    }
    ngOnDestroy() {
        this.user = null;
    }
    rememberMe() {
        if (this.chkRememberMe) {
            this.setCookie('automation', this.user, 365)
        }
        else {
            this.deleteCookie();
        }

    }

    private setCookie(cname: string, cvalue: Object, exdays: number): void {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
    }
    private getCookie(cname: string): string {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    private deleteCookie(): void {
        document.cookie = "automation=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

}