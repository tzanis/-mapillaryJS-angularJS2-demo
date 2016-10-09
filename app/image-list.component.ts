import { Component, Input } from '@angular/core';
import { ImageFile } from './imageFile';
import { ImagesService } from "./images.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'image-list',
    templateUrl: './app/templates/layout.html',
    styleUrls: ['./app/styles/layout.css']
})
export class ImageListComponent {
    @Input()
    images: ImageFile[];

    selectedImage: ImageFile;
    moment = moment;

    onSelect(image: ImageFile, $event: any): void {
        $event.preventDefault();
        let link = ['/view', image.mkey];
        this.selectedImage = image;
        this.router.navigate(link);
    }

    constructor(
        private imagesService: ImagesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    getImages(): void {
        this.imagesService.getImages().then(images => this.images = images);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if( typeof id == 'undefined' ){
                return;
            }
        });

        this.getImages();
    }

}