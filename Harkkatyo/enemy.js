function createMonster(){ 
    var monster = {
        x: Number(Math.floor(Math.random()* 350 + 20)),
	    y: Number(Math.floor(Math.random() * 350 + 20)),
        w: 50,
        h: 50,
        speed: 2,
        direction: 'up'
    }	
	return monster
}

function moveEnemy(enemy){
    switch (enemy.direction) {
            case "left":
                enemy.x -= enemy.speed;
                if ( enemy.x < 5) {
                     enemy.x = 5;
                }
                break;
            case "right":
                enemy.x += enemy.speed;
                if ( enemy.x > 350) {
                     enemy.x = 350;
                }
                break;
            case "up":
                 enemy.y -= enemy.speed;
                if ( enemy.y < 10) {
                     enemy.y = 10;
                }
                break;
            case "down":
               enemy.y += enemy.speed;
                if ( enemy.y > 350) {
                     enemy.y = 350;
                }
                break; 
    }
}   


function sprite(options) {
    
    var that = {};
    that.context = options.context;
    that.width;
    that.height = options.height;
    that.image = options.image;
    
    that.render = function() {
        that.context.drawImage(
               that.image,
               0,
               0,
               50,
               50);
    };
    console.log(that.image)
    return that;
}

 
    


