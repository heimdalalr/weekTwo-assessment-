///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

let pizza = {
    name: "Deep Dish",
    price: 19.99,
    category: "entree",
    popularity: 5,
    rating: 4.9,
    tags: ["family meal", "best value"]
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

pizza.price = 9.50;
console.log(pizza.price);



/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/
//CODE HERE
pizza.category = "entree";
console.log(pizza.category);



//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr = [
    {
        name:"cauliflower crust pizza",
        price: 10.51,
        category: "entree",
        popularity: 9,
        rating: 3,
        tags: ["gluten free"]
    },
	
	{
		name:"lasagna slice",
		price:10.52,
		category:"single portions",
		popularity:8,
		rating:12,
		tags:["kids"]
	},
	
	{
		name:"Deep Dish",
		price:20.50,
		category:"family meal",
		popularity:7,
		rating:2,
		tags:["family meal"]
	},
	
	{
		name:"Large Drink",
		price:2.54,
		category:"drinks",
		popularity:54,
		rating:14,
		tags:["drinks", "refills"]
	},
		
	{
		name:"Fried Oreos",
		price:3.55,
		category:"dessert",
		popularity:55,
		rating:15,
		tags:["desserts"]
	}
];



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(function (el) {
	return el.tags.indexOf("family meal") >=0;
});

console.log(filteredFood);


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

function filterByProperty(property, number, type){
	
	var filtered = foodArr.filter(function (el) {
		
		switch(property) {
			case "rating":{
				if(isTypeAbove(type)){
					return el.rating > number;
				}else{
					return el.rating > number;
				}
				break;
			}
			case "price":{
				if(isTypeAbove(type)){
					return el.price > number;
				}else{
					return el.price < number;
				}
				break;
			}
			case "popularity":{
				if(isTypeAbove(type)){
					return el.popularity > number;
				}else{
					return el.popularity < number;
				}
				break;
			}
			default:{
				break;
			}
		}
	});
	
	return filtered;
}

function isTypeAbove(type){
	return type == "above";
}



/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

console.log(filterByProperty("rating", 3, "above"));
console.log(filterByProperty("price", 2, "below"));
console.log(filterByProperty("popularity", 8, "above"));