/**
 *
 * existy judge target is existy or not
 *
 * example
 * existy(null);             // => false
 * existy(undefined);        // => false
 * existy({}.nope);          // => false
 * existy((function(){})()); // => false
 * existy(0);                // => true
 * existy(false);            // => true
 * [null, undefined, 1, 2, false].map(existy) // => [ false, false, true, true, true ]
 *
 * @param {*} x
 *
 * @return {boolean}
 * */
function existy(x) {
  return x != null;
}

export default existy;
