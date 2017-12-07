import React from 'react';

class ScrollMove {
    constructor() {
        this.start = 0;
        this.dest = 0;
    }

    scrollMove() {
        console.log('1');
        if (this.start >= this.dest) return;


        this.start += this.speed;
        window.scrollTo(0, this.start)
    }

    scrollTo(dest, speed) {
        this.start = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        this.dest = dest;
        this.speed = speed;
    }
}

export default ScrollMove;