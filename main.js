const menu = {
    //main object
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    //getter and setters for courses
    get appetizers(){

    },
    set appetizers(appetizers){

    },
    get mains(){

    },
    set mains(mains){

    },
    get desserts(){

    },
    set desserts(desserts){

    },

    get courses(){
        return Object.entries(this._courses);
    },

    // menu methods
    addDishToCourse: function(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice
        }

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse: function(courseName){
        const dishes = this._courses[courseName];
        const randNum = Math.floor(Math.random() * dishes.length);
        return dishes[randNum];
    },

    generateRandomMeal: function(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        const total = appetizer.price + main.price + dessert.price;
        
        return `Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}\n
        Total Price: $${total}`;
    }
};

// adding appetizers
menu.addDishToCourse('appetizers', 'tapas de serrano', 150);
menu.addDishToCourse('appetizers', 'tacos de marlin', 110);
menu.addDishToCourse('appetizers', 'kushiages', 90);

// adding mains
menu.addDishToCourse('mains', 'mc & cheese', 140);
menu.addDishToCourse('mains', 'orange chicken', 160);
menu.addDishToCourse('mains', 'mongolian beef', 170);

// adding desserts
menu.addDishToCourse('desserts', 'brownie con helado', 80);
menu.addDishToCourse('desserts', 'pay de limon', 65);
menu.addDishToCourse('desserts', 'crepa nutella', 75);

const meal = menu.generateRandomMeal();
console.log(meal);