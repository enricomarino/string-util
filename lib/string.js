
/*!
 * string
 * JavaScript string utilities library
 * Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
 * MIT License
 */

 !(function (exports) {


  var undefined
    , toString = {}.toString
    ;

  exports.string = {};

  /**
   * Library version.
   */
  string.version = '0.0.0';

  /**
   * Test if 'self' is a string
   *
   * @param {String} self
   * @return {Boolean} true if 'self' is a string, false otherwise
   * @api public
   */

  string.is = function (self) {
    return '[object String]' === toString.call(self);
  };

 }(this));