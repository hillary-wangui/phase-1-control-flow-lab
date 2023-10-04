
  // Write your code here!
  function scuberGreetingForFeet(feet) {
    if (feet <= 400) {
      return "This one is on me!";
    } else if (feet > 2000 && feet <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else if (feet > 2500) {
      return "No can do.";
    } else {
      return "This is not a valid distance.";
    }
  }
  
  // Example usage:
  
``  
function ternaryCheckCity(city){
  // Write your code here!
  let bike = "";
  city === "NYC" ? bike = "Ok, sounds good." : bike = "No go."
  return bike

}

function switchOnCharmFromTip(steep){
  // Write your code here!
  switch (steep) {
    case 'generous' :
      return 'Thank you so much.'; break
  case 'not as generous': return 'Thank you.'; break; default: return 'Bye.'; break;
  }
}
console.log(scuberGreetingForFeet(100))