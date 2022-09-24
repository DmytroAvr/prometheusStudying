function Hamster() {
	food = [];
	foundFood = function(something) {
		this.food.push(something);
  };
}



// Створюємо двох хом'яків 
let speedy = new Hamster();
let lazy = new Hamster();

// і годуємо тільки першого
speedy.foundFood("apple");
speedy.foundFood("nut");

console.log(speedy.food.length); // 2
console.log(lazy.food.length);