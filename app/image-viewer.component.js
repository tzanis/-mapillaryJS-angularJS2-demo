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
var router_1 = require('@angular/router');
var app_settings_1 = require("./app.settings");
var imageFile_1 = require('./imageFile');
var images_service_1 = require('./images.service');
var user_service_1 = require('./user.service');
var ImageViewerComponent = (function () {
    function ImageViewerComponent(imagesService, userService, route) {
        this.imagesService = imagesService;
        this.userService = userService;
        this.route = route;
        this.isLoading = true;
        this.userData = null;
        this.moment = moment;
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        var that = this;
        this.mly = new Mapillary.Viewer('mapillary-viewer', app_settings_1.AppSettings.CLIENT_ID, null);
        this.mly.on('loadingchanged', function (loading) {
            that.isLoading = loading;
        });
        this.getImage();
    };
    ImageViewerComponent.prototype.getImage = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (typeof id == 'undefined') {
                return;
            }
            _this.imagesService.getImage(id)
                .then(function (image) {
                _this.image = image;
                _this.mly.moveToKey(_this.image.key);
                // Fetch User data
                _this.userService.getUser(image.user)
                    .then(function (user) {
                    console.log('User:', user);
                    _this.userData = user;
                });
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', imageFile_1.ImageFile)
    ], ImageViewerComponent.prototype, "image", void 0);
    ImageViewerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'image-viewr',
            templateUrl: './templates/image-viewer.component.html',
            styleUrls: ['./styles/image-viewer.component.css']
        }), 
        __metadata('design:paramtypes', [images_service_1.ImagesService, user_service_1.UserService, router_1.ActivatedRoute])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());
exports.ImageViewerComponent = ImageViewerComponent;
//# sourceMappingURL=image-viewer.component.js.map