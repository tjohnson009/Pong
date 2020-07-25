window.onload = function() {
    {
      const canvas = document.getElementById("game-canvas");
      const canvasContext = canvas.getContext("2d");
        let ballX = (canvas.width / 2) - 5;
        let ballY = (canvas.height / 2) - 10;
        let ballSpeedX = 5; 
        let ballSpeedY = 2.5;  
      let framesPerSecond = 25; 
      setInterval(drawAllElements, (1000 / framesPerSecond));
      // drawAllElements();
      
        // var allFunctions = {
      //   return 
      // }

      // Functions
    function drawAllElements() { //draws all the elements on our screen
            drawCourt();
            drawNet();
            drawPaddles(); 
            moveAllElements();
            drawPaddles();  
            }

      function drawCourt() {
        //draws the screen the color black
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
      }

      function drawNet() {
        // for loop: loop through the line and fill a rectangle 5px wide and specified length long every other specified length AKA draws the net
        let numOfSections = 40; // can add functionality later for how many sections we want
        let sectionLength = (canvas.height / numOfSections); // the height split into # of equal sections
        let startYDraw, endYDraw;
        startYDraw = 0;
        endYDraw = startYDraw + sectionLength; // defines the length of each drawing
        for (let j = 0; j <= (numOfSections - 1); j++) { // here we can stop the loop at numOfSections - 1
          if (j % 2 === 0) {
            // console.log(startYDraw, endYDraw); // checks the values of the lines being drawn
    canvasContext.fillStyle = "rgba(100, 108, 1066, 1.0)";
    canvasContext.fillRect((canvas.width / 2 - 2.5), startYDraw, 5, endYDraw);
    startYDraw += (2 * sectionLength); 
    // endYDraw += (2 * sectionLength); // Don't know why this caused it to not work...
          }
        }
      }

        function drawBall() { 
          // creates a rectangle on the screen on top of the court and net that will be our ball
          canvasContext.fillStyle = "rgba(216, 255, 62, 1.0)"; // sets the color of the ball
          canvasContext.beginPath(); //
          canvasContext.arc(ballX, ballY, 7.5, 0, (Math.PI * 2), true); // (x center of circle, Y center of circle, radius, angles, radians (how many times the radius fits on the edge of the circle), true = clockwise, false = counter-clockwise); 
          canvasContext.fill(); //
        }

        function drawPaddles() {
          // draws Left Paddle on screen
          canvasContext.fillStyle = "rgba(0, 147, 214, 1.0)"; // can select favorite color with a color picker in CSS variables
          canvasContext.fillRect(10, ((canvas.height / 2) - 38.5), 15, 75); 
          // draws Right Paddle AKA the Computer's paddle
          canvasContext.fillStyle = "rgba(32, 104, 72, 1.0)"; // can select favorite color with a color picker in CSS variables
          canvasContext.fillRect((canvas.width - 25), ((canvas.height / 2) - 38.5), 15, 75); 
        }

        function moveAllElements() { //moves all the elements on the screen; called from the 
          drawBall(); 
          moveBall(); 
          movePaddles(); 
        }

        function moveBall() {
          ballX -= ballSpeedX;
          ballY += ballSpeedY; 
          // ballSpeedX -= .25; 
          //sets the borders in the X direction
          if (ballX > canvas.width) { // sets a right border and bounces the ball back
            ballSpeedX *= -1; 
          }
          if (ballX < 0) { // sets a left border and bounces the ball back
            ballSpeedX *= -1;
          }
          // sets the border in the Y direction
          if (ballY < 0) { // sets a top border and bounces the ball back
            ballSpeedY *= -1;
          }
          if (ballY > canvas.height) { // sets a bottom border and bounces the ball back
            ballSpeedY *= -1;
          }

            // if (ballSpeedX < 0) {  //changes the ball X speed based on direction
            //   ballSpeedX -= .1;
            // } else {
            //   ballSpeedX += .1;
            // }
        }

        function movePaddles() {

        }

        // function colorRectangle(startingX, startingY, width, length, color) {
        //   canvasContext.fillStyle = color; 
        //   canvasContext.fillRect(startingX, startingY, width, height); 
        // }
    }
}; 