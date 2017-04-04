import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ComponentFactory, ComponentRef } from '@angular/core'
import { HttpCallService } from '../../Services/HttpCall.Service';
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
    constructor(private httpService: HttpCallService, private _componentFactoryResolver: ComponentFactoryResolver) {
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
                if (tabItem.order == this.tabArray.length) {
                    this.NextText = 'Save';
                }
                else {
                    this.NextText = 'Next';
                }
                data.status = 1;
            }
            else {
                data.status = 0;
            }
        }, this);
    }

    nextClick(nextItem: any) {
        this.tabArray.filter(function (data) {
            if (data.order == nextItem.order + 1) {
                if (nextItem.order + 1 == this.tabArray.length) {
                    this.NextText = 'Save';
                }
                else {
                    this.NextText = 'Next';
                }
                data.status = 1;
            }
            else {

                data.status = 0;
            }
        }, this);
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
