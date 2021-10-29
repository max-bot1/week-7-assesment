const numArr = [1,2,-2]

function addTozero (numArr) {
    let count = 0
    let sum = 0
    for (let i = 0; i < numArr.length; i++){
        return console.log(numArr[i] + 1)
        // if(count === numArr.length){
        //     return sum
        // } else {
        //     count++
        // }
        // if(sum!= 0 && count != numArr.length){
        //     count++
        // } else if (count === numArr.length){
        //     return false
        // } else {
        //     return true
        // }
    }
}

addTozero(numArr)

const stringArr = ['Hi', 'Hello', 'YAHOOOOOOOOOOOOOOOOOOO', 'Hey',]

function findLongestWord (stringArr) { //O(n)
    let lengthArr = ['']
    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i].length > lengthArr[0].length){
            lengthArr.splice(0,1, stringArr[i])
        }
    }
    return lengthArr[0]
}

console.log(findLongestWord(stringArr))