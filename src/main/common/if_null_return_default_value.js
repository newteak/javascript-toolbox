function if_null_return_default_value(x) {
  // legacy code
  // if (x === null || x === undefined) {
  //   return `Hey, I'm default value`;
  // }
  // return x;

  return x ?? 'DEFAULT VALUE';
}

export default if_null_return_default_value;

console.log(if_null_return_default_value('hola'));    // hola
console.log(if_null_return_default_value('hola'));    // hola
console.log(if_null_return_default_value(null));      // Hey, I'm default value
console.log(if_null_return_default_value(undefined)); // Hey, I'm default value
