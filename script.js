// First Array with Weekdays:

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days);

// Second array with breakfast options:
const breakfast = ['Musli', 'Porridge', 'Zopf', 'Toast with fried egg'];

// Third array with lunch options:

const lunch = ['Sandwich', 'Quinoa salad', 'Lentils salad', 'Empanada'];

// Fourth array with dinner options:

const dinner = ['Curry', 'Pasta with Pesto', 'Risotto', 'Burker King'];


const chosenDay = () => {
    let randomDay = days[Math.floor(Math.random() * 7)];
    return `Today is ${randomDay} and here are some meal suggestions for your day:`
}


