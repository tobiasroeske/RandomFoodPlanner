// First Array with Weekdays:

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Second array with breakfast options:
const breakfast = ['Musli', 'Porridge', 'Zopf', 'Toast with fried egg'];

// Third array with lunch options:

const lunch = ['Sandwich', 'Quinoa salad', 'Lentils salad', 'Empanada'];

// Fourth array with dinner options:

const dinner = ['Curry', 'Pasta with Pesto', 'Risotto', 'Burker King'];

const batch = [breakfast, lunch, dinner];

console.log(batch[0][1]);




// chooses a random day from the days array
const chosenDay = () => {
    let randomDay = days[Math.floor(Math.random() * 7)];
    return randomDay;
}

// Creates a random Number to address the index of the lunch and dinner arrays



// builds a random combination of meal choices for breakfast, lunch, dinner
const randomCombination = () => {
    let chooseArr = [];
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random()) * 4;
        chooseArr.push(batch[i][randomNumber]);
    }
    return chooseArr;
}

// Message 