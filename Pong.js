window.onload = function() {
    {
      const canvas = document.getElementById("game-canvas");
      const canvasContext = canvas.getContext("2d");
        let ballX = (canvas.width / 2) - 10;
        let ballY = (canvas.height / 2) - 10;

      setInterval(drawAllElements, 1000);
      drawAllElements();

      // Functions
    function drawAllElements() {
            drawCourt();
            drawNet();
            drawBall();
            }

      function drawCourt() {
        //draws the court
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
      }

      function drawNet() {
        // for loop: loop through the line and fill a rectangle 5px wide and specified length long every other specified length
        let numOfSections = 40; // can add functionality later for how many sections we want
        let sectionLength = (canvas.height / numOfSections); // the height split into # of equal sections
        let startYDraw, endYDraw;
        startYDraw = 0;
        endYDraw = startYDraw + sectionLength; // defines the length of each drawing
        for (let j = 0; j <= (numOfSections - 1); j++) { // here we can stop the loop at numOfSections - 1
          if (j % 2 === 0) {
            console.log(startYDraw, endYDraw); // checks the values of the lines being drawn
    canvasContext.fillStyle = "white";
    canvasContext.fillRect((canvas.width / 2 - 2.5), startYDraw, 5, endYDraw);
    startYDraw += (2 * sectionLength); 
    // endYDraw += (2 * sectionLength); // Don't know why this caused it to not work...
          }
        }
      }

        function drawBall() {
          ballX += 10;
          ballY += 10;
          canvasContext.fillStyle = "green";
          canvasContext.fillRect(ballX, ballY, 10, 10);
        }
    }
}; 