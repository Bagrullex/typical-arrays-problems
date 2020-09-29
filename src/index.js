
exports.min = function min (array) {
    if (!array) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }

    let len = array.length;
    let min = Infinity;

    while (len--) {
        if (array[len] < min) {
            min = array[len]
        }
    }
    return min;
}
  

exports.max = function max (array) {
    if (!array) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }

    let [max, ...rest] = array;
    for (const value of rest) {
      if (value > max) {
        max = value;
      }
    }
  
    return max;
}

exports.avg = function avg (array) {
    if (!array) {
        return 0;
    }
    if (array.length === 0) {
        return 0;
    }
    
    const count = array.length;

    if (count === 0) {
      return 0;
    }
  
    let sum = 0;
    for (const item of array) {
      sum += item;
    }
  
    return sum / count;
}
