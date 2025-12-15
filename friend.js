
const a = { name: "saju", roll: 1, bestFriend: 2 };
const b = { name: "mubin", roll: 2, bestFriend: 1 };

function bestFriend(friend1 , friend2){
    if(typeof friend1 === "string" || typeof friend2 ==="string"){
        return "Invalid";
    }
    if(typeof friend1.roll !== "number" || typeof friend1.bestFriend !== "number" ||
         typeof friend2.roll !== "number" || typeof friend2.bestFriend !== "number"){
        return "Invalid";
    }

    if(friend1.roll === friend2.bestFriend && friend2.roll === friend1.bestFriend){
       return true;
    }
    else{
        return false ;
    }
}

const output = bestFriend(a , b);
console.log(output)
