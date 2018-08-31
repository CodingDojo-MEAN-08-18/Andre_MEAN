module.exports = function() {
    return {
        add: function(num1, num2) {
            console.log("The sum is " + (num1 + num2));
        },

        multiply: function(num1, num2) {
            console.log("The product is " + (num1 * num2));
        },

        square: function(number) {
            console.log(number + " squared is " + (number * number));
        },

        random: function(num1, num2) {
            if (num1 > num2) {
                console.log("Random number between " + num1 + " and " + num2 + " is " + (Math.floor(Math.random() * ((num1 + 1) - num2) + num2)));
            } else {
                console.log("Random number between " + num1 + " and " + num2 + " is " + (Math.floor(Math.random() * ((num2 + 1) - num1) + num1)));

            }
        }
    }
}