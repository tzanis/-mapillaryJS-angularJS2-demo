"use strict";
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () { return 'https://a.mapillary.com/v2'; },
        enumerable: true,
        configurable: true
    });
    AppSettings.CLIENT_ID = 'YUxzU2MyWnBWcmtUQUMwQUd6czhiUToyZTg0YzAxNWUxODFiOTAz';
    return AppSettings;
}());
exports.AppSettings = AppSettings;
//# sourceMappingURL=app.settings.js.map