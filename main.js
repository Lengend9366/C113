function preload(){

}

function setup(){
canvas= createCanvas(500,400);
canvas.position(110,250);
video= createCapture(VIDEO);
video.hide();
}

function draw(){
   image(video,150,115,200,200);

   fill("red");
   stroke("blue");

   circle(50,50,70);
   circle(450,50,70);
   circle(50,350,70);
   circle(450,350,70);

   fill("gray");
   stroke("white");

   rect(81,32,340,30);
   rect(81,335,340,30);
   rect(35,78,30,240);
   rect(435,78,30,240);

   }

   function take_snapshot(){
       save("myimage.png");
   }




