import _ from 'underscore';

/**
 * Retrun true when when target is blank
 *
 * @param {String} target
 *
 * @return {boolean}
 * */
function isBlank(target) {
  return (_.isNull(target) || _.isUndefined(target) || _.isEmpty(String.prototype.trim.call(target)));
}

export default isBlank;
