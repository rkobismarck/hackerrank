// Constants or problem's configuration.
const sizeChunk = 3 
const expected = ["S","O","S"]

// Function.
const marsExplorationFunc = (argument, sizeChunk,expected) =>{    
    const splitString = (argument, sizeChunk)   => argument.match(new RegExp('.{1,' + sizeChunk + '}', 'g'))
    const isThisDifferent = (argA, argB) => argA == argB ? 0 : 1
    const countDiferences = (argument,expected)     => argument.split("").reduce((acc,item,index) => acc = acc + isThisDifferent(item, expected[index]),0)
    const validateSet = (argument,sizeChunk,expected) => splitString(argument,sizeChunk).reduce((acc,item)=> { acc = acc + countDiferences(item,expected); return acc } , 0)
    return validateSet(argument,sizeChunk,expected)
}


// Test area.
const expectedTest1 = 67;
const argumentTest1 = "SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS";
marsExplorationFunc(argumentTest1,sizeChunk,expected) == expectedTest1 ? console.log("Test passed") : console.log("Test failed");


