// Question 1: Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values

type CTStudent ={
    id: number,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string,
    pet: string
}

let student1 = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neil Goldman',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

console.log(student1);
console.log(student2);
console.log(student3);

// Question 2: Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  
// If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function

type Fruit={
    color:string,
    shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit=null

function fruitColor(fruit:Fruit | null):void {
    if (fruit !== null) {
        console.log(fruit.color);
    } else {
        console.log("You ate my fruit already");
    }
}

fruitColor(apple);
fruitColor(eaten);

// Question 3: Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type

type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}

type Ebook = Book | DigitalBook;

const myEbook: Ebook = {
    isbn: "978-0-123456-78-9",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
};

// Question 4: Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures
// All ShopItems have an numeric id that can not be edited 
// All ShopItems have a price
// All ShopItems have a description
// Some ShopItems have a color
// All ShopItems have a Category represented with an enum 
// Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// All ShopItems have a list of keywords used to help search for the ShopItem 
// For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]
// After Creating the `ShopItem` type create 3 items using this type

enum Category {
    Shirts = "Shirts",
    Shoes = "Shoes",
    Pants = "Pants",
    Hats = "Hats"
}

type ShopItem = {
    id: number,
    price: number,
    description: string,
    color?: string,
    category: Category;
    keywords: string[];
};

const item1: ShopItem = {
    id: 1,
    price: 30.00,
    description: "Ironman T-Shirt",
    color: "Red",
    category: Category.Shirts,
    keywords: ["Marvel", "Endgame", "Ironman", "Character Tees", "Tony Stark"],
};

const item2: ShopItem = {
    id: 2,
    price: 35.00,
    description: "Batman Shoes",
    color: "Gray",
    category: Category.Shoes,
    keywords: ["Batman", "Bruce Wayne", "Robin", "Gotham City", "Batgirl"],
};

const item3: ShopItem = {
    id: 3,
    price: 40.00,
    description: "Spiderman Pants",
    color: "Blue",
    category: Category.Pants,
    keywords: ["Marvel", "Spiderman", "Peter Parker", "Mary Jane", "New York City"],
};

const item4: ShopItem = {
    id: 4,
    price: 45.00,
    description: "Superman Hat",
    color: "Blue",
    category: Category.Hats,
    keywords: ["Justice League", "Superman", "Clark Kent", "Lois Lane", "Krypton"]
};
