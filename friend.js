const friend1 ={name:"saju ahmed" , rool:1 ,bestFriendNumber:2 }
const friend2 ={name:"mubin tahmed " , rool:2 ,bestFriendNumber:1 }
function bestFriend(a ,b){
    
        if(a.rool === b.bestFriendNumber && a.bestFriendNumber === b.rool){
           return"asi"
        }else{
            return"naiii"
        }
    

    }
          
        
    
 


 
const outpu = bestFriend(friend1 , friend2)
console.log(outpu)

