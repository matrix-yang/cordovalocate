var exec = require('cordova/exec');

exports.locate = function(arg0, success, error) {
    exec(success, error, "CordovaLocate", "locate", [arg0]);
};
