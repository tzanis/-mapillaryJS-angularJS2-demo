import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';
import { AppSettings } from "./app.settings";

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUser(username: string): Promise<any> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', AppSettings.CLIENT_ID);
        return this.http
            .get(AppSettings.API_ENDPOINT + '/u/'+username, { search: params })
            .toPromise()
            .then(response => response.json())
            .catch(err => console.log(err));
    }

}