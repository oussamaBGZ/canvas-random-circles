const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const randomColor = (min, max) => Math.floor((Math.random() * max - min) + min)
const ArrayAnimate = []
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Animate {
    constructor(x, y, dx, dy, rayon, color1, color2, color3) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.rayon = rayon
        this.color1 = color1
        this.color2 = color2
        this.color3 = color3
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.rayon, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${this.color1},${this.color2},${this.color3})`
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 30;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.fill()
    }

    update() {

        this.draw()

        if (this.x > window.innerWidth - this.rayon || this.x < this.rayon) {
            this.dx = -this.dx
        }
        if (this.y > window.innerHeight - this.rayon || this.y < this.rayon) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
    }
}

for (let i = 0; i < 100; i++) {
    let rayon = 50
    let x = Math.random() * (window.innerWidth - rayon * 2) + rayon
    let y = Math.random() * (window.innerHeight - rayon * 2) + rayon
    let dx = (Math.random() - 0.5) * 2
    let dy = (Math.random() - 0.5) * 2
    ArrayAnimate.push(new Animate(x, y, dx, dy, rayon, randomColor(0, 255), randomColor(0, 255), randomColor(0, 255)))
}

(function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    requestAnimationFrame(animate)
    ArrayAnimate.forEach(Element => Element.update())
})()
