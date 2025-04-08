(function () {
    "use strict";

    function onDeviceReady() {
        cordova.exec(null, null, 'CustomUrlHandler', 'noop', []);
    }

    document.addEventListener('deviceready', onDeviceReady, false);

    module.exports = {};
}());
