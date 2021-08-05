/* Breaking the Records */

/** 
* @param array
* * miniMaxSum has the following parameter(scores):
* * arr: an array of 5 scores(integers)
*/

function breakingRecords(scores) {
    let minimum = scores[0],
    maximum = scores[0],
    min = 0,
    max = 0,
    res = [];

    if (scores.length < 1 || scores.length > 1000) throw "Scores must be between 2 and 1000";
    for (const i of scores) {
        if(i > maximum){
            maximum = i;
            max++;
        }
        if(i < minimum){
            minimum = i;
            min++;
        }
    };
    res = [...res, max, min];
    return res;
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(scores);