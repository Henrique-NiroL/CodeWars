function pascalsTriangle(n) {
let arr=[];
    let c=0;
    for(let i=1;i<=n;i++){
        arr.push(1);
        let len=arr.length;
        if(i>1){
            if(i>2){
               for(let j=1;j<=(i-2);j++){
                    let idx=(len-(2*i)+j+2+c);
                    let val=arr[idx]+arr[idx+1];
                    arr.push(val);
                }
                c++;
            }
            arr.push(1);    
        }
    }
    return arr;
}
