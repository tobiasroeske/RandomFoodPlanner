// First Array with Weekdays:

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Second array with breakfast options:
const breakfast = ['Musli', 'Porridge', 'Zopf', 'Toast with fried egg'];

// Third array with lunch options:

const lunch = ['Sandwich', 'Quinoa salad', 'Lentils salad', 'Empanada'];

// Fourth array with dinner options:

const dinner = ['Curry', 'Pasta with Pesto', 'Risotto', 'Burker King'];


// chooses a random day from the days array
const chosenDay = () => {
    let randomDay = days[Math.floor(Math.random() * 7)];
    return `Today is ${randomDay} and here are some meal suggestions for your day:`;
}

// Creates a random Number to address the index of the lunch and dinner arrays
let randomNumber = () => {
    return Math.floor(Math.random) * 4;
}

// chooses random breakfast from breakfast array
const chosenBreakfast = () => {
    let randomBreakfast = breakfast[randomNumber()];
    return `The best choice for your breakfast today will be ${randomBreakfast}`;
}

// chooses random lunch from lunch array
const chosenLunch = () => {
    let randomLunch = lunch[randomNumber()];
    if (randomLunch === 'Sandwich') {
        return `And for Lunch we would recommend a ${randomLunch}`;
    } else {
    return `And for Lunch we would recommend ${randomLunch}`;
    }
}

// chooses random dinner from dinner array
const chosenDinner = () => {
    let randomDinner = dinner[Math.floor(Math.random()*4)];
    return `To end your day we think ${randomDinner} would the best option`;
}

const finalMessage = () => {
    console.log('Good morning :-)');
    console.log(chosenDay());
    console.log(chosenBreakfast());
    console.log(chosenLunch());
    console.log(chosenDinner());
}

finalMessage();
