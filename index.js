let canvas=document.querySelector(".canvas")
let ctx=canvas.getContext("2d")
console.log(ctx)
let animationStarted = false;
let hue=0

canvas.height=window.innerHeight
canvas.width=window.innerWidth

let obj={
    x:undefined,
    y:undefined
}
 let arr=[]
class Particle{
    constructor(){
        this.x=obj.x
        this.y=obj.y
        this.size=Math.random()*15+1
        this.color=`hsl(${hue}, 100%, 50%)`
    }

    update(){
         this.x+=Math.random()*3-1.5
         this.y+=Math.random()*3-1.5
         if(this.size>=0.2)this.size-=0.1

    }

    draw(){
ctx.beginPath()
ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
// ctx.fillStyle=this.color
ctx.fillStyle="white"
ctx.fill()
ctx.stroke()
    }
}

canvas.addEventListener("mousemove",(event)=>{
    hue++
      obj.x=event.x
      obj.y=event.y
     for(let i=0;i<7;i++){
        arr.push(new Particle())
     }
//        if (!animationStarted) {
//     Animate();
//     animationStarted = true;
//   }

})

function handle(){
 for(let i=0;i<arr.length;i++){
        arr[i].update()
        arr[i].draw()
        if(arr[i].size<=0.3){
            arr.splice(i,1)
            i--
        }
     }
}

function Animate(){
    // ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "rgba(0,0,0,0.02)"    
     ctx.fillRect(0, 0, canvas.width,canvas.height);
    handle()
    requestAnimationFrame(Animate)
}

Animate()


