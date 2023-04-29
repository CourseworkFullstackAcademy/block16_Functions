//create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."


//1.  If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated. Do a loop through the customers and calculate their number of refills and multiply it by the cost per refill if they have a subscription. Then apply the discount to their total refill, then return the string "Your grand total is ${finalAmount}."




//1. MODIFIED:: first multiply number of refills by refill cost for each customer


function subTotal(cust) {
		let currentTotal = cust.pricePerRefill * cust.refills;
		return  currentTotal;	
};



//2. MODIFIED:: then check if customer has subscription. If subscription, multiply by .25, and get a subscritption total. 
//I can do this in the function in step 3!
// function subscriptionAmount(cust) {
//     if (cust.subscription) {
//         let subscription = subTotal(cust) - subTotal(cust) * .25;
//         return subscription;
//     } 
// }



//console.log (subscriptionTotal)

//3. take the amount found in the function subscription amount and use it to find the total if they have a coupon and a subscription, and a total of if they have just the coupon.
function totalDiscountAmount(cust) {
    let finalAmount;
	if (cust.subscription && cust.coupon) {
	  finalAmount = subTotal(cust) - subTotal(cust) * .25 - 10;
	} else if (cust.subscription) {
	  finalAmount = subTotal(cust) - subTotal(cust) * .25;
	} else if (cust.coupon) {
	  finalAmount = subTotal(cust) - 10;
	} else {
	  finalAmount = subTotal(cust);
	}
	return finalAmount;
}


// 4.  Now that all the functions work, I need to learn how to call all of these in a main function so I only have to put in the value (customer's name) once. 

function main() {
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
	};
  
	const rocky = {
	  prescription: "phenylephrine",
	  pricePerRefill: 30,
	  refills: 5,
	  subscription: true,
	  coupon: true,
	};
  
	let finalAmount = totalDiscountAmount(rocky);
    console.log(`Your grand total is $${finalAmount}.`);
    return `Your grand total is $${finalAmount}.`;
  }
  
  main();
