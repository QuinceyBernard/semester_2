var raindata; //declaring our raindata
var year = []; // array for the year variable
var winter = []; //array for the winter variable
var spring = [];
var summer = [];
var winter = [];
var annual = [];
var innercirc = 150; //variable for the size of the inner circle
var outercirc = 1300 + innercirc; //variable for the size of the outer circle
var points = 144; //the number of points that are to be displayed
var pointAngle = 360/points //working out how much of angle distance would be between points
var radius = outercirc/2; //variable that divides outercirc by two to get the "radius"
var  rainfallyear;
var winterrain;
var counter = 0;
var spacing = 0;
var vol = 0.5;
var reverb;
var sound_c;
var sound_eb;
var sound_g;

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
  
  rainfallyear = raindata.getColumn('year');
  winterrain = raindata.getColumn('winter');
  
  reverb = new p5.Reverb();
  sound_c.disconnect();
  sound_eb.disconnect();
  sound_g.disconnect();
  
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
                pop();
                
                push();
                translate(750,750); //translating the point of origin to the middle of the canvas
        
                        for(j=0; j<rainfallyear.length; j++){       // a for loop to run through my rainfall table of data
                            
                            var length = map(winterrain[j],111,609.9,0,725);      //mapping the winterrain array between certain values
                            var mathcos = cos([space]); //variable to work out the cosine of an angle [i]
                            var mathsin = sin([space]); //variable to work out the sine of an angle [i]
                            var c = (radius)*(mathsin);  //variable to calculate the radius multiplied by the sine angle (using pythagoraus for calculating unknown lengths)
                            var d = (radius)*(mathcos); //variable to calculate the radius multiplied by the cosine angle
                            var c1 = (length)*(mathsin); //variable to calculate the mapped length multiplied by the sine angle 
                            var d1 = (length)*(mathcos); //variable to calculate the mapped length multiplied by the cosine angle   
                            var space = ([j]*(pointAngle));
                           
                            var wintermusic = winterrain[j];
                           
                         
                            stroke(255);
                            strokeWeight(1);
                            line(0,0,c1,d1);    //drawing a line with origin 0,0 and second point at c1,d1 our calculated mapped values
                            noFill();
                            stroke(255);
                            strokeWeight(1);
                            ellipse(c1,d1,2.5,2.5); //drawing an ellipse at the end of our mapped line to assist with visualisation
                            
                            strokeWeight(1);
                            stroke(53,66,92,50);
                            line(0,0,c,d);  //drawing a line with origin 0,0 that then goes through our 2.5 degree spacing for loop
                            // spacing = spacing + 0.0001;
                        }
                pop();
                
                counter = counter + 2.5;
                if(counter == 360){
                    counter = 0;
                }
        
    
                   
                if(counter == 90){
                    if(wintermusic>300){
                        sound_c.setVolume(vol);
                        sound_c.play();
                        reverb.process(sound_c,3,2);
                        sound_eb.setVolume(vol);
                        sound_eb.play()
                        reverb.process(sound_eb,3,2);
                    } else {
                        sound_eb.setVolume(vol);
                        sound_eb.play();
                        reverb.process(sound_eb,3,2);
                        sound_g.setVolume(vol);
                        sound_g.play();
                        reverb.process(sound_g,3,2);
                    }
                }
}

