mouseevent = ""
var last_position_of_x,last_position_of_y;
colour = "blue";
width = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(){
    mouseevent="down";
}

canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(){
    mouseevent="up";
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(){
    mouseevent="leave";
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_x = e.clientX-canvas.offsetLeft;
    current_position_of_y = e.clientY-canvas.offsetTop;
    if(mouseevent =="down"){
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle= colour;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        console.log(current_position_of_y,current_position_of_x);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}