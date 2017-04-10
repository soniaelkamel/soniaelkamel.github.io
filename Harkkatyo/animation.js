$(document).ready( function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    var enemies = [];
    
    var enemyImage = new Image ();
    var enemyImageLoaded = false;
    enemyImage.onload = function(){
        enemyImageLoaded = true;
    }
    enemyImage.src = "enemy.png";
    
    
    var playerImage = new Image ();
    var playerImageLoaded = false;
    playerImage.onload = function(){
    playerImageLoaded = true;
    }
    playerImage.src = "player.png"
    
    
    
    var monsteri = sprite({
            context: ctx,
            width: 50,
            height: 50, 
            image: enemyImage
    });
    

    var frameCount = 0; 
    var directions = ['left', 'right', 'up', 'down']
    var index = Math.floor(Math.random() * 4)

    
    function init() {
        for(i=0;i<5;i++){ 
             enemies.push(createMonster())
        }
        var monsterri = document.getElementById("enemyAnimation");
        ctx.drawImage(monsteri.image, 0, 0)
    }
    
    function drawPlayer(ctx) {
        var x = player.x - (player.w / 2);
        var y = player.y - (player.h / 2);
        if(player.direction == 1) {
            ctx.drawImage(playerImage, 29, 0, 29, 47, x, y, 29, 47)
        }
        else if(player.direction == 2) {
            ctx.drawImage(playerImage, 58, 0, 29, 47, x, y, 29, 47)
        }
        else {
            ctx.drawImage(playerImage, 0, 0, 29, 47, x, y, 29, 47)
        }
    };
    
    function drawEnemy(context,enemy) {
        var x = enemy.x - (enemy.w / 2);
        var y = enemy.y - (enemy.h /2);
        context.drawImage(enemyImage, x, y);
    }
    
    var resetInMiddle = function (enemi) {
        player.x = canvas.width / 2;
        player.y = canvas.height / 2;
    
        // Throw the monster somewhere on the screen randomly
    enemi.x = 32 + (Math.random() * (canvas.width - 64)); 
    enemi.y = 32 + (Math.random() * (canvas.height - 64));
    
    };
    
    function touchEnemy(enemies) {
        for(i =0; i< enemies.length; i++) {
            if((player.x <= (enemies[i].x + 29))   
           && (enemies[i].x <= (player.x + 29))
           && (player.y <= (enemies[i].y + 47))
           && (enemies[i].y <= (player.y + 47))) {
                resetInMiddle(enemies[i]);
            }  
            }
        }
              
    addEventListener('mousedown', function(e) {
        var x = e.offsetX 
        var y = e.offsetY
        for(i = 0; i<enemies.length;i++) {
            if (enemies[i].x <= x && x<= (enemies[i].x + 50)&& enemies[i].y <= y && y <= (enemies[i].y + 41)) {
                enemies.splice(i, 1)
            }
        }
    })
    
    $("#speedDown").click(function() {
        if(player.speed > 5)
        player.speed-=5
    })
    
    $("#speedUp").click(function() {
            player.speed+=5    
    })
    
    var keysDown = {}
      window.addEventListener('keydown', function(e) {
        keysDown[e.keyCode] = true;
        player.direction = 3;
    });
    
    
    window.addEventListener('keyup', function(e) {
        delete keysDown[e.keyCode];
        player.direction = 4;
    });
    
    var arrow_keys_handler = function(e) {
    switch(e.keyCode){
        case 37: case 39: case 38:  case 40: // Arrow keys
        case 32: e.preventDefault(); break; // Space
        default: break; // do not block other keys
    }
    };
    window.addEventListener("keydown", arrow_keys_handler, false);
    
    var render = function() {
        ctx.fillStyle = '#D8F6CE';
        ctx.fillRect(0, 0, 400, 400);
        drawPlayer(ctx);
        for(var i=0; i<enemies.length; i++) {
             drawEnemy(ctx, enemies[i])
        }
        if(enemyImageLoaded){ 
           
        }
    };

    
    function update() {
        if (38 in keysDown) {
            movePlayer('up');
        }
        
        if (40 in keysDown) {
            movePlayer('down');
        }
        
        if (37 in keysDown) {
            movePlayer('left');
            player.direction = 1;
        }
        
        if (39 in keysDown) {
            movePlayer('right');
            player.direction = 2;
        }
        
        for(var i=0;i<enemies.length;i++) {
            if(frameCount%10 == 0) {
                enemies[i].direction = directions[Math.floor(Math.random() * 4)]
             }
            moveEnemy(enemies[i])
        }
        touchEnemy(enemies  )
    };
    
    
    function main() {
        frameCount++; 
        update();
        render();
        requestAnimationFrame(main);
    };
    
    init();
    main();
})
    
