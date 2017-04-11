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
    userEmailID: string;
    user: User;
    constructor(private httpService: HttpCallService, private u: User, private configurationData: ConfigurationData, private authenticateService: AuthenticateService) {
        u.ProjectName = authenticateService.GetLoginUser().ProjectName;
        this.configurationData.AddUser = u;
    }

    SearchUser() {
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = 'Post';
        this.httpService.Url = 'api/ECH/User/GetUserByEmailID';
        this.httpService.param = this.userEmailID.trim();
        this.httpService.CallHttpService().subscribe(
            res => this.ParseResult(res),
            error => this.ParseError(error));
    }
    private ParseResult(result: any) {
        var userData = result.user;
        this.user = new User();
        this.user.EmailID = userData.EmailID;
        this.user.FirstName = userData.FirstName;
        this.user.LastName = userData.LastName;
        this.user.ProjectName = userData.ProjectName;
        this.user.ExpiryDays = userData.ExpiryDays;
        this.user.PhoneNumber = userData.PhoneNumber;
        this.user.ID = userData.ID;
        this.configurationData.AddUser = this.user;

        var userqueue = result.userQueue;
        if (userqueue.lenght == 0) {
            this.configurationData.AddQueue.filter(function (q) {
                q.Status = false;
            })
        }
        else {
            userqueue.filter(function (uq) {
                this.configurationData.AddQueue.filter(function (q) {
                    if (uq.queueID == q.ID) {
                        q.Status = uq.status;
                    }
                })
            }, this);
        }

        var userFileSystem = result.userFileSystem;
        if (userFileSystem.lenght == 0) {
            this.configurationData.AddConfiguration.filter(function (c) {
                c.Status = false;
            })
        }
        else {
            userFileSystem.filter(function (ufs) {
                this.configurationData.AddConfiguration.filter(function (c) {
                    if (ufs.fileID == c.ID) {
                        c.Status = ufs.status;
                    }
                })
            }, this);
        }

        var userEvents = result.userEvents;
        if (userEvents.lenght == 0) {
            this.configurationData.AddEvent.filter(function (e) {
                e.Status = false;
            })
        }
        else {
            userEvents.filter(function (ue) {
                this.configurationData.AddEvent.filter(function (e) {
                    if (ue.eventID == e.ID) {
                        e.Status = ue.status;
                    }
                })
            }, this);
        }

        var userServices = result.userServices;
        if (userEvents.lenght == 0) {
            this.configurationData.AddServiceS.filter(function (s) {
                s.Status = false;
            })
        }
        else {
            userServices.filter(function (us) {
                this.configurationData.AddServiceS.filter(function (s) {
                    if (us.serviceID == s.ID) {
                        s.Status = us.status;
                    }
                })
            }, this);
        }

        this.httpService.CloseRequest();
    }
    private ParseError(error: any) {
        this.httpService.CloseRequest();
    }
}