var guess = prompt('pick a number between 1-100')
var number = Math.floor((Math.random() * 100) + 1)
var num = 1;
var trys = 10
console.log(number)
while(guess != number) {
	num++
if(guess > number){
	guess = prompt('too high, choose again')
} else if (guess < number) {
	guess = prompt('too low, choose again')
} else if (num == trys){
	alert('sorry, out of tries')
} else {
	alert('good job finding the number!')
}
}






// if(guess > number) {
// 	guess = prompt("too high, choose again")
// } else{
// 	guess = prompt("too low, choose again")
// } 
// 	break
// 	if(num >= trys){
// 		prompt('you lose')
// 	}else if(guess == number){
// 		alert('good job finding the number!')
// 	}
// 	}




