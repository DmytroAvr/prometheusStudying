//class Tank {
//	constructor(x, y) {
		// method constructor will be done automatically. No need to call
//		console.log("I'm inside new Class construcor");
//		console.log(x, y);
//	}
//}

// how to call

//const Tank1 = new Tank(1, 2);

//*** more */

class TankFull {
	ammunition = 3;
	armor = 3;
	//prev 2 named field          *поля*
	//next 3 named property(s)    *властивості*
	//після створення обєкту все буде наз властивості
	constructor(name, x, y) {
		this.name = name;
		this.x = x;
		this.y = y;
	}

	moveTo(x, y) {
		this.x = x;
		this.y = y;
		console.log(`Your tank ${this.name} move to ${x}, ${y}`);
	}

	fireTo(x, y) {
		this.ammunition -= 1; 
		console.log(`Your tank ${this.name} fire to coordinate ${x}, ${y}`);
	}
	moveAndFire(x1, y1, x2, y2) {
		this.moveTo(x1, y1)
		this.fireTo(x2, y2)
	}
	//construct will create object automatically  other method will be added to the prototype. It's can be realized by using """class"""
}

const tak = new TankFull("hi", 10, 1);
console.log(tak);



// https://www.youtube.com/watch?v=7EQ3hUYPQrY
// делаем метод доступним только программе
// инкапсулируем простые данные, чтобы не было возможность внести в них изменения


//Важливий момент!
//я можу створити Класс який буде шаблонним для інших классів
// тобто вони будуть мати все з нього та додавати своє

class Techick {
	#_name;
	#_x;
	#_y;
	get name() {
		return this.#_name;
	}
	get x() {
		return this.#_x;
	}
	get y() {
		return this.#_y;
	}

	constructor(name, x, y) {
		this.#_name = name;
		this.#_x = x;
		this.#_y = y;
		console.log("from Techick");
	}

	moveTo(x, y) {
		this.#_x = x;
		this.#_y = y;
		console.log(`Techick ${this.#_name} move to ${this.#_x}, ${this.#_y}`)
	}

}

class Plane extends Techick {
	#_ammunition;
	#_armor = 3;
	// на даний час верхні 2 єдлементи буде задані лише для ТАНКА щоб їх можливо було передати
	//створемо частину constructor саме для цього єлементу
	// решту інформації передамо далі за допомогою викеористання 
	//*** super***
	constructor(name, x, y, ammunition) { 
		super(name, x, y)
		this.#_ammunition = ammunition;
		console.log("from Plane");
	}
	get ammunition() {
		return this.#_ammunition;
	}
	get armor() {
		return this.#_armor;
	}

	// why? becouse 
	//console.log(myPlane.name)
	//hi I'm the Plane
	//console.log(myPlane.ammunition)
	//3
	//console.log(myPlane.x)
	//10

	#_canFire() {
		return this.#_ammunition > 0;
	}
	// чтоб візвать можно біло только внутри метода 


	fireTo(x, y) {
		if (this.#_canFire()) {
			this.#_ammunition -= 1;
			console.log(`Your Plane ${this.name} fire to coordinate ${x}, ${y}`);
		} else {
			console.log('not anought ammo');
		}
	}

	moveAndFire(x1, y1, x2, y2) {
		this.moveTo(x1, y1)
		this.fireTo(x2, y2)
	}
}


const myPlane = new Plane("hi I'm the Plane", 10, 1);
console.log(myPlane);



