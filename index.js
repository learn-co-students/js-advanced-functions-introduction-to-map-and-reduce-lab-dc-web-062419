const mapToNegativize = src => {
    let arr = [];
    for (let i = 0; i < src.length; i++) {
      arr.push(-src[i]);
    }
    return arr;
  };
  
  const mapToNoChange = src => {
    let arr = [];
    for (let i = 0; i < src.length; i++) {
      arr.push(src[i]);
    }
    return arr;
  };
  
  const mapToDouble = src => {
    let arr = [];
    for (let i = 0; i < src.length; i++) {
      arr.push(src[i] * 2);
    }
    return arr;
  };
  
  const mapToSquare = src => {
    let arr = [];
    for (let i = 0; i < src.length; i++) {
      arr.push(src[i] ** 2);
    }
    return arr;
  };
  
  const reduceToTotal = (src, start = 0) => {
    let total = start;
    for (let i = 0; i < src.length; i++) {
      total += src[i];
    }
    return total;
  };
  
  const reduceToAllTrue = src => {
    for (let i = 0; i < src.length; i++) {
      if (!src[i]) return false;
    }
    return true;
  };
  
  const reduceToAnyTrue = src => {
    for (let i = 0; i < src.length; i++) {
      if (src[i]) return true;
    }
    return false;
  };
  