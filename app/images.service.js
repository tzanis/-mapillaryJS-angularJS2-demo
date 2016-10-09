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
var http_1 = require('@angular/http');
var app_settings_1 = require("./app.settings");
var ImagesService = (function () {
    function ImagesService(http) {
        this.http = http;
    }
    ImagesService.prototype.getImages = function () {
        var params = new http_1.URLSearchParams();
        params.set('client_id', app_settings_1.AppSettings.CLIENT_ID);
        params.set('page', '0');
        return this.http
            .get(app_settings_1.AppSettings.API_ENDPOINT + '/search/s/ul?max_lat=180&max_lon=90&min_lat=-90&min_lon=-180&limit=10&starred=true&page=49', { search: params })
            .toPromise()
            .then(function (response) { return response.json()['ss']; })
            .catch(function (err) { return console.log(err); });
    };
    ImagesService.prototype.getImage = function (id) {
        var params = new http_1.URLSearchParams();
        params.set('client_id', app_settings_1.AppSettings.CLIENT_ID);
        return this.http
            .get(app_settings_1.AppSettings.API_ENDPOINT + '/im/' + id, { search: params })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return console.log(err); });
    };
    ImagesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImagesService);
    return ImagesService;
}());
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map