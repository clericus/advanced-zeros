module.exports = function getZerosCount(number, base) {
  let countZero = 0;
  let arr = []; 
  let arrPrime = [];                                      
  let numBase = base;
  let sqr;
  let primeNum ;
  for(let i=0; i<=numBase; i++){
    let count = 2;
        for(var x=0; x<=i/2; x++){
            if(i !== 1 && i !== 0 && i !== x){
                if(i%x === 0){
                   count++;
                 }
            }
        }
    if(count === 3){
      arrPrime.push(i);                         //pushing of prime number less then base
    }
  }                                           
  arrPow = [2];                                    
      for (let j = 0; j < arrPrime.length; j++) {
        if(numBase%arrPrime[j]===0){
          arrPow.push(arrPrime[j]);              //pushing of prime numbers of base 
          }                                                                        
      }
  let primeX = Math.max.apply(null, arrPow);    //max prime number                                                 
  for (let i = 1; i <= 100; i++) {            
    if (Math.pow(primeX, i) <= number){
      arr.push(Math.pow(primeX, i))                //pusing exponentiation of primeX  
    }
  }
  for (let i = 0; i < arr.length; i++){              //for every exponentiation of primeX
    for (let j = arr[i]; j <= number; j+=arr[i]){ 
      countZero+=1;                                
    }
  }
  return countZero;
}