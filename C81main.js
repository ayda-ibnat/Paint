canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = "blue"

ctx.beginPath()
ctx.strokeStyle = color 
ctx.lineWidth = 2 
ctx.arc(200,200,35,0,2*Math.PI)
ctx.stroke()
