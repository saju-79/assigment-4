 const food =["banana" , "banana" , "banana" ,"non-vesitable" , "mango"]
function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }

  let mango = 0;
  let banana = 0;

 for(const vote of votes){
       const text = vote.toLowerCase()
       if(text === "mango"){
        mango++
       }
      else if(text === "banana"){
        banana++
      }

 }

 console.log(banana , mango)
 if(mango >banana){
    return "mango"
} else if(banana >mango){ 
  return "banana"
}
else{
  return 'Draw '
}
}
const output = electionResult(food)
 console.log(output)



 