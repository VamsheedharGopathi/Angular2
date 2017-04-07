import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ComponentFactory, ComponentRef } from '@angular/core'
import { HttpCallService } from '../../Services/HttpCall.Service';
import { ConfigurationData } from '../../Services/LocalStorage';
import { AddUserComponent } from "./UserConfiguration.AddUser.Component";
import { UserQueueConfigurationComponent } from "./UserConfiguration.AddQueue.Configuration";
import { UserConfigConfigurationComponent } from "./UserConfiguration.AddConfig";
import { UserEventConfigurationComponent } from "./UserConfiguration.AddEvent.Configuration";
import { UserServicesConfigurationComponent } from "./UserConfiguration.AddServices.Configuration";
@Component({
    selector: 'addUser-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddConfiguration.html',

})

export class AddConfiguartionComponent implements AfterViewInit {
    // @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
    tabArray: Array<{ order: number, name: string, status: Number, html: Component }>;
    genericCollection = [];
    error: any
    NextText: string = 'Next';
    constructor(private httpService: HttpCallService, private _componentFactoryResolver: ComponentFactoryResolver, private configurationData: ConfigurationData) {
        this.genericCollection = [];
        var data = [];
        var dat = this._componentFactoryResolver;
        data.push({ order: 1, name: "AddUser", status: 1, html: AddUserComponent });
        data.push({ order: 2, name: "Queue", status: 0, html: UserQueueConfigurationComponent });//
        data.push({ order: 3, name: "Configuration", status: 0, html: UserConfigConfigurationComponent });
        data.push({ order: 4, name: "Events", status: 0, html: UserEventConfigurationComponent });//
        data.push({ order: 5, name: "Services", status: 0, html: UserServicesConfigurationComponent });
        this.tabArray = data;
    }

    tabClick(tabItem: any) {
        this.tabArray.filter(function (data) {
            if (data.name == tabItem.name) {
                this.NextText = tabItem.order == this.tabArray.length ? 'Save' : 'Next';
                data.status = 1;
            }
            else {
                data.status = 0;
            }
        }, this);
    }

    nextClick(nextItem: any) {
        if (nextItem.order == this.tabArray.length) {
            this.saveUserConfiguration();
        }
        else {
            this.tabArray.filter(function (data) {
                if (data.order == nextItem.order + 1) {
                    this.NextText = nextItem.order + 1 == this.tabArray.length ? 'Save' : 'Next';
                    data.status = 1;
                }
                else {
                    data.status = 0;
                }
            }, this);
        }
    }

    private saveUserConfiguration() {
        var data =
            {
                User: this.configurationData.AddUser,
                Queue: this.configurationData.AddQueue.filter(function (data) { return data.Status }),
                ConfigurationFiles: this.configurationData.AddConfiguration.filter(function (data) { return data.Status }),
                Events: this.configurationData.AddEvent.filter(function (data) { return data.Status }),
                Services: this.configurationData.AddServiceS.filter(function (data) { return data.Status }),
            };
        this.httpService.OpenRequest();
        this.httpService.httpMethodtype = 'post';
        this.httpService.Url = 'api/ECH/User/SaveUsers';
        this.httpService.param = '=' + JSON.stringify(data);
        this.httpService.CallHttpService().subscribe(
            res => this.ParseResult(res.result),
            error => this.ParseError(error));
    }

    private ParseResult(result: any) {
        this.httpService.CloseRequest();
    }
    private ParseError(error: any) {
        alert('error occured')
        this.httpService.CloseRequest();
    }
    ngAfterViewInit() {
        this.tabArray.forEach(function (data) {
            //let factory = this._componentFactoryResolver.resolveComponentFactory(data.html);
            //this.cmpRef = this.target.createComponent(factory);
            // this.cmpRef.instance;
            // to access the created instance use
            // this.compRef.instance.someProperty = 'someValue';
            // this.compRef.instance.someOutput.subscribe(val => doSomething());
        }, this);
    }

}
