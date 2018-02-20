const rectangularArea = (structureToOperate) =>{
    // Initialization of values.
    let areaOfPolygon = 0 ;

    // Pure functions.    
    let compareCoordinates  = (coordinateA, coordinateB) => {
        var x = coordinateA[0] < coordinateB[0] ? coordinateA[0] : coordinateB[0] 
        var y = coordinateA[1] < coordinateB[1] ? coordinateA[1] : coordinateB[1]
        return [x,y]
     }
    let sumElementArray     = (argument)   => argument.reduce((sum,elem) => sum+elem,0)
    let elementsToIterate   = (argument)   => argument.filter(item => sumElementArray(item) != 0)
    let getArea             = (argument)   => (argument).reduce((acc,elem) => compareCoordinates(acc,elem),[argument[0]])
    let getAreaOfPolygon    = (length, width) => length * width

    // Get matrix to iterate.
    var iterableMatrix      = elementsToIterate(structureToOperate)

    // Only if the filtering process has ended possitively.
    if(iterableMatrix.length > 0 ){
        // Get reduction of area based on several tuples.
        var decreasedAreaMatrix = getArea(iterableMatrix)
        // Calculate the total area of the reduction of the polygon, based on the smallest one possible.
        areaOfPolygon       = getAreaOfPolygon(decreasedAreaMatrix[0], decreasedAreaMatrix[1])            
    }
    
    console.log("Number of ocurrences, of the biggest number:",areaOfPolygon)

    return areaOfPolygon
};

// Testing Area
let isThisTestValid = (expected,fnToBeTested,argumentToProvidefn) => expected == fnToBeTested(argumentToProvidefn) ? console.log("Assert true, test passed") : console.log("Assesrt false, test failed");

// Batteries to perform testing.
const arrayTest1          = [[1000000,1000000],[100000,100000],[3,8]];
const arrayTest2          = [[1000000,1000000],[100000,100000],[3,8],[0,0]];
const arrayTest3          = [[1000000,1000000],[100000,100000],[3,8],[1,1]];
const arrayTest4          = [[1000000000,1000000000],[100000,100000],[100,200],[65,34],[600,900]];
const arrayTest5          = [[1,1],[1,1],[1,2],[0,0],[2,1]];
const arrayTest6          = [[0,0]];
const arrayTest7          = [[-1,-1]];

// Test execution.
isThisTestValid(24,rectangularArea,arrayTest1)
isThisTestValid(24,rectangularArea,arrayTest2)
isThisTestValid(1,rectangularArea,arrayTest3)
isThisTestValid(2210,rectangularArea,arrayTest4)
isThisTestValid(1,rectangularArea,arrayTest5)
isThisTestValid(0,rectangularArea,arrayTest6)
isThisTestValid(1,rectangularArea,arrayTest7)