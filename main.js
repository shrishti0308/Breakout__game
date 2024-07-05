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

            function drawBall(){
                ctx.beginPath();
                ctx.arc(x,y,10,0,Math.PI * 2);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();

            }

            function draw(){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBall();
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
            