let myArr = [1, 2, 3]

function myArrNew(myArr) {
    let myArr2 = []
    myArr.forEach((item, index) => {
        myArr2.push(item + 2)
    })
    return myArr2
}

myArrNew(myArr)