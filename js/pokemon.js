var pokemonArray = ["pikachu", "squirtle", "charmander"]

function addPokemon(){
	var item = document.getElementById("addHere").value
	pokemonArray.push(item)
	console.log(pokemonArray)
document.write(pokemonArray)
} 

