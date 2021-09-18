import _ from 'underscore';

function isEmpty(target) {
  return (_.isNull(target) || _.isUndefined(target) || _.isEmpty(String.prototype.trim.call(target)));
}

export default isEmpty;
