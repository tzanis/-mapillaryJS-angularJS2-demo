"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var images_service_1 = require("./images.service");
var router_1 = require('@angular/router');
var ImageListComponent = (function () {
    function ImageListComponent(imagesService, router, route) {
        this.imagesService = imagesService;
        this.router = router;
        this.route = route;
        this.moment = moment;
    }
    ImageListComponent.prototype.onSelect = function (image, $event) {
        $event.preventDefault();
        var link = ['/view', image.mkey];
        this.selectedImage = image;
        this.router.navigate(link);
    };
    ImageListComponent.prototype.getImages = function () {
        var _this = this;
        this.imagesService.getImages().then(function (images) { return _this.images = images; });
    };
    ImageListComponent.prototype.ngOnInit = function () {
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (typeof id == 'undefined') {
                return;
            }
        });
        this.getImages();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ImageListComponent.prototype, "images", void 0);
    ImageListComponent = __decorate([
        core_1.Component({
            selector: 'image-list',
            templateUrl: './app/templates/layout.html',
            styleUrls: ['./app/styles/layout.css']
        }), 
        __metadata('design:paramtypes', [images_service_1.ImagesService, router_1.Router, router_1.ActivatedRoute])
    ], ImageListComponent);
    return ImageListComponent;
}());
exports.ImageListComponent = ImageListComponent;
//# sourceMappingURL=image-list.component.js.map