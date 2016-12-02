var peopleObjects = [
{
	username: "mike",
	password: "poop"
},
{
	username: "tom",
	password: "jones"
}
]

function getInfo(){
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	
	for(i = 0; i < peopleObjects.length; i++){
		if(username == peopleObjects[i].username && password == peopleObjects[i].password){
			alert(username + " is logged in!!!")
			console.log(username + " is logged in!!!")
			return
		}
	}
	alert("incorrect username or password")
}
function newInfo(){
	var newUser = document.getElementById('newUser').value
	var newPass = document.getElementById('newPass').value
	var combined = {
		username: newUser,
		password: newPass
	}
	for(i = 0; i < peopleObjects.length; i++){
		if( newUser == peopleObjects[i].username || newPass == peopleObjects[i].password) {
			alert("username and password already taken")
			return
			} else if(newPass.length < 8) {
				alert('password must be at least 8 characters')
			return
			}
	}
	peopleObjects.push(combined)
	console.log(peopleObjects)
}

function commentApp(){
	var item = document.getElementById("nameInput").value
	var item2 = document.getElementById("comment").value
	var text = document.createTextNode(item)
	var text2 = document.createTextNode(item2)
	var newItem = document.createElement("h1")
	var newItem2 = document.createElement("p")
	newItem.appendChild(text)
	newItem2.appendChild(text2)
	document.getElementById("todo").appendChild(newItem)
	document.getElementById("todo").appendChild(newItem2)
}

function bookSearch(){
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = ""
	console.log(search)

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data) {
			for(i = 0; i < data.items.length; i++){
				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "<br>" + " Author : " + data.items[i].volumeInfo.authors + "<br>" + "Published : " + data.items[i].volumeInfo.publishedDate + "<br>" + '<img src="' + data.items[i].volumeInfo.imageLinks.smallThumbnail + '" />';  + "</h2>"
			}
		},

		type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', bookSearch, false)

function todoList(){
	var item = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todo").appendChild(newItem)
}
