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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var image_list_component_1 = require('./image-list.component');
var image_viewer_component_1 = require('./image-viewer.component');
var images_service_1 = require("./images.service");
var user_service_1 = require("./user.service");
require('rxjs/add/operator/toPromise');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/list',
                        pathMatch: 'full'
                    },
                    {
                        path: 'list',
                        component: image_list_component_1.ImageListComponent
                    },
                    {
                        path: 'view/:id',
                        component: image_list_component_1.ImageListComponent
                    }
                ]),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                image_list_component_1.ImageListComponent,
                image_viewer_component_1.ImageViewerComponent
            ],
            providers: [
                images_service_1.ImagesService,
                user_service_1.UserService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map