
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

  string.version = '0.1.0';

  /**
   * Test if 'self' is a string.
   *
   * @param {String} self string
   * @return {Boolean} true if 'self' is a string, false otherwise
   * @api public
   */

  string.is = function (self) {
    return '[object String]' === toString.call(self);
  };


  /**
   * Test if 'self' is blank.
   *
   * @param {String} self string
   * @return {Boolean} true if 'self' is blank, false otherwise
   * @api public
   */

  string.is.blank = function (self) {
    return !!self.match(/^\s*$/);
  };

  /**
   * Capitalize 'self'.
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
   * Chop 'self' by 'step'.
   *
   * @param {String} self string
   * @param {Number} step step
   * @return {Array} parts of 'self' chopped
   * @api public
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
   * Count 'substr' occurrencies in 'self'.
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

  /**
   * Get chars of 'self'.
   *
   * @param {String} self string
   * @return {Array} chars of 'self'
   * @api public
   */

  string.chars = function (self) {
    return self.split('');
  };

  /**
   * Escape html.
   *
   * @param {String} self string
   * @return {String} string escaped
   * @api public
   */

  string.escapeHTML = function (self) {
    return self
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, "&apos;");
  };

  /**
   * Unescape html.
   *
   * @param {String} self string
   * @return {String} string unescaped
   * @api public
   */

  string.unescapeHTML = function (self) {

    return self
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
  };

  /**
   * Escape regular expression.
   *
   * @param {String} self string
   * @return {String} string unescaped
   * @api public
   */

  string.escapeRegExp = function (self) {
    return self.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1');
  };

  /**
   * Insert 'substr' in 'self' from the 'i'-th char.
   *
   * @param {String} self string
   * @param {String} substr substring
   * @param {Number} [i = self.length]
   * @return {String} 'self' with 'substr' inserted from the 'i'-th char
   * @api public
   */

  string.insert = function (self, substr, i) {
    i || (i = self.length);

    return self
      .split('')
      .splice(i, 0, substr)
      .join('');
  };

  /**
   * Test if 'self' includes 'substr'
   *
   * @param {String} self string
   * @param {String} substr substring
   * @return {Boolean} true if 'self' includes 'substr', false otherwise
   * @api public
   */

  string.includes = function (self, substr) {
    return self.indexOf(substr) !== -1;
  };

  /**
   * Return lines.
   *
   * @param {String} self string
   * @return {Array} lines.
   * @api public
   */

  string.lines = function (self) {
    return self.split('\n');
  };

}(this));