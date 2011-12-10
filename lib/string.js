
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
   * @param {String} self string
   * @return {Boolean} true if 'self' is a string, false otherwise
   * @api public
   */

  string.is = function (self) {
    return '[object String]' === toString.call(self);
  };


  /**
   * Test if 'self' is blank
   *
   * @param {String} self string
   * @return {Boolean} true if 'self' is blank, false otherwise
   * @api public
   */

  string.is.blank = function (self) {
    return !!self.match(/^\s*$/);
  };

  /**
   * Capitalize 'self'
   *
   * @param {String} self string
   * @return {String} 'self' capitalized
   * @api public
   */

  string.capitalize = function (self) {
    return self.charAt(0).toUpperCase()
      + self.substring(1).toLowerCase();
  };

  /**
   * Chop 'self' by 'step'
   *
   * @param {String} self string
   * @param {Number} step step
   * @return {Array} parts of 'self' chopped
   */

  string.chop = function (self, step) {
    var result = []
      , len = self.length
      , i;

    step || (step = len);

    for (i = 0; i < len; i += step) {
      result.push(self.slice(i, i + step));
    }

    return result;
  };

  /**
   * Count 'substr' occurrencies in 'self'
   *
   * @param {String} self string
   * @param {String} substr substring
   * @return {Number} number of occurrencies of 'substr' in 'self'
   * @api public
   */

  string.count = function (self, substr) {
    var result = 0
      , len = self.length
      , step = substr.length
      , index = 0
      , i
      ;

    for (i = 0; i < len; i += index + step) {
      index = self.indexOf(substr, i);
      if (index < 0) {
        return result;
      }
      result += 1;
    }

    return result;
  };

}(this));