let gradingStudtens = (array) =>{

  let modulo                = (e) => {let temp = (e % 5); let number = 0; temp > 0 ? number = Math.abs(temp - 5): number = 0; return number}
  let calculateCalification = (e) => (e > 38) ? e + modulo(e) : e;
  let processArray          = (argument, fn) => argument.map(e => (fn(e) - e) > 3 ? parseInt(fn(e)) : parseInt(e)); 

  return processArray(array,calculateCalification)
}

let array_test = [75,67,40,33];
console.log(gradingStudtens(array_test))