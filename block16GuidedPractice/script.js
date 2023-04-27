/*//declare the variable of Budget for the total budget and assign value

const budget = document.querySelector('.budget');
const budget = document.querySelector('.budget');
//const budget = 100;
//declare the array for the giftPrices and assign values
//const giftPrices = [50, 46]
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

/*//ternary
totalPrice <= budget ? console.log(true) : console.log(false);

//if else statement 

if (totalPrice <= budget){
	console.log(true)
}
else{
	console.log(false)
}*/

document.getElementById('calculateBtn').addEventListener('click', function() {
	let num1 = parseInt(document.getElementById('giftPrices0').value);
	let num2 = parseInt(document.getElementById('giftPrices1').value);
	let decimal = parseFloat(document.getElementById('salesTax').value);
	let limit = parseInt(document.getElementById("budget").value);
	let sum = num1 + num2;
	let result = sum * decimal + sum;
	document.getElementById('result').innerHTML = result;
	if (result > limit) {
		alert("You are OVER your Gift Budget!!");
	  } else {
		alert("Congratulations! You are at or under your budget :)");
	  }
});








