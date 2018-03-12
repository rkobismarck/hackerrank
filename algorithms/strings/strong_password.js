const strongPassword = (argument) => {
  /*numbers = "0123456789"
  lower_case = "abcdefghijklmnopqrstuvwxyz"
  upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  special_characters = "!@#$%^&*()-+"*/
  const regexNumbers      = new RegExp('[0-9]');
  const regexLettersLower = new RegExp("[a-z]");
  const regexLettersUpper = new RegExp("[A-Z]")
  const regexSpecial = new RegExp("[!@#$%^&*()-+]")
  //let tokens = argument.split("");

  console.log(argument.match(regexNumbers))
 

};

let test = strongPassword("hola3")