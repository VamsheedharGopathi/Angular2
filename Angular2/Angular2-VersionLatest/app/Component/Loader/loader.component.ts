'use strict';

import { Component, Input, OnDestroy } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service';

@Component({
    selector: 'my-spinner',
    templateUrl: '/app/Templates/loader_component.html'
})
export class SpinnerComponent implements OnDestroy {


    private currentTimeout: any;
    private Timer: any;
    private isDelayedRunning: boolean = true;

    @Input()
    public delay: number = 300;

    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
            return;
        }

        if (this.currentTimeout) {
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }
    constructor(private httpCall: HttpCallService) {
        //this.isRunning=httpCall.RequestStatus();
       this.Timer = setInterval(() => {
            this.isRunning =httpCall.RequestStatus();
                console.log(httpCall.RequestStatus());
        }, 500);
    }


    private cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }
    
    private RequestStatus(): boolean {
        return this.httpCall.RequestStatus();
    }

    ngOnDestroy(): any {
        this.cancelTimeout();
        clearTimeout(this.Timer);
    }
}