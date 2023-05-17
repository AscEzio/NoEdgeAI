import * as PIXI from "pixi.js"
import { greenPoint } from "./greenPoint"

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgfloorColor: 0x000000,
    resolution: window.devicePixelRatio || 1
})

document.body.appendChild(app.view)

const width = 2
const height = 2

for (let y = 0; y < window.innerWidth; y = y + (width * 2)) {
    for (let x = 0; x < window.innerHeight * 3; x = x + (height * 2)) {
        const rectangle = new PIXI.Graphics()
        rectangle.beginFill(0x545454)
        rectangle.drawRect(x, y, width, height)
        rectangle.endFill()
        app.stage.addChild(rectangle)
    }
}

//第一象限
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(point.x, point.y, point.width, point.height)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(point.y, point.x, point.height, point.width)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})

//第二象限
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(window.innerWidth - point.x - point.width, point.y, point.width, point.height)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(window.innerWidth - point.y - point.height, point.x, point.height, point.width)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})

//第三象限
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(point.x, window.innerHeight - point.y - point.height, point.width, point.height)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(point.y, window.innerHeight - point.x - point.width, point.height, point.width)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})

//第四象限
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(window.innerWidth - point.x - point.width, window.innerHeight - point.y - point.height, point.width, point.height)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})
greenPoint.forEach((point) => {
    const rectangle = new PIXI.Graphics()
    rectangle.beginFill(0x00A800)
    rectangle.drawRect(window.innerWidth - point.y - point.height, window.innerHeight - point.x - point.width, point.height, point.width)
    rectangle.endFill()
    app.stage.addChild(rectangle)
})

