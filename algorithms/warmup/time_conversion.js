let timeConversion = (s) => {
  
  // Transformation functions.
  let getHours    = (argument) => parseInt(argument.substring(0,2)) 
  let getMeridian = (argument) => argument.substring(argument.length-2,argument.length)
  let getSeconds  = (argument) => argument.substring(argument.length-4,argument.length-2)
  let getMinutes  = (argument) => argument.substring(argument.length-7,argument.length-5)
  let formatTimeMilitar = (hh,mm,ss) => hh+":"+mm+":"+ss  

  // Values
  let tempTime = [transformHours(getMeridian(s),getHours(s)),getMinutes(s),getSeconds(s)];
  

  function transformHours(meridian, hours){
    if(meridian == "AM"){
      (hours == 12) ? hours = hours + 12 : hours
    }
    if(meridian == "PM"){
      (hours != 12) ? hours = hours + 12 : hours
    }
    if(hours == 24) {
      hours = 0
    }
    return hours.toString().length == 1 ? "0"+hours.toString() : hours.toString()
  }

  return formatTimeMilitar(...tempTime)
}

console.log(timeConversion("12:40:22AM"))

