//	access products.json
fetch("/js/products.json").then(response => {
	if (!response.ok) {
		throw new Error("HTTP error " + response.status);
	}
	return response.json();
}).then(json => {
	this.users = json;
}).catch(function() {
	this.dataError = true;
});

// 	add cards to the #shop grid - content generated from products.json
new function addCards() {
	var grid = document.getElementById("shop");

	//	iterate through all products in products.json
	for(let i = 0; i < products.length; i++) {
		// 	create & add div.shop-card
		let card = document.createElement("div");
		grid.appendChild(card);
		card.classList.add("shop-card");
		card.tabIndex = -1;

		//	create & add button.add-to-cart
		let btn = document.createElement("button");
		card.appendChild(btn);
		btn.classList.add("add-to-cart");
		btn.textContent = "Add To Cart";
		btn.tabIndex = -1;

		//	create & add img.shop-thumbnail
		let thumb = document.createElement("img");
		card.appendChild(thumb);
		thumb.src = products[i].image;
		thumb.alt = products[i].name;
		thumb.classList.add("shop-thumbnail");

		// 	create & add div.item-info
		let info = document.createElement("summary");
		card.appendChild(info);
		info.classList.add("item-info");

		// 	create & add a.item-name
		let link = document.createElement("a");
		info.appendChild(link);
		link.href = "#";
		link.classList.add("item-name");
		link.textContent = products[i].name;

		// 	create & add span.price
		let price = document.createElement("span");
		info.appendChild(price);
		price.classList.add("price");
		price.textContent = products[i].price;
	}
}