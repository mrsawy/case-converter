

/**
 * Locale character mapping rules.
 */
 const Locale = {
    regexp: null,
    map: {},
  };
  
  /**
   * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
   */
  const SUPPORTED_LOCALE = {
    tr: {
      regexp: /\u0130|\u0049|\u0049\u0307/g,
      map: {
        İ: "\u0069",
        I: "\u0131",
        İ: "\u0069",
      },
    },
    az: {
      regexp: /\u0130/g,
      map: {
        İ: "\u0069",
        I: "\u0131",
        İ: "\u0069",
      },
    },
    lt: {
      regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
      map: {
        I: "\u0069\u0307",
        J: "\u006A\u0307",
        Į: "\u012F\u0307",
        Ì: "\u0069\u0307\u0300",
        Í: "\u0069\u0307\u0301",
        Ĩ: "\u0069\u0307\u0303",
      },
    },
  };
  
  /**
   * Localized lower case.
   */
  function localeLowerCase(str, locale) {
    const lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang) return lowerCase(str.replace(lang.regexp, (m) => lang.map[m]));
    return lowerCase(str);
  }
  
  /**
   * Lower case as a function.
   */
  function lowerCase(str) {
    return str.toLowerCase();
  }
  
//   module.exports = {
//     Locale,
//     SUPPORTED_LOCALE,
//     localeLowerCase,
//     lowerCase,
//   };
  








/**
 * @typedef {Object} Options
 * @property {RegExp|RegExp[]} [splitRegexp] - Regexp to split the input string into parts.
 * @property {RegExp|RegExp[]} [stripRegexp] - Regexp to remove characters from the input string.
 * @property {string} [delimiter=" "] - Delimiter to use when joining the parts of the input string.
 * @property {(part: string, index: number, parts: string[]) => string} [transform=lowerCase] - Function to transform each part of the input string.
 */

/**
 * Normalize the string into something other libraries can manipulate easier.
 *
 * @param {string} input - The input string to normalize.
 * @param {Options} [options={}] - The options to use for normalization.
 * @returns {string} The normalized string.
 */
 function noCase(input, options = {}) {
    const {
      splitRegexp = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
      stripRegexp = /[^A-Z0-9]+/gi,
      transform = lowerCase,
      delimiter = " ",
    } = options;
  
    let result = replace(
      replace(input, splitRegexp, "$1\0$2"),
      stripRegexp,
      "\0"
    );
    let start = 0;
    let end = result.length;
  
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0") start++;
    while (result.charAt(end - 1) === "\0") end--;
  
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
  }
  
  /**
   * Replace `re` in the input string with the replacement value.
   *
   * @param {string} input - The input string to replace.
   * @param {RegExp|RegExp[]} re - The regular expression or array of regular expressions to use for replacing.
   * @param {string} value - The replacement value.
   * @returns {string} The replaced string.
   */
  function replace(input, re, value) {
    if (re instanceof RegExp) return input.replace(re, value);
    return re.reduce((input, re) => input.replace(re, value), input);
  }






  const input2 = document.getElementById("hexinput");
const output2 = document.getElementById("hexoutput");
const dot_caseBtn2 = document.querySelector(`.dot-case`);

// dot_caseBtn2.onclick = ()=>{
//     output.value= noCase(input.value);
// };
