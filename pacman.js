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
    };
    
    //var coins = document.getElementsByClassName('coin');
    var pacman = new PacMan();
    //console.log("pac", pacman.sprite.offsetLeft);

    //for (var i=0; i<coins.length; i++)
    //    console.log(coins[i].offsetLeft)

    function PacMan() {
        this.sprite = document.getElementById('pacman');
    };

    PacMan.prototype.moveToRight = function() {
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
    };

    //PacMan.prototype.center = function() {
    //    return this.sprite.
    //}

})();
