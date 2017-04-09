var player = {
       x: 200,
       y: 200,
       w: 40,
       h: 40,
       speed: 10,
       direction: 0
    };

    function movePlayer(direction) {
        switch (direction) {
            case "left":
                player.x -= player.speed;
                if (player.x < 20) {
                    player.x = 20;
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
                if (player.y < 18) {
                    player.y = 18;
                }
                break;
            case "down":
                player.y += player.speed;
                if (player.y > 360) {
                    player.y = 360;
                }
                break;
        }
    }

    function touchEnemy(enemies) {
        for(i =0; i< enemies.length; i++) {
            if(enemies[i].x <= player.x && player.x <= (enemies[i].x + 50) && enemies[i].y <= player.y && player.y <= (enemies[i].y + 50)) {
                player.x = 200
                player.y = 200
                enemies[i].direction = "left";
            }
        }
    }
    

    

  