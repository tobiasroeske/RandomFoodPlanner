
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const breakfast = ['Musli', 'Porridge', 'Zopf', 'Toast with fried egg'];
const lunch = ['Sandwiches', 'Quinoa salad', 'Lentils salad', 'Empanada'];
const dinner = ['Curry', 'Pasta with Pesto', 'Risotto', 'Burker King'];
const batch = [breakfast, lunch, dinner];

// builds a random combination of meal choices for breakfast, lunch, dinner
const randomCombination = () => {
    let chooseArr = [];
    let randomDay = days[Math.floor(Math.random() * 7)];
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random()) * 4;
        chooseArr.push(batch[i][randomNumber]);
    }
    // Message 
    console.log('Good morning!');
    console.log(`Today is ${randomDay}`);
    console.log('We have some meal suggestions for you:');
    console.log(`Because it is ${randomDay}, we think ${chooseArr[0]}, would best the way to start in the day`);
    console.log(`Later for your Lunchbreak you could have some ${chooseArr[1]}`);
    console.log(`And for the evening you should treat yourself with ${chooseArr[2]}`);
}

randomCombination();


