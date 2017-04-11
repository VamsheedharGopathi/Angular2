import { Injectable } from '@angular/core'

@Injectable()

export class LocalStorageService {
    localStorage: any = { Request: false };
}

export class ConfigurationData {
    AddUser: any;
    AddQueue = [];
    AddConfiguration = [];
    AddEvent = [];
    AddServiceS = []
}

export class SessionStorage {
    session = new Object();
}