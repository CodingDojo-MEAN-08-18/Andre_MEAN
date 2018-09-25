class Bike {
    miles: number;
    constructor(public price: number, public max_speed: string) {
        this.miles = 0;
    }

    displayInfo(){
        console.log("Your bike's price is ${this.price}. The max speed is ${this.max_speed}. Your bike has ${this.miles} miles on it.")
    }

    ride(){
        console.log("Riding");
        this.miles += 10;
        return this;
    }

    reverse(){
        console.log("REversing");
        if(this.miles >= 5){
            this.miles -= 5;
        }
        return this;
    }
}

var bike1 = new Bike(350, "35mph");
var bike2 = new Bike(200, "20mph");
var bike3 = new Bike(500, "50mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();