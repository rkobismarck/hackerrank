const sherlock_counting = (argument) =>{
  let a = 1;
  let b = 2;
  let c = 3;

  const calculateDeterminant = (a,b,c) => ((b*b) - 4*(a*c))

  console.log(calculateDeterminant(a,b,c))
}


sherlock_counting();