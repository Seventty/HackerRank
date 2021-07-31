/* Plus Minus */

/**
 * @param arr
 */
function plusMinus(arr) {
    let positiveCounter = 0,
        negativeCounter = 0,
        zeroCounter = 0;
    
    if(arr.length < 0 || arr.length > 100){
        throw new Error("Array length must be between 0 and 100");
    }

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < -100 || arr[index] > 100) {
            throw new Error("The index of the array's number must be between -100 and 100");
        }else {
            if (arr[index] > 0) {
                positiveCounter++;
            } else if(arr[index] < 0) {
                negativeCounter++;
            } else if(arr[index] === 0){
                zeroCounter++;
            }
        }
        
    };
    console.log(positiveCounter / arr.length);
    console.log(negativeCounter / arr.length);
    console.log(zeroCounter / arr.length);
};

let arr = [-100, 100, 0, 0, 0, -100, 100, 0, -100, 100, 100, 0, 0, 0, 0, -100, -100, -100, 0, -100, 0, 100, 100, -100, -100, 100, 100, 100, 100, -100, -100, -100, -100, 100, 0, 0, 100, 0, 0, -100, -100, -100, -100, -100, -100, 100, 100, 0, 100, 100, -100, -100, -100, 0, 100, -100, 0, 100, 100, -100, 100, -100, 0, -100, -100, 100, 0, 0, -100, 0, -100, -100, 100, -100, 100, 0, 100, -100, -100, -100, 100, 100, 100, 100, 0, -100, 0, 100, 100, 100, 0, -100, -100, 0, 0, 100, 0, -100, 100, 100];
plusMinus(arr);


