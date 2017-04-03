import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ComponentFactory, ComponentRef } from '@angular/core'
import { HttpCallService } from '../../Services/HttpCall.Service';
import { AddUserComponent } from "./UserConfiguration.AddUser.Component";
import { UserQueueConfigurationComponent } from "./UserConfiguration.AddQueue.Configuration";
import { Queue } from '../../Common.models/Queues.Model'
@Component({
    selector: 'addUser-Component',
    templateUrl: '/app/UserConfiguration/Templates/AddConfiguration.html',

})

export class AddConfiguartionComponent implements AfterViewInit {
    // @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
    tabArray: Array<{ name: string, status: Number, html: Component }>;
    genericCollection = [];
    error: any
    constructor(private httpService: HttpCallService, private _componentFactoryResolver: ComponentFactoryResolver) {
        this.genericCollection = [];
        var data = [];
        var dat = this._componentFactoryResolver;
        data.push({ name: "AddUser", status: 1, html: AddUserComponent });
        data.push({ name: "Queue", status: 0, html: UserQueueConfigurationComponent });//
        data.push({ name: "Configuration", status: 0, html: AddUserComponent });
        data.push({ name: "Events", status: 0, html: AddUserComponent });
        data.push({ name: "Services", status: 0, html: AddUserComponent });
        this.tabArray = data;
    }

    tabClick(tabItem: any) {
      
        this.tabArray.filter(function (data) {
            if (data.name == tabItem.name) {
                data.status = 1;
            }
            else {
                data.status = 0;
            }
        });
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
