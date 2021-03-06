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

  /**
   * Library namespace.
   */

  var string = exports.string = {};

  /**
   * Library version.
   */

  string.version = '0.2.0';

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

  /**
   * Splice 'self'.
   *
   * @param {String} self string
   * @param {Number} i i
   * @param {Number} howmany how many
   * @param {String} substr sub string
   * @return {String} 'self' spliced
   * @api public
   */

  string.splice = function (self, i, howmany, substr) {
    return self
      .split('')
      .splice(i, howmany, substr)
      .join('');
  };

  /**
   * Test if 'self' starts with 'start'.
   *
   * @param {String} self string
   * @param {String} start start
   * @return {Boolean} true if 'self' starts with 'start', false otherwise.
   * @api public
   */

  string.startsWith = function (self, start) {
    return self.length >= start.length
      && self.substring(0, start.length) === start;
  };

  /**
   * Test if 'self' ends with 'end'.
   *
   * @param {String} self string
   * @param {String} end end
   * @return {Boolean} true if 'self' ends with 'end', false otherwise.
   * @api public
   */

  string.endsWith = function (self, ends) {
    return self.length >= ends.length
      && self.substring(self.length - end.length) === end;
  };

  /**
   * Camelize 'self'.
   *
   * @param {String} self string
   * @return {String} 'self' camelized.
   * @api public
   */

  string.camelize = function (self) {
    return self
      .trim()
      .replace(/(\-|_|\s)+(.)?/g, function (match, separator, chr) {
        return chr ? chr.toUpperCase() : '';
      });
  };

  /**
   * Undescorize 'self'.
   *
   * @param {String} self string
   * @return {String} 'self' underscored
   * @api public
   */

  string.underscorize = function (self) {
    return self
      .trim()
      .replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
      .replace(/\-|\s+/g, '_')
      .toLowerCase();
  };

  /**
   * Dasherize 'self'.
   *
   * @param {String} self string
   * @return {String} 'self' dasherized
   * @api public
   */

  string.dasherize = function (self) {
    return self
      .trim()
      .replace(/([a-z\d])([A-Z]+)/g, '$1-$2')
      .replace(/^([A-Z]+)/, '-$1')
      .replace(/\_|\s+/g, '-')
      .toLowerCase();
  };

  /**
   * Truncate 'self'.
   *
   * @param {String} self string
   * @param {Number} length max length
   * @param {String} [truncation = '...'] truncation string
   * @return {String} 'self' truncated
   * @api public
   */

  string.truncate = function (self, length, truncation) {
    truncation || (truncation = truncation '...');
    return self.slice(0, length) + truncation;
  };

  /**
   * Get words in 'self' delimited by 'delimiter'.
   *
   * @param {String} self string
   * @param {String} [delimiter = ' '] delimiter
   * @return {Array} words in 'self' delimited by 'delimiter'
   * @api public
   */

  string.words = function (self, delimiter) {
    delimiter || (delimiter = " ");
    return self.split(delimiter);
  };

}(this));