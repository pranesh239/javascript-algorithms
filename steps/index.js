/* */

function steps(n) {
  let steps = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        steps += "#";
      } else {
        steps += " ";
      }
    }
    steps += "\n";
  }
  return steps;
}

module.exports = steps;
