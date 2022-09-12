let isSquare = function(n) {
    if(n == 0) return true
    if(Number.isInteger(n/Math.sqrt(n))){
      return true
    }
    return false
  };