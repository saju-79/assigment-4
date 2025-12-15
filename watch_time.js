 


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