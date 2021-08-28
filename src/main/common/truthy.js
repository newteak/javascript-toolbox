import existy from "./existy.js";

/**
 *
 * truthy(null); // => false
 * truthy(undefined); // => false
 * truthy({}.notHere);       // => false
 * truthy((function(){})()); // => false
 * truthy(0); // => true
 * truthy(false); // => false
 * truthy(''); // => true
 *
 * @param {*} x
 *
 * @return {boolean}
 * */
function truthy(x) {
  return (x !== false) && existy(x);
}

export default truthy;
