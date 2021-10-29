function countLoop(n, x, y, z, a, b, c){

    if ( n - (x*a + y*b + z*c) > 0) return 0;

    let count = 0;
    for (let i = 0; i <= x; i++){
        for (let j = 0; j <= y; j++){
            for (let k = 0; k <= z; k++){
                count += ( k*c + j*b + i*a === n ) ;
            }
        }
    }
    return count;
}

console.log(countLoop(60000,3,3,3,30000,20000,30000));