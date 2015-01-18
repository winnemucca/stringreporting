$(document).on('ready', function() {
  
});
var reporter = prompt(" Enter any word")

if(reporter !=null) {
	document.getElementById("demo").innerHTML = " So your word is " + reporter.toUpperCase() + " very impressive "
}
console.log(reporter.charAt(0));
console.log(reporter.toUpperCase());
console.log(reporter.substring(1, 4));