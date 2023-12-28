"use strict";
function fsoma(...n) {
    let s = 0;
    for (const n_el of n) {
        s += n_el;
    }
    return s;
}
console.log(fsoma(12, 3, 15, 123, 12, 3, 21, 2, 2));
