function fsoma(...n:number[]){
    let s:number = 0;
    for (const n_el of n) {
        s+= n_el
    }
        return s
/*     n.forEach((n_el)=>{
        s+=n_el
    })
    return s; */
}

console.log(fsoma(12,3,15,123,12,3,21,2,2));
