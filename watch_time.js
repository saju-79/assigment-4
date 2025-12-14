
// const totalTimes= [ 400 ,200 ,300];
// function calculateWatchTime(times) {
//   if (!Array.isArray(times)) return "Invalid";

//   let totalSeconds = 0;

//   for (let time of times) {
//     if (typeof time !== "number") {
//       return "Invalid";
//     }
//     totalSeconds += time;
//   }

//   let hour = Math.floor(totalSeconds / 3600);
//   let minute = Math.floor((totalSeconds % 3600) / 60);
//   let second = totalSeconds % 60;

//   return {
//     hour: hour,
//     minute: minute,
//     second: second
//   };
// }

// const output = calculateWatchTime(totalTimes);
// console.log(output)
// console.log(Math.floor(300/3600))


const timeSecound = [2323, 3600 ,60 ,60 ,30];
function calculateWatchTime(times){

  if(Array.isArray(times)){
    return "invalid"
  }
  let sum = 0;
  
  for(const time of times){
   if(typeof time !=='number'){
    return "invalid"
   }
   sum = sum + time;

    }
    let hourseTime =Math.floor( sum/3600);
    let minutesTime =Math.floor( (sum%3600)/60);
    let secondTime = sum%60;

      
    return {
          hourse:hourseTime ,
           minute:minutesTime,
          secound:secondTime
           
    }
  }

  

const output = calculateWatchTime(timeSecound)
console.log(output)