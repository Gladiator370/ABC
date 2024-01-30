function displayFoodContents() {
	const food = {
		name: "Apple",
		contents: ["Water", "Carbohydrates", "Fiber", "Vitamin C"]
	};

	const foodDiv = document.getElementById("food");
	foodDiv.innerHTML = `<h2>${food.name}</h2><p>Contents:</p><ul>`;

	for (let i = 0; i < food.contents.length; i++) {
		foodDiv.innerHTML += `<li>${food.contents[i]}</li>`;
	}

	foodDiv.innerHTML += `</ul>`;
}