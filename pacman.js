(function(){
    document.addEventListener("keydown", keydown, false);

    function keydown(e) {
        var pacman = document.getElementById('pacman');
        if ( e.keyCode === 39 ) {
            if ( pacman.style.left.length === 0 ) {
                pacman.style.left = "10px";
            } else {
                pacman.style.left = ( parseInt( pacman.style.left ) + 10 ) + "px";
            }
        }

        if ( e.keyCode === 37 ) {
             if ( pacman.style.left !== 0 ) {
                pacman.style.left = ( parseInt( pacman.style.left ) - 10 ) + "px";
            }
        }
    }
})();
