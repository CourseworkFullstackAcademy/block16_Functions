//create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."


// 1. Find the cost of the number of refills * of cost per refill. this will be a subtotal.
const calcSubTotal = (cust) =>  {
	let subTotal = cust.refills * cust.pricePerRefill;
	return subTotal;
}


// 2. apply the customers discounts to the subtotal, if they have any discounts. There are several different ways they can have a discount. Subscription (- 25% the subtotal), coupon (- $10 off the total), subscription and coupon (subtotal minus 25% then minus $10), and lastly, no discount. This answer will be the finalAmount

const calcFinalCost = (cust) => {
	let finalCost
	if (cust.subscription && cust.coupon) {
		finalCost = calcSubTotal(cust) - calcSubTotal(cust) * .25 - 10;
	}
	else if (cust.subscription) {
		finalCost = calcSubTotal(cust) - calcSubTotal(cust) * .25;
	}
	else if (cust.coupon) {
		finalCost = calcSubTotal(cust) - 10;
	}
	else {
		finalCost = calcSubTotal(cust);
	}
	return finalCost;
}

// 3. Then, using the result found in 2, return and print the result with the message "Your grand total is ${finalAmount}." Do not forget to use back tics, not quotation marks. 

const message = () => {
	const timmy = {
		prescription: "acetaminophen",
		pricePerRefill: 25,
		refills: 3,
		subscription: false,
		coupon: true,
	};
	
	const sarah = {
		prescription: "diphenhydramine",
		pricePerRefill: 50,
		refills: 1,
		subscription: true,
		coupon: false,
	}
	
	const rocky = {
		prescription: "phenylephrine",
		pricePerRefill: 30,
		refills: 5,
		subscription: true,
		coupon: true,
	}
	let finalAmount = calcFinalCost(sarah);
	console.log(`Your grand total is $${finalAmount}.`);
	return `Your grand total is $${finalAmount}.`;
}

message();

