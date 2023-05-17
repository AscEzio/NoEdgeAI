const getRandomNum = function (min, max, countNum) {
    let arr = [];
    // 在此处补全代码
    function produceNum() {
        let num = Math.floor((Math.random() * (max - min)) + min)
        console.log(num);
        if (arr.indexOf(num) === -1) { //判断不存在就push
            arr.push(num)
        } else {
            produceNum() //存在了重新调用
        }
        if (arr.length < countNum) { //判断数组长度是否小于所需长度
            produceNum();
        }
    }
    produceNum()
    return arr;
}

let greenPointNum = 200

const greenPointX = getRandomNum(0, 1500, greenPointNum)
const greenPointY = getRandomNum(0, 1200, greenPointNum)

let greenPoint = greenPointX.map((x)=>{
    return {x:x}
})

greenPointY.forEach((y, index)=>{
    greenPoint[index].y = y
})

let x = 0
while (x < greenPointNum) {
    greenPoint[x].width = Math.floor(Math.random()*20)
    greenPoint[x].height = Math.floor(Math.random()*20)
    x++
}

console.log(greenPoint);