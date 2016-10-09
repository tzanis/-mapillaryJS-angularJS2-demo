import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';

import { ImageFile } from "./imageFile";
import { AppSettings } from "./app.settings";

@Injectable()
export class ImagesService {

    constructor(private http: Http) { }

    selectedImage: ImageFile;

    getImages(): Promise<ImageFile[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', AppSettings.CLIENT_ID);
        params.set('page', '0');
        return this.http
            // Using Page 49 in order to have images with location attribute filled.
            .get(AppSettings.API_ENDPOINT + '/search/s/ul?max_lat=180&max_lon=90&min_lat=-90&min_lon=-180&limit=10&starred=true&page=49', { search: params })
            .toPromise()
            .then(response => response.json()['ss'] as ImageFile[])
            .catch(err => console.log(err));
    }

    getImage(id: number): Promise<ImageFile> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('client_id', AppSettings.CLIENT_ID);
        return this.http
            .get(AppSettings.API_ENDPOINT + '/im/'+id, { search: params })
            .toPromise()
            .then(response => response.json() as ImageFile)
            .catch(err => console.log(err));
    }

}