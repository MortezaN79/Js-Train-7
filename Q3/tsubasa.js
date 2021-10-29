function tsubasa(n,a,b,arr){
    if (arr[0] <= 0 || arr[n-1] > 90+b) return 'NO'
    for (let i = 1; i < n; i++){

        if(arr[i-1] < 46+a) {
            if (arr[i]+a < arr[i-1])
                return 'NO'
        }else
            if(arr[i] < arr[i-1])
                return 'NO'
    }
    return 'YES'
}

console.log(tsubasa (6,3,2,[8,48,45,70,81,94]))
