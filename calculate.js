function chashMoney(takas){

    const cashCalculate = takas*1.75/100;
      
     if( typeof takas !== "string" && takas >= 0){
        return cashCalculate;
      }else{
        return "invalid"
      }
}
const calculate = chashMoney(1)
console.log(calculate);