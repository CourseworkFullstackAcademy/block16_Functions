# block16_Functions

Guided Practice
Holiday Shopping

You are trying to buy gifts for your two siblings for the next holiday season. To ensure you stay within budget, you are calculating sales tax and total cost before arriving at the cashier. Given a budget and the prices of the two gifts, write at least two functions that return a boolean if you are within or over budget.

For this exercise, assume that the sales tax rate is 8 percent.

Prior to writing any code, make sure we understand the problem entirely, pseudocoding along the way.

Input - Budget	Input - Gift Prices	Expected Return
50	      20, 25	                        True
100	      50, 46	                        False
500	      230, 230	                      True
200	      140, 50	                        False
 

1. First, define the given variables (budget, price1, and price2). This will allow us to easily access and change the values for our four test cases.

Show Answer
2. Define a function that returns the sum of the two prices before tax.

Show Answer
3. Invoke the sumOfGifts function with the price1 and price2 variables. Store the return of this function in a new variable labeled giftTotal.

Show Answer
4. Define a function that returns the cost of the giftTotal with tax (8 percent).

Show Answer
5. Invoke the addTax function by passing in the giftTotal variable. Store the return of this function in a new variable labeled giftsWithTax.

Show Answer
6. Define a function that compares giftsWithTax and the budget variable. The function should return true if the budget is greater than or equal to giftsWithTax.

Show Answer
7.  Invoke the holidayShopping function by passing in the budget and giftsWithTax variables. 

Show Answer
Optional: Try building the same solution but with the arrow syntax. 

------------------------------------------------

Overview
You have been hired by a pharmaceutical startup as a junior developer. Things are busy and they need you to start right away. To encourage customer retention, they have been reworking their checkout system to include two different types of discounts.

Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

Directions
Copy and paste the following customer objects into a new index.js file.
 Starter Code
Using what we know about functions, pseudocode the prompt and a solution with your partner.
HINT: Despite this prompt being one large question, it can be broken down into three smaller prompts. Break your pseudocode into three smaller prompts.
Each of these small prompts should be addressed as an individual function.
Remember, a function should only do one task.
The returns of these functions should be stored in a variable, allowing other functions to use the result.

Assign someone to be the driver for the current function.

As you code, be sure to console.log or debug your solution.

When a solution has been found, be sure to test all three customer objects.

After the solution has been confirmed, move on to the next function and switch drivers.
Note: Each student is required to submit their own file with their solution to the workshop.

Expected Results:

Timmy => "Your grand total is $65"
Sarah => "Your grand total is $37.5."
Rocky => "Your grand total is $102.5"
Done? Make sure you have tested your work with all three customer objects. 
Want More?

If you used the function keyword, rewrite your functions as arrow functions.
If you used arrow functions, rewrite your functions using the function keyword.
