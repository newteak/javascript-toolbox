function if_null_return_default_value(x) {
  // legacy code
  // if (x === null || x === undefined) {
  //   return `Hey, I'm default value`;
  // }
  // return x;

  return x ?? 'DEFAULT VALUE';
}

export default if_null_return_default_value;

