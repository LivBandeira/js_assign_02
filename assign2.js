let myArr = [1, 'dog', 'one']

function myArrLoop(myArr) {
    myArr.forEach((item, index) => {
     console.log(`${index}: ${item}`)
  })
}

myArrLoop(myArr)