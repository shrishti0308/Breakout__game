const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            // ctx.beginPath();
            // ctx.rect(40,80,70,70);
            // ctx.fillStyle = "#FF0000";
            // ctx.fill();
            // ctx.closePath();
            // ctx.beginPath();
            // ctx.arc(240,200,35,0,Math.PI * 2, false);
            // ctx.fillStyle = "green";
            // ctx.fill();
            // ctx.closePath();
            // ctx.beginPath();
            // ctx.rect(180, 10, 130, 60);
            // ctx.strokeStyle = "rgb(0 0 255 / 50%)";
            // ctx.stroke();
            // ctx.closePath();
            let x = canvas.width / 2;
            let y = canvas.height - 30;
            const dx = 2;
            const dy = -2;
            const ballRadius = 10;
            const paddleHeight = 10;
            const paddleWidth = 75;
            let paddleX = (canvas.width - paddleWidth) / 2;
            let rightPressed = false;
            let leftPressed = false;

            document.addEventListener("keydown" , keyDownHandler, false);
            document.addEventListener("keyup" , keyUpHandler, false);

            function keyDownHandler(e){
                if(e.key == "Right" || e.key == "ArrowRight"){
                    rightPressed = true;
                }else if(e.key == "Left" || e.key == "ArrowLeft"){
                    leftPressed = true;
                }
            }

            function keyUpHandler(e){
                if(e.key == "Right" || e.key == "ArrowRight"){
                    rightPressed = false;
                }else if(e.key == "Left" || e.key == "ArrowLeft"){
                    leftPressed = false;
                }
            }
            
            function drawBall(){
                ctx.beginPath();
                ctx.arc(x,y,ballRadius,0,Math.PI * 2);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();

            }

            function drawPaddle(){
                ctx.beginPath();
                ctx.clearRect(paddleX, canvas.height - paddleHeight,  paddleWidth, paddleHeight);
                ctx.fillStyle = "0095DD";
                ctx.fill();
                ctx.closePath();
            }

          

            function draw(){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBall();    
                drawPaddle();
            if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
                dx = -dx;
            }
            if(y + dy > canvas.height - ballRadius || y + dy < ballRadius){
                dy = -dy;
            }   
            // if (rightPressed) {
            //     paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
            //   } else if (leftPressed) {
            //     paddleX = Math.max(paddleX - 7, 0);
            //   }

              if (rightPressed) {
                paddleX += 7;
                if (paddleX + paddleWidth > canvas.width) {
                  paddleX = canvas.width - paddleWidth;
                }
              } else if (leftPressed) {
                paddleX -= 7;
                if (paddleX < 0) {
                  paddleX = 0;
                }
              }
            
              
                x += dx;
                y += dy;
            }


            function startGame(){
                setInterval(draw, 10);

            }
            

            document.getElementById("runButton").addEventListener("click",function(){
                startGame();
                this.disabled = true;
            });

            