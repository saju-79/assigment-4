 const food =["mango" , "banana" ,"non-vesitable" , "mango"]
 function electionResult(foods){
  for (let i = 0; i < foods.length; i++) {
    const element = foods[i];
    let food = element
    if(element.length > food.length){
        food = element
        break
    }
    
  }
  return food;
 }

 const output = electionResult(food);
 console.log(output)