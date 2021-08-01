/* Mini-Max Sum */

/** 
* @param array
* * miniMaxSum has the following parameter(s):
* * arr: an array of 5 integers
*/

function miniMaxSum(arr) {
    let minRes = 0,
    maxRes = 0,
    tmp = 0;
    arr.sort()
    
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 1 || arr[index] > Math.pow(10,9)) {
            throw new Error("The array index must be between 1 and 10^9");
        }
        tmp += arr[index];
    }
    minRes = tmp-arr[arr.length-1];
    maxRes = tmp-arr[0];

    console.log(minRes, maxRes);
    /* *
    * Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
    **/
};

const arr = [1,2,3,4,5];
miniMaxSum(arr);