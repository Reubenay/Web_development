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
    advice = isRaining? "Bring an umbrella": no umbrella
}
