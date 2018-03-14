/* 
  RCTT
  Closure / Dynamic Programming
*/
let fibonacci = () =>{
   var persistence = {'0' : 0, '1' : 1};

    const calculate = (number) =>{
      if(persistence[number] != undefined)
        return persistence[number]
      if(persistence[number] == undefined)
        return persistence[number] = calculate( number - 1) + calculate(number - 2)
    } 
    const getNumberIndex              = (array, value) => array.indexOf(value) > -1 ? array.indexOf(value) + 1  : "undefined" ;

    const extractValuesToArray        = (object) => Object.values(object); 

    const getPositionInFibonacciSerie = (number) => { calculate(number); return getNumberIndex(extractValuesToArray(persistence),number)}

    return {getPositionInFibonacciSerie}
}


/* 
  RCTT
  Closure / Dynamic Programming
  Unitary Testing Area
*/
const app = fibonacci();

const assert = (value,expected,actual) => value ? console.log("Test passed") : console.log ("Test failed")

const testFunction = (expected, argument) => app.getPositionInFibonacciSerie(argument) == expected ? assert(true) : assert(false);

      testFunction(1,0);
      testFunction(6,5);
      testFunction(8,13);
      testFunction(13,144);
      testFunction("undefined",4);
      