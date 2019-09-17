/**
 * This function validates the given BST
 * @param {Node} node the node that have to be validated
 * @param {Number} min this should be the minimum value compared to the passed node data
 * @param {Number} max this should be the maximum value compared to the passed node data
 * @return {Boolean} a boolean result
 * */
const validator = (node, min = null, max = null) => {
  if (min !== null && node.data < min) {
    return false;
  }

  if (max !== null && node.data > max) {
    return false;
  }

  if (node.left && !validator(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validator(node.right, node.data, max)) {
    return false;
  }

  return true;
};

module.exports.validator = validator;
