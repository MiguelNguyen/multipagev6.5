var username = prompt("what's your name?")
var bob = "bob"
var alice = "alice"
if(username == bob || username == alice) {
	document.write("welcome " + username)
} else if (username == "alice") {
	alert("awesome")
} else {
	alert("go away " + username + " nobody likes you!")
}
