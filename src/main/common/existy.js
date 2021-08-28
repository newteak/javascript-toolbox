/**
 * existy는 존재 여부를 알려주는 함수
 *
 * existy(null);             // => false
 * existy(undefined);        // => false
 * existy({}.notHere);       // => false
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

module.exports = {
  existy
};
