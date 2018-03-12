let birthdayCake = (n, ar) =>{
  var max         = Math.max(...ar)
  let getCandles  = (max, arr) => (arr.filter(e => e==max)).length
  return getCandles(max, ar)
}

birthdayCake(4,[3,2,1,3])
