const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        get desserts() {
            return this._desserts;
        },
        set appetizers(appetizer) {
            this._appetizers = appetizer;
        },
        set mains(main) {
            this._mains = main;
        },
        set desserts(dessert) {
            this._desserts = dessert;
        },
    },


    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        i = Math.floor(Math.random() * dishes.length);
        return dishes[i];
    },

    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let total = appetizer.price + main.price + dessert.price;

        return `Your meal for today is:
      ${appetizer.name} -which cost is ${appetizer.price} mdl;
      ${main.name} - which cost is ${main.price} mdl;
      ${dessert.name} -which cost is ${dessert.price} mdl;
      Total price of the meal is: ${total} mdl.`
    },
};

menu.addDishToCourse('appetizers', 'Notoro set', 445.00);
menu.addDishToCourse('appetizers', 'Meat Plate', 245.00);
menu.addDishToCourse('mains', 'Maxi wings', 180.00);
menu.addDishToCourse('mains', 'Vegetables Plate', 90.00);
menu.addDishToCourse('mains', 'Cheesecake salty caramel', 45.00);
menu.addDishToCourse('appetizers', 'Tuna', 75.00);
menu.addDishToCourse('desserts', 'Fondant', 45.00);



console.log(menu.generateRandomMeal());