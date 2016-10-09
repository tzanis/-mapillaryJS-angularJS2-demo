import { Component } from '@angular/core';
import { ImageFile } from './imageFile';
import { ImagesService } from './images.service';

@Component({
    selector: 'demo-app',
    providers: [ImagesService],
    template: `
        <router-outlet ></router-outlet>
    `
})
export class AppComponent {
    images: ImageFile[];
    selectedImage: ImageFile;

    constructor(private imagesService: ImagesService) { }

    getImages(): void {
        this.imagesService.getImages().then(images => this.images = images);
    }

    ngOnInit(): void {
        this.getImages();
    }

}
