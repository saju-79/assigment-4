function emails(email){

    const thakle = email.includes("@")
    const notCom = email.includes('.com')
    const others = !email.includes("- ; , . + _ ");
   
 if(notCom && thakle && others){
        if(thakle){
            return thakle
        }
        if(notCom){
            return notCom
        }
        
    }else{
        if(!thakle){
            return thakle
        }
        if(!notCom){
            return notCom
        }
        if(others){
            return !others
        }
    }
   
}

const output = emails('saju124@gmail.com')
console.log(output)