
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


  /**
   * Test if 'self' is blank
   *
   * @param {String} self
   * @return {Boolean} true if 'self' is blank, false otherwise
   * @api public
   */

  string.is.blank = function (self) {
    return !!self.match(/^\s*$/);
  };

  /**
   * Capitalize 'self'
   *
   * @param {String} self
   * @return {String} 'self' capitalized
   * @api public
   */

  string.capitalize = function (self) {
    return self.charAt(0).toUpperCase()
      + self.substring(1).toLowerCase();
  };

}(this));