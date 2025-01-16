console.log("↓ Task - 2");

// Задача 2. Розрахунок калорій

function calcAverageCalories(days) {

const daysLength = days.length;

const daysObj = Object.values(days);

let countCalories = 0;

if(daysLength !== 0) {
    for(let day of daysObj) {
     countCalories += day.calories;
    }
    return countCalories / daysLength;
  }
  else return daysLength; // 0
 }

console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); // 3180
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); // 2270

  console.log(
    calcAverageCalories([])
  );
  


console.log("↑");