
var canvas=document.getElementById("ballCanvas");
var ctx=canvas.getContext("2d");
ctx.fillStyle="#FF0000";
var world
function onload() {

    var gravity = new b2Vec2(0, 30);
    world = new b2World(gravity);
    //world.DestroyBody(world.GetBodyList()) // destroy first body
    createBody(5,5,b2_dynamicBody)
   createBody(0,0,b2_staticBody)

    // var bd = new b2BodyDef;
    // var ground = world.CreateBody(bd);
  
    // // var shape = new b2PolygonShape;
    // shape.vertices.push(new b2Vec2(-4, -1));
    // shape.vertices.push(new b2Vec2(4, -1));
    // shape.vertices.push(new b2Vec2(4, 0));  
    // shape.vertices.push(new b2Vec2(-4, 0));
    // ground.CreateFixtureFromShape(shape, 0.0);
  
  
    // shape = new b2PolygonShape;
    // shape.vertices.push(new b2Vec2(-4, -0.1));
    // shape.vertices.push(new b2Vec2(-2, -0.1));
    // shape.vertices.push(new b2Vec2(-2, 2));
    // shape.vertices.push(new b2Vec2(-4, 3));
    // ground.CreateFixtureFromShape(shape, 0.0);
  
    // shape = new b2PolygonShape;
    // shape.vertices.push(new b2Vec2(2, -0.1));
    // shape.vertices.push(new b2Vec2(4, -0.1));
    // shape.vertices.push(new b2Vec2(4, 3));
    // shape.vertices.push(new b2Vec2(2, 2));
    // ground.CreateFixtureFromShape(shape, 0.0);
    // ground.SetTransform(new b2Vec2(50,5),0)




    requestAnimationFrame(gameLoop);
   
    




}

lastFrame = new Date().getTime();

const gameLoop = function() {
    var tm = new Date().getTime();
    requestAnimationFrame(gameLoop);
    var dt = (tm - lastFrame) / 1000;
    if(dt > 1/15) { dt = 1/15; }
    update(dt);
    lastFrame = tm;
};

function update(){
    
    world.Step(1/50,10,10)
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath()
    this.render()

    
}

// function drawSquare(position){
//     ctx.stroke();
//     ctx.rect(position.x,position.y,150,100);
// }

function createBody(x,y, type){
    bd = new b2BodyDef();
    var circle = new b2CircleShape();
    bd.type = type;
    var body = world.CreateBody(bd);
    circle.position.Set(x, y);
    circle.radius = 5;
    body.CreateFixtureFromShape(circle, 0.5);
    body.SetTransform(new b2Vec2(x, y),0)
}
function render() {
    for (var i = 0, max = world.bodies.length; i < max; i++) {
      var body = world.bodies[i];
      var maxFixtures = body.fixtures.length;
      var transform = body.GetTransform();
      for (var j = 0; j < maxFixtures; j++) {
        var fixture = body.fixtures[j];
        draw(fixture,transform);
      }
    }
}

function draw(fixture, transform) {
    
    const SCALE = 10
    ctx.arc(transform.p.x*SCALE,transform.p.y*SCALE,fixture.shape.radius*SCALE,0,Math.PI*2);
    ctx.stroke()
 
}




onload();