'use strict'

import {Component,Input} from '@angular/core'

@Component({
    selector:'sharedUserConfiguartion-Component',
    templateUrl:'/app/SharedResource/Templates/UserConfigurationShared.html'
})

export class UserConfigurationSharedComponent{
    @Input() Items=[];
}