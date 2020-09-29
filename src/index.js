
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}

const max = (coll) => {
    if (coll.length === 0) {
      return null;
    }
  
    let [max, ...rest] = coll;
    for (const value of rest) {
      if (value > max) {
        max = value;
      }
    }
  
    return max;
  };

const avg = (coll) => {
  const count = coll.length;

  if (count === 0) {
    return null;
  }

  let sum = 0;
  for (const item of coll) {
    sum += item;
  }

  return sum / count;
};
