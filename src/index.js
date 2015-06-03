"use strict";

var protagonist = require("protagonist")
  , logger
  ;

var _writeWarnings = function( type, result, text ) {
  result.warnings.forEach(function(warning) {
    warning.location.forEach(function(location) {
      logger[type](
        "mimosa-protagonist: " +
        warning.message +
        " - line:" +
        text.substr(0, location.index).split("\n").length
      );
    });
  });
};

var _execute = function( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    for (var i = 0, len = options.files.length; i < len; i++) {
      var file = options.files[i]
        , text = file.outputFileText.toString()
        ;

      protagonist.parse(text, function(error, result) {
        if (error) {
          logger.error( "Error parsing [[ " + file.inputFileName + "]]");
          _writeWarnings( "error", {warnings: [error]}, text);
        }

        if (result.warnings && result.warnings.length) {
          _writeWarnings( "warn", result, text );
        }

        if (i >= len) {
          next();
        }
      });
    }
  } else {
    next();
  }
};

exports.registration = function( mimosaConfig, register ) {
  logger = mimosaConfig.log;
  register( ["add", "update", "buildFile"], "betweenCompileWrite", _execute );
};
