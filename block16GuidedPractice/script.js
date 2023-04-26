//declare the variable of Budget for the total budget and assign value
const budget = 100;
//declare the array for the giftPrices and assign values
const giftPrices = [50, 46]
//use function to add the items in the array and multiply the total by 8%

//!!!!!!!!!!Why is below not working???
//function pricePlusTax = (giftPrices) => giftPrices[0] + giftPrices[0] * .08 + giftprices[1] + giftprices[1] * .08

function totalPrice (giftPrices) {
	return totalPrice = giftPrices[0] + giftPrices[1] + .08 * (giftPrices[0] + giftPrices[1])
}

//test console log totalPrice
//console.log (giftPrices[0] + giftPrices[1] + .08 * (giftPrices[0] + giftPrices[1]))


//Use an arrow statement, if else statement and a ternary statement and then console.log print true when the total is less that or equal the budget and print false when the total is more that the budget.

//arrow statement!!!! I have to look into this later.
/*const holidayBudget = (giftPrices[0] + giftPrices[1] + .08 * (giftPrices[0] + giftPrices[1])) => {
	return true
}*/

//ternary
totalPrice <= budget ? console.log(true) : console.log(false);

//if else statement 

if (totalPrice <= budget){
	console.log(true)
}
else{
	console.log(false)
}
