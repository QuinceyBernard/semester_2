var raindata; //declaring our raindata
var year = []; // array for the year variable
var winter = []; //array for the winter variable
var spring = [];
var summer = [];
var winter = [];
var annual = [];
var innercirc = 150; //variable for the size of the inner circle
var outercirc = 1300 + innercirc; //variable for the size of the outer circle
var points = 360; //the number of points that are to be displayed
var pointAngle = 360/points //working out how much of angle distance would be between points
var radius = outercirc/2; //variable that divides outercirc by two to get the "radius"
var  rainfallyear;
var winterrain;
var springrain;
var summerrain;
var autumnrain;
var yearlyrain;
var buttonspring;
var counter = 0;
var spacing = 0;
var vol = 0.5;
var reverb;
var sound_c;
var sound_eb;
var sound_g;
var w = 0;
var tick = 0;

function preload(){
    raindata = loadTable("loadJSON.php","csv","header");
    // sound_a = loadSound('notes/piano-a.wav');
    // sound_b = loadSound('notes/piano-b.wav');
    // sound_bb = loadSound('notes/piano-bb.wav');
    sound_c = loadSound('notes/piano-c.wav');
    // sound_cs = loadSound('notes/piano-cs.wav');
    // sound_d = loadSound('notes/piano-d.wav');
    // sound_e = loadSound('notes/piano-e.wav');
    sound_eb = loadSound('notes/piano-eb.wav');
    // sound_f = loadSound('notes/piano-f.wav');
    // sound_fs = loadSound('notes/piano-fs.wav');
    sound_g = loadSound('notes/piano-g.wav');
    // sound_gs = loadSound('notes/piano-gs.wav');
}

function setup() {
  createCanvas(1500,1500);
  angleMode(DEGREES);
  
  frameRate(15);

  buttonspring = createButton('SPRING');
  buttonspring.position(1250,37.5);
  buttonspring.mousePressed(getSpring)

 
  
  
  rainfallyear = raindata.getColumn('Year');
  winterrain = raindata.getColumn('Winter');
  springrain = raindata.getColumn('Spring');
  summerrain = raindata.getColumn('Summer');
  autumnrain = raindata.getColumn('Autumn');
  yearlyrain = raindata.getColumn('Yearly');
  
  reverb = new p5.Reverb();
  sound_c.disconnect();
  sound_eb.disconnect();
  sound_g.disconnect();
  
}


function getSpring(){
    clear();
}

function draw() {
    background(4,35,53);

                push();
                translate(750,750);
                stroke(53,66,92);
                strokeWeight(1);
                fill(4,35,53);
                ellipse(0,0,innercirc); //drwaing an ellipse with radius innercirc defined earlier
                noFill();
                ellipse(0,0,(outercirc));   //drawing an ellipse with radius outercirc defined earlier
                
                fill(0);
                strokeWeight(1);
                x = (radius)*(sin([tick]));
                y = (radius)*(cos([tick]));
                console.log(x)
                line(0,0,x,y);
                tick +=0.1;
                pop();
            
                push();
                translate(750,750); //translating the point of origin to the middle of the canvas
        
                    for(j=0; j<rainfallyear.length; j++){// a for loop to run through my rainfall table of data
                      
                        push();
                        // for(w=0;w<360;w+=4){
                            stroke(140,173,167);
                            strokeWeight(10);
                            line(600,-643,640,-643);
                            textSize(10);
                            noStroke();
                            fill(255);
                            text('WINTER',600,-640);
                        
                            var winterlen = map(winterrain[j],56,611,0,725);      //mapping the winterrain array between certain values
                                var c1 = (winterlen)*(sin([w])); //variable to calculate the mapped length multiplied by the sine angle 
                                var d1 = (winterlen)*(cos([w])); //variable to calculate the mapped length multiplied by the cosine angle   
                                    stroke(140,173,167);
                                    strokeWeight(1);
                                    line(0,0,c1,d1);    //drawing a line with origin 0,0 and second point at c1,d1 our calculated mapped values
                                    noFill();
                                    stroke(140,173,167);
                                    strokeWeight(1);
                                    ellipse(c1,d1,2.5,2.5); //drawing an ellipse at the end of our mapped line to assist with visualisation
                                    w += 1;
                        // }
                        
                        pop();
                            stroke(163,177,138);
                            strokeWeight(10);
                            line(600,-703,640,-703);
                            textSize(10);
                            noStroke();
                            fill(255);
                            text('SPRING',600,-700);
                        // for(x=1;x<360;x+=4){
                            var springlen = map(springrain[j],56,611,0,725);
                                var e1 = (springlen)*(sin([w]));
                                var f1 = (springlen)*(cos([w]));
                                    stroke(163,177,138);
                                    strokeWeight(1);
                                    line(0,0,e1,f1);    //drawing a line with origin 0,0 and second point at c1,d1 our calculated mapped values
                                    noFill();
                                    stroke(163,177,138);
                                    strokeWeight(1);
                                    ellipse(e1,f1,2.5,2.5);
                                    w += 1;
                        // }
                        
                        // for(y=2;y<360;y+=4){
                            stroke(226,194,198);
                            strokeWeight(10);
                            line(600,-683,640,-683);
                            textSize(10);
                            noStroke();
                            fill(255);
                            text('SUMMER',600,-680);
                            var summerlen = map(summerrain[j],56,611,0,725);
                                var g1 = (summerlen)*(sin([w]));
                                var h1 = (summerlen)*(cos([w]));
                                    stroke(226,194,198);
                                    strokeWeight(1);
                                    line(0,0,g1,h1);    //drawing a line with origin 0,0 and second point at c1,d1 our calculated mapped values
                                    noFill();
                                    stroke(226,194,198);
                                    strokeWeight(1);
                                    ellipse(g1,h1,2.5,2.5);
                                    w += 1;
                        // }
                        
                        // for(z=3;z<360;z+=4){
                            stroke(142,68,61);
                            strokeWeight(10);
                            line(600,-663,640,-663);
                            textSize(10);
                            noStroke();
                            fill(255);
                            text('AUTUMN',600,-660);
                            var autumnlen = map(autumnrain[j],56,611,0,725);
                                var i1 = (autumnlen)*(sin([w]));
                                var j1 = (autumnlen)*(cos([w]));
                                    stroke(142,68,61);
                                    strokeWeight(1);
                                    line(0,0,i1,j1);    //drawing a line with origin 0,0 and second point at c1,d1 our calculated mapped values
                                    noFill();
                                    stroke(142,68,61);
                                    strokeWeight(1);
                                    ellipse(i1,j1,2.5,2.5);
                                    w += 1;
                        // }
                            // var wintermusic = winterrain[j];
                           
                    }
                    w=0;
                pop();

}
//http://bluegalaxy.info/codewalk/2017/11/29/p5-js-how-to-build-a-clock/
//https://www.openprocessing.org/sketch/387974/
//https://p5js.org/examples/input-clock.html
