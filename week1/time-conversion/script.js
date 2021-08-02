/* Time Conversion */

/**
 * @param s
 * TODO: string s: a time in 12 hour format
 */
function timeConversion(s) {
   let newTime = "";

   let [hours, minutes, seconds] = s.split(':');
   let period = seconds.split('').splice(2,3).join("");

   seconds = seconds.split('').splice(0,2).join("")

    if(hours === '12') hours = '00';
    
    if(period === "PM") hours = parseInt(hours, 10)+12;

    newTime = [hours, minutes, seconds].join(":");
    
    console.log(newTime);
    
// ! Returns: the time in 24 hour format
}

timeConversion("07:05:45PM");