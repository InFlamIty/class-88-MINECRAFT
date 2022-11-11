var canvas = new fabric.Canvas("myCanvas")
player_object = ""
block_object = ""
playerX = 200
playerY = 200
block_width = 30
block_height = 30
function player()
{
    fabric.Image.fromURL("player.png" , function (img) {
        player_object = img
        player_object.scaleToWidth(30)
        player_object.scaleToHeight(60)
        player_object.set({
            top: playerY , left: playerX
        });
        canvas.add(player_object)
    })
}
function block(blocks)
{
    fabric.Image.fromURL(blocks , function (img) {
      block_object = img
      block_object.scaleToWidth(block_width)
      block_object.scaleToHeight(block_height)
      block_object.set({
        top: playerY , left: playerX
      })
      canvas.add(block_object)
    })
}
window.addEventListener("keydown" , myKeydown)
function myKeydown(e)
{
  keypressed = e.keyCode
  console.log(keypressed)
  if (e.shiftKey == true && keypressed == "80"){
    block_width = block_width + 10
    block_height = block_height + 10
    document.getElementById("width").innerHTML = block_width
    document.getElementById("height").innerHTML = block_height
  }
  if (e.shiftKey == true && keypressed == "77") {
    block_width = block_width - 10
    block_height = block_height - 10
    document.getElementById("width").innerHTML = block_width
    document.getElementById("height").innerHTML = block_height
  }
  if (keypressed == "67") {
    block("cloud.jpg")
    console.log("c")
  }
  if (keypressed == "68") {
    block("dark_green.png")
    console.log("d")
  }
  if (keypressed == "71") {
    block("ground.png")
    console.log("g")
  }
  if (keypressed == "76") {
    block("light_green.png")
    console.log("l")
  }
  if (keypressed == "82") {
    block("roof.jpg")
    console.log("r")
  }
  if (keypressed == "84") {
    block("trunk.jpg")
    console.log("t")
  }
  if (keypressed == "85") {
    block("unique.png")
    console.log("u")
  }
  if (keypressed == "87") {
    block("wall.jpg")
    console.log("w")
  }
  if (keypressed == "89") {
    block("yellow_wall.png")
    console.log("y")
  }
  if (keypressed == "37") {
    left()
  }
  if (keypressed == "38") {
    up()
  }
  if (keypressed == "39") {
    right()
  }
  if (keypressed == "40") {
    down()
  }
}
function up()
{
  if(playerY >=0)
  {
    playerY = playerY - block_height
    console.log("block image height = " + block_height);
    console.log("when Up arrow key pressed, X = "+ playerX + " , Y +"+playerY);
    canvas.remove(player_object);
    player();
  }
}
function down()
{
  if(playerY <=450)
  {
    playerY = playerY + block_height
    console.log("block image height = " + block_height);
    console.log("when Up arrow key pressed, X = "+ playerX + " , Y +"+playerY);
    canvas.remove(player_object);
    player();
  }
}
function left()
{
  if(playerX >=0)
  {
    playerX = playerX - block_height
    console.log("block image height = " + block_height);
    console.log("when Up arrow key pressed, X = "+ playerX + " , Y +"+playerY);
    canvas.remove(player_object);
    player();
  }
}
function right()
{
  if(playerX <=850)
  {
    playerX = playerX + block_height
    console.log("block image height = " + block_height);
    console.log("when Up arrow key pressed, X = "+ playerX + " , Y +"+playerY);
    canvas.remove(player_object);
    player();
  }
}