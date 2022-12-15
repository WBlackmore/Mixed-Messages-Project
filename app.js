/* Function which chooses a random year between 1000BC and 2022AD*/

const randYear = () => {
   let year = Math.floor(Math.random() * (2022 - -1000) + -1000);
    if(year < 0){
    year *= -1;
    return `${year} BC`
   }
   else {
    return `${year} AD`
   }
}

/* Object holding the two arrays with the 'Event' and 'Weather' responses */

const outcomes = {
    events: ["war broke out", "peace was declared", "nothing of interest Happened", 
    "everybody had a nice day", "there was a plague", "time travel was invented again", 
    "the King was deposed", "the Queen was deposed", "the Peasants revolted", 
    "tveryone had the day off"],
    weather: ["sunny", "rainy", "sleety", "windy", "stormy", "humid", "snowy", 
    "foggy", "boiling", "freezing"]
}

//Function to pick a number between 0-9

const randNum = () => {
    return Math.floor(Math.random() * 9)
}

//Function which returns a year, event and weather selection

const makeChoice = () => {
    let year = randYear();
    let event = outcomes.events[randNum()];
    let weather = outcomes.weather[randNum()];

    return `On this day in the year ${year}, ${event}. Also, it was ${weather}`
}

console.log(makeChoice())