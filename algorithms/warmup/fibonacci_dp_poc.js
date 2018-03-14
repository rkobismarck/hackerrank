/* 
  RCTT
  Closure / Dynamic Programming
*/
let fibonacci = () =>{
   var persistence = {'0' : 0, '1' : 1};

    const calculate = (n) =>{
     
      if(persistence[n] != undefined){
        console.log("Cached :" + n)
        console.log(persistence)
        return persistence[n]
      }
      if(persistence[n] == undefined){
        console.log("Perform calculation: " + n);
        console.log(persistence)
        return persistence[n] = calculate( n - 1) + calculate(n - 2)
      }
    } 

    return {calculate}
}

const app = fibonacci();

console.log(app.calculate(5));
console.log(app.calculate(12));