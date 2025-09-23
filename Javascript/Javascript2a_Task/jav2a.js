function getGrade(score) {
    if (score == 100)
        console.log(`Outstanding Result:Grade A+`)
    else if (score >= 90) {
        console.log(`score: ${score} Grade A`);
    } else if (score >= 80) {
        console.log(`Score: ${score} Grade B`);
    } else if (score >= 70) {
        console.log(`Score ${score} Grade C`);
    } else if (score >= "60") {
        console.log(`Score: ${score} Grade D`);
    } else { console.log(`Score ${score} Grade F`) }

}





function discountCalculator(price, customerType, isFirstPurchase) {
    // let discount = 0

    if (customerType === "student") {
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.20;
    }
    if (isFirstPurchase) {
        discount += 0.05;
    }
    let finalprice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalprice.toFixed(2)
    };
}

let result = discountCalculator(100, "student", true);
console.log(`price calculation`)
console.log(`Original: ${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final Price: ${result.finalPrice}`);


function weatherAdvice(temperature, isRaining) {
    if (temperature < 32 && isRaining) {
        return (`Freezing rain! Stay Insode!`)
    } else if (temperature < 32) {
        return (`Very Cold, Wear a heavy coat`)
    } else if (temperature => 32 && temperature <= 60) {
        return (`Chilly, bring a jacket`)
    } else if (temperature >= 60 && temperature <= 80) {
        return (`Nice weather`)
    } else if (temperature > 80) {
        return (`it's hot, stay hydrated`)
    }
    advice = isRaining ? "Bring an umbrella" : "no Umbrella"
    console.log(advice)
}
console.log(weatherAdvicece9(30, false))



function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > 500) {
            return `Transaction not Possible. cannot withdraw more than 500 at once`;
        }

        else if (amount > balance) {
            return `insufficient funds`;

        } else if (balance -= amount) {
            return `withdrawl of ${amount} successsful. New balance: ${balance}`;
        }
    
    } else if (action===deposite) {
        balance + amount;
        return `deposite of ${amount} Sucessful. New balance ${balance}`;
    } else return`invalid action. choose either "deposit" or "withdraw"`
}


function personalAssistant(time, weather, dayType){
  
  if (time < 4 || time > 22) {
    return `Please enter a valid hour between 4 and 22.`;
  }
  let greeting = "";
  if (time < 12) {
    greeting = "Good morning!";
  } else {
    greeting = "Good afternoon!";
  }

  // Advice based on day type and weather
  if (dayType == "workday") {
    if (weather =="rainy") {
      return greeting + `It's a rainy workday. Take an umbrella`;
    } else {
      return greeting +  `Time to get ready for work. Have a productive day!`;
    }
  }

  if (dayType === "weekend") {
    if (weather === "sunny") {
      return greeting + `It's sunny and it's the weekend`;
    } else {
      return greeting +  `Relax and enjoy your weekend indoors.`;
    }
  }

  if (dayType === "holiday") {
    return greeting + ` Happy holiday! Enjoy your free time`;
  }

  return `Please enter a valid day type: workday, weekend, or holiday.`;
}
