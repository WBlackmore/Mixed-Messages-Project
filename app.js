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
    events: ["War broke out", "Peace was declared", "Nothing of interest Happened", 
    "Everybody had a nice day", "There was a plague", "Time travel was invented again", 
    "The King was deposed", "The Queen was deposed", "The Peasants revolted", 
    "Everyone had the day off"],
    weather: ["Sunny", "Rainy", "Sleety", "Windy", "Stormy", "Humid", "Snowy", "Foggy"]
}


