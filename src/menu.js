// Import all image assets.
// beers
import brothersBondPic from './Images/beers/brothersBond.jpeg';
import woodFordPic from './Images/beers/woodFord.jpeg';
import bulleitBourbonPic from './Images/beers/bulleitBourbon.jpeg';
import makersMarkPic from './Images/beers/woodFord.jpeg';
// Beverages
import beerTeaPic from './Images/beverages/beerPlaceTea.jpg';
import honeyTeaPic from './Images/beverages/honeyTea.jpeg';
// Side dishes
import toastAndJamPic from './Images/sides/toastAndJam.jpeg';
import freshFruitPic from './Images/sides/freshFruit.jpeg';
// Main dishes
import classicCheesePic from './Images/mains/classicCheeseBugger.jpg';
import grilledChickenPic from './Images/mains/grilledChicken.jpg';
import spaghettiCarbonaraPic from './Images/mains/spaghettiCarbonara.jpg';
import veggiesPizzaPic from './Images/mains/veggieDelightPizza.jpg';


class Food {
    constructor(name, description, price, imagePath) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imagePath = imagePath;
    }

    renderFoodComponent() {
        let foodComponent = document.createElement('div');
        foodComponent.setAttribute('class', 'food-item');

        let foodHeading = document.createElement('h3');
        foodHeading.textContent = this.name;

        let foodDescription = document.createElement('p');
        foodDescription.setAttribute('class', 'description');
        foodDescription.textContent = this.description;

        let foodPrice = document.createElement('p');
        foodPrice.setAttribute('class', 'price');
        foodPrice.textContent = this.price;

        foodComponent.appendChild(foodHeading);
        foodComponent.appendChild(foodDescription);
        foodComponent.appendChild(foodPrice);

        foodComponent.appendChild(this.getImage());

        return foodComponent;
    }

    getImage() {
      const myImage = new Image();
      myImage.src = this.imagePath;
      myImage.setAttribute('class', 'menu-img');
     return myImage;   
    }
}

// Create Beers store and stock it...
let beers = ['Beers',];
let brothersBond = new Food (
    "Brother's Bond Bourbon",
    "A smooth and flavorful bourbon with hints of vanilla and caramel, handcrafted by Brother's Bond Spirits.",
    "39.99 USD",
    brothersBondPic,
);

let woodFord = new Food (
    "Woodford Reserve Bourbon",
    "A premium bourbon known for its balanced flavor profile and smooth finish, produced by Woodford Reserve Distillery.",
    "29.99 USD",
    woodFordPic,
);

let bulletBeer = new Food (
    "Bulleit Bourbon",
    "A distinctive bourbon with a high rye content, offering a bold and spicy flavor profile, crafted by Bulleit Distilling Co.",
    "24.99 USD",
    bulleitBourbonPic,
);

let makersMark = new Food (
    "Maker's Mark Bourbon",
    "An iconic bourbon with a sweet and mellow taste, featuring a hand-dipped red wax seal, produced by Maker's Mark Distillery.",
    "27.99 USD",
    makersMarkPic,
);

beers.push(brothersBond, woodFord, bulletBeer, makersMark);

//  Create beverages
let beverages = ['Beverages',];
let honeyTea = new Food (
    "Honey Tea",
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
    "2.99 USD",
    honeyTeaPic,
);

let beerPlaceTea = new Food (
    "Beer Place Tea",
    "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries.\
    Best served cold, but can be served hot on request.",
    "3.50 USD",
    beerTeaPic,
);

beverages.push(honeyTea, beerPlaceTea);

// Create Side Dishes
let sideDishes = ['Sides',];
let toastAndJam = new Food(
    "Toast and Jam",
    "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
    "1.99 USD",
    toastAndJamPic,
);

let freshFruit = new Food (
    "Fresh Fruit",
    "A small bowl of fresh fruit, whatever we find at the market for the day.",
    "3.60 USD",
    freshFruitPic,
);

sideDishes.push(toastAndJam, freshFruit);

// Create Main Dishes
let mainDishes = ['Main Dishes'];

let grilledChicken = new Food (
    "Grilled Chicken Salad",
    "A fresh and vibrant salad featuring grilled chicken, mixed greens, cherry tomatoes,\
    cucumbers, and a light balsamic vinaigrette. Perfect for a healthy and satisfying meal.",
    "50.99 USD",
    grilledChickenPic,
);

let cheeseBurger = new Food (
    "Classic Cheeseburger",
    "A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, and pickles,\
    all nestled in a toasted sesame seed bun. Served with a side of crispy fries.",
    "15.99 USD",
    classicCheesePic,
);

let delightPizza = new Food (
    "Veggie Delight Pizza",
    "A colorful pizza topped with a variety of fresh vegetables including bell peppers, onions,\
    mushrooms, and olives, finished with a sprinkle of mozzarella cheese. Available with a \
    gluten-free crust upon request.", 
    "12.99 USD",
    veggiesPizzaPic,
);

let spaghettiCarbo = new Food (
    "Spaghetti Carbonara",
    "A rich and creamy pasta dish made with spaghetti, pancetta, eggs, and Parmesan cheese.\
    Garnished with fresh parsley and black pepper for a comforting and indulgent experience.",
    "11.99 USD",
    spaghettiCarbonaraPic,
);

mainDishes.push(grilledChicken, cheeseBurger, delightPizza, spaghettiCarbo,);

function showMenu () {
    let contentHolder = document.querySelector('#content');

    // Create a Menu holder.
    let menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menu-content');

    // Create a heading and add its content.
    let heading = document.createElement('h1');
    heading.textContent = "Alchemist Beer Garden Menu";
    menuContent.appendChild(heading);

    // Cosolidate all foods in one place and show meal types.
    let availableFoods = [beers, beverages, sideDishes, mainDishes,];
    for (let counter = 0; counter < availableFoods.length; counter++) {

        // Create a heading for categories.
        let foodTypeHeading = document.createElement('h2');
        foodTypeHeading.textContent = availableFoods[counter][0];
        foodTypeHeading.setAttribute('class', 'menu-heading');

        // Add heading to content space.
        menuContent.appendChild(foodTypeHeading);

        // Get individual food components.
        for (let foodCounter = 1; foodCounter < availableFoods[counter].length; foodCounter++) {
            let individualFood = availableFoods[counter][foodCounter];
            let individualFoodContent = individualFood.renderFoodComponent();
            menuContent.appendChild(individualFoodContent);
        }
    }

    contentHolder.appendChild(menuContent);
    return;
}

export { showMenu };