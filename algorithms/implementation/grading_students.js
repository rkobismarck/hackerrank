let gradingStudtens = (array) =>{
  let modulo                = (e) => {let temp = (e % 5); let number = 0; temp > 0 ? number = Math.abs(temp - 5): number = 0; return number}
  let calculateCalification = (e) => (e >= 38) ? e + modulo(e) : e;
  let calculateDiference 	= (e) => calculateCalification(e) - e;  
  let processArray          = (argument) => argument.map(e => (calculateDiference(e) < 3) ? calculateCalification(e): e); 
  return processArray(array);
}

let array_test = [73,67,38,33];
console.log(gradingStudtens(array_test))