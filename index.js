const getResult = (maxLoopNumber, loopNumber, itemsList, count, indexList, resultList) => {
    if(maxLoopNumber >= itemsList.length){
        return []
    }
    const counterMax = maxLoopNumber === loopNumber ? itemsList.length - 1 : itemsList.length
    for (let i = count; i < counterMax; i++ ){
        const arr = []
        indexList[loopNumber - 1] = i
        if(loopNumber <= 1){
            indexList.forEach(index => {
                arr.push(itemsList[index])
            })            
        }else {
            getResult(maxLoopNumber, loopNumber - 1, itemsList, i + 1, indexList, resultList)
        }
        if(arr.length !== 0){
            resultList.push(arr)
        }
    }
    return resultList
}

const chooseDistance = (t, k, itemsList) => {
    let results = getResult(k, k, itemsList, 0, new Array(k).fill(0), new Array())
    if(results.length !== 0){
        return results.map(item => {
          let sum = item.reduce((partialSum, a) => partialSum + a, 0)
          return sum
        }).filter(item => item <= t).sort().at(-1)
    }else{
        return null
    }
     
}

console.log(chooseDistance(174, 3, [51, 56, 58, 59, 61]))
console.log(chooseDistance(163, 3, [51]))
console.log(chooseDistance(230, 3, [ 91, 74, 73, 85, 73, 81, 87 ]))