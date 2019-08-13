const mapToNegativize = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(-arr[i]);
  }
  return result;
};

const mapToNoChange = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

const mapToDouble = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

const mapToSquare = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2);
  }
  return result;
};

const reduceToTotal = (arr, start = 0) => {
  let total = start;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const reduceToAllTrue = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) return false;
  }
  return true;
};

const reduceToAnyTrue = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return true;
  }
  return false;
};
