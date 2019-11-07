const mapToNegativize = function(sourceArray){
    const newArray = []
    sourceArray.forEach((e) => {newArray.push(e*-1)})
    return newArray
}

const mapToNoChange = function(sourceArray){
    return sourceArray
}

const mapToDouble = function(sourceArray){
    const newArray = []
    sourceArray.forEach((e) => {newArray.push(e*2)})
    return newArray
}

const mapToSquare = function(sourceArray){
    const newArray = []
    sourceArray.forEach((e) => {newArray.push(e**2)})
    return newArray
}

const reduceToTotal = function(sourceArray, startingPoint=0){
    let runningTotal = startingPoint
    sourceArray.forEach((e) => runningTotal += e)
    return runningTotal
}

const reduceToAllTrue = function(sourceArray){
    let resultBool = true
    sourceArray.forEach((e) => {resultBool = (resultBool && !!e)})
    return resultBool
}

const reduceToAnyTrue = function(sourceArray){
    let resultBool = false
    sourceArray.forEach((e) => {resultBool = (resultBool || !!e)})
    return resultBool
}

