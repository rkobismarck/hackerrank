let appleAndOrange = (s, t, a, b, apples, oranges) =>{

  const lowerLimit            = s;
  const upperLimit            = t;
  const appleThreeCoordinate  = a;
  const orangeThreeCoordinate = b;
  const applesArray           = apples;
  const orangesArray          = oranges;

  let isInsideInterval  = (lowerLimit, upperLimit, value) => (value<=upperLimit && value >= lowerLimit) ? true : false
  let calculateDistance = (arrayCoordinates,origin) => arrayCoordinates.map(e => e+ origin);
  
  let coordinateApple   = calculateDistance(applesArray,appleThreeCoordinate);
  let coordinateOranges = calculateDistance(orangesArray,orangeThreeCoordinate);
  
  let applesInsideRange = coordinateApple.map(e => isInsideInterval(lowerLimit,upperLimit,e)).filter(e => e == true).length
  let orangesInsideRange = coordinateOranges.map(e => isInsideInterval(lowerLimit,upperLimit,e)).filter(e => e == true).length
  
  console.log(applesInsideRange)
  console.log(orangesInsideRange)

}

appleAndOrange(7,11,5,15,[-2,2,1],[5,-6])