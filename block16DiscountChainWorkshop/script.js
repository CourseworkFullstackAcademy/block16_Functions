//create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."

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

//1.  If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated. Do a loop through the customers and calculate their number of refills and multiply it by the cost per refill if they have a subscription. Then apply the discount to their total refill, then return the string "Your grand total is ${finalAmount}."


// function hasSubscription(custArray) {
// 	for (let i = 0; i < custArray.length; i++) {
// 		currentCustomer = custArray[i];
// 		if (currentCustomer.subscription) {
// 			let grandTotal = currentCustomer.pricePerRefill * currentCustomer.refills * .25
// 			return grandTotal;
// 		}
		
// 	  	}
// }

//1. MODIFIED:: first multiply number of refills by refill cost for each customer



function findDiscountsTotal(rocky) {
function subTotal(cust) {
		let currentTotal = cust.pricePerRefill * cust.refills;
		return  currentTotal;	
};

const custSubTotal = subTotal(cust);
console.log(custSubTotal)

//const total = hasSubscription(customers)

//2. MODIFIED:: then check if customer has subscription. If subscription, multiply by .25, and get a subscritption total. 

function subscriptionAmount(cust) {
    if (cust.subscription) {
        let subscription = custSubTotal - custSubTotal * .25;
        return subscription;
    } 
}

const subscriptionTotal = subscriptionAmount(cust)

console.log (subscriptionTotal)

function totalDiscountAmount(cust) {
    if (cust.subscription) {
        let subscriptionAndCoupon = subscriptionTotal - 10;
        return subscriptionAndCoupon;
    }
    else  if (cust.coupon) {
        let coupon = custSubTotal - 10;
        return coupon;
    }
}
    const finalAmount = totalDiscountAmount(cust);

    return finalAmount;


}
console.log(findDiscountsTotal)