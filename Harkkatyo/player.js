var player = {
       x: 200,
       y: 200,
       w: 32,
       h: 64,
       speed: 10,
       direction: 0
    };

    function movePlayer(direction) {
        switch (direction) {
            case "left":
                player.x -= player.speed;
                if (player.x < 15) {
                    player.x = 15;
                }
                break;
            case "right":
                player.x += player.speed;
                if (player.x > 385) {
                    player.x = 385;
                }
                break;
            case "up":
                player.y -= player.speed;
                if (player.y < 34) {
                    player.y = 34;
                }
                break;
            case "down":
                player.y += player.speed;
                if (player.y > 385) {
                    player.y = 385;
                }
                break;
        }
    }

 




    

    

  