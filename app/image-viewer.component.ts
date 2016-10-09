import { Component, OnInit, Input }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

import { AppSettings } from "./app.settings";
import { ImageFile }                    from './imageFile';
import { ImagesService }                from './images.service';
import { UserService }                from './user.service';

declare var Mapillary: any;

@Component({
    moduleId: module.id,
    selector: 'image-viewr',
    templateUrl: './templates/image-viewer.component.html',
    styleUrls: ['./styles/image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
    @Input()
    image: ImageFile;
    isLoading: boolean = true;
    mly: any;
    userData: any = null;
    moment = moment;

    constructor(
        private imagesService: ImagesService,
        private userService: UserService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {

        let that = this;

        this.mly = new Mapillary.Viewer(
            'mapillary-viewer',
            AppSettings.CLIENT_ID,
            null
        );

        this.mly.on('loadingchanged', function (loading: boolean) {
            that.isLoading = loading;
        })

        this.getImage();
    }

    getImage(): void{
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if( typeof id == 'undefined' ){
                return;
            }
            this.imagesService.getImage(id)
                .then(image => {
                    this.image = image;
                    this.mly.moveToKey(this.image.key);
                    // Fetch User data
                    this.userService.getUser(image.user)
                        .then(user => {
                            console.log('User:',user);
                            this.userData = user;
                        });
            });
        });
    }
}
