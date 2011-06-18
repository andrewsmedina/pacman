(function(){
    document.addEventListener("keydown", keydown, false);
    window.addEventListener("MozOrientation", firefoxDeviceOrientation, false);
    //window.addEventListener("deviceorientation", chromeDeviceOrientation, false);

    function chromeDeviceOrientation(e) {
        var pacman = new PacMan();
        
        if ( e.gamma > 0 ) {
            pacman.moveToRight();
        }
        if ( e.gamma < -0.07 ) {
            pacman.moveToLeft();
        }
    };

    function firefoxDeviceOrientation(e) {
        var pacman = new PacMan();
        
        if ( e.x > 0 ) {
            pacman.moveToRight();
        }
        if ( e.x < -0.07 ) {
            pacman.moveToLeft();
        }
    };

    function keydown(e) {
        var pacman = new PacMan();
        
        if ( e.keyCode === 39 ) {
            pacman.moveToRight();
        }

        if ( e.keyCode === 37 ) {
            pacman.moveToLeft();
        }
        
        for (var i=0; i<coins.length; i++)
            pacman.collideWithCoin( coins[i] );
    };
    
    var coins = document.getElementsByClassName('coin');
    var maze = document.getElementById('maze');
    var pacman = new PacMan();
    //console.log("pac", pacman.sprite.offsetLeft);

    //for (var i=0; i<coins.length; i++)
    //    console.log(coins[i].offsetLeft)

    function PacMan() {
        this.sprite = document.getElementById('pacman');
    };

    PacMan.prototype.moveToRight = function() {
        this.sprite.className = "to-right";

        if ( this.sprite.style.left.length === 0 ) {
            this.sprite.style.left = "10px";
        } else {
            this.sprite.style.left = ( parseInt( this.sprite.style.left ) + 10 ) + "px";
        }
    };

    PacMan.prototype.moveToLeft = function() {
        if ( this.sprite.style.left !== 0 ) {
            this.sprite.style.left = ( parseInt( this.sprite.style.left ) - 10 ) + "px";
        }

        this.sprite.className = "to-left";
        
    };

    PacMan.prototype.collideWithCoin = function(element) {
        if ( ( this.center() > element.offsetLeft ) && ( this.center() < element.offsetLeft + element.clientWidth ) ) {
            element.className = 'black';
            console.log('colidiu', this.center(), element.offsetLeft, element.clientWidth, element);
        } else {
            console.log('nops')
        }
    };

    PacMan.prototype.center = function() {
        return this.sprite.offsetLeft + 25;
    }

})();
