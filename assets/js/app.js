// Two Sum Zero:-

var cl = console.log;

nums = [-5, -4, -2, -1, 0, 1, 4, 6, 7]

const twosumzero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}
cl(twosumzero(nums));


function twosumzero2(arr){
    let startindex = 0;
    let endindex = arr.length - 1;
    let add;

    while(startindex < endindex){
        add = arr[startindex] + arr[endindex];
    if(add === 0){
        return [arr[startindex], arr[endindex]];
    } else if(add > 0){
        endindex--
    } else if(add < 0){
        startindex ++
    }
    }
}
cl(twosumzero2(nums));