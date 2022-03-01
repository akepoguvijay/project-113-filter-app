function preload(){
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(100,300);

    video=createCapture(VIDEO);
    video.hide();

    filter_col="";
}

function draw(){
    image(video,0,0, 500,400);
    tint(filter_col);
    ellipse(56, 46, 55, 55);
    ellipse(56,350,55,55);
    ellipse(450,350,55,55);
    ellipse(450,50,55,55);
    rect(40, 75, 20, 250 );
    rect(440, 75, 20, 250 );
    rect(80, 35, 345, 20);
    rect(80, 345, 345, 20);
}
function filter_color(){
    filter_col=document.getElementById("color_name").value;
}

function take_snapshot(){
    save('filter_img.png');
}