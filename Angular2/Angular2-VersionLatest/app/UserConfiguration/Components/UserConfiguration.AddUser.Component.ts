import { Component } from '@angular/core'
import { HttpCallService } from '../../Services/HttpCall.Service';
import { ConfigurationData } from '../../Services/LocalStorage';
import { AuthenticateService } from '../../Services/Authenticate.Service';
import { User } from '../../Common.models/User.Model'
@Component({
    selector: 'addUser-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddUser.html'
})

export class AddUserComponent {
    //tabArray: Array<{ name: string, status: Number }>;
    userEmailID:string;
    user: User;
    constructor(private httpService: HttpCallService, private u: User,private configurationData:ConfigurationData,private authenticateService:AuthenticateService) {
        u.ProjectName=authenticateService.GetLoginUser().ProjectName;
        this.configurationData.AddUser = u;
    }

    SearchUser()
    {
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = 'get';
        this.httpService.Url = 'api/ECH/Services';
        this.httpService.param = 'GetProcesses';
        this.httpService.CallHttpService().subscribe(
            res => this.ParseResult(res),
            error => this.ParseError(error));
    }
    private ParseResult(result:any){
        this.configurationData.AddUser.
    }

    private ParseError(error:any){
        
    }
}