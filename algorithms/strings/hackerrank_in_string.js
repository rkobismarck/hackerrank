const hackerrankInString = (s) =>{
	
	const objectiveArray = "HACKE ".trim().split("");

  const clearStringArgument = (argument) => argument.trim();
  
  // Validate size of string.
  const validateLength = (argument) => (argument.length >= 6) ? true : false;

  // Validate contains numbers.
  const isNumberPresent = (argument) => 

	//let splitString = (argument) => argument.split("")
	console.log(validateLength(objectiveArray))

}


// Testing Area
let isThisTestValid = (expected,fnToBeTested,argumentToProvidefn) => expected == fnToBeTested(argumentToProvidefn) ? console.log("Assert true, test passed") : console.log("Assesrt false, test failed");

// Batteries to perform testing.
const stringTest1          = "hereiamstackerrank";
const stringTest2          = "hackerworld";

// Test execution.
isThisTestValid("YES",hackerrankInString,stringTest1);
//isThisTestValid("NO",hackerrankInString,stringTest2);
