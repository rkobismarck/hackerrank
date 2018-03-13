/* 
  RCTT
  Closure / Dynamic Programming
*/
let calculate = () => {
  var dictionary = {};
  const add = (x,y) => {  
                            let key = x.toString() + y.toString(); 
                            (dictionary[key] == undefined) ?(dictionary[key] = x+y, console.log("First Time")) : (dictionary[key], console.log("Cache"));
                            return dictionary[key]  
                        }
  return{add}
}
 let calculator = calculate();

 calculator.add(1,2)
 calculator.add(1,2)
 calculator.add(1,2)
 calculator.add(1,2)
 calculator.add(1,2)
 calculator.add(1,2)
 calculator.add(1,2)