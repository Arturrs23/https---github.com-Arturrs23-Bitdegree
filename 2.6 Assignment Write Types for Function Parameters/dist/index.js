"use strict";
var TimeOfGreeting;
(function (TimeOfGreeting) {
    TimeOfGreeting["morning"] = "Good Morning";
    TimeOfGreeting["afternoon"] = "Good Afternoon";
    TimeOfGreeting["evening"] = "Good Evening";
})(TimeOfGreeting || (TimeOfGreeting = {}));
const customerGreeting = (time_of_day, customer) => {
    const loyal = 'Thank you for being a valued customer!';
    const notLoyal = 'If you join our loyalty program, you can get a free cup of coffee today!';
    let greeting = `${time_of_day} ${customer.name}! `;
    greeting += customer.loyal ? loyal : notLoyal;
    return greeting;
};
const gabriel = {
    loyal: true,
    name: 'Gabriel',
    visits: 2
};
console.log(customerGreeting(TimeOfGreeting.morning, gabriel));