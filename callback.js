let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};

// THIS IS CALLBACK HELL
// callback: calling a function inside function is known as callback


let order = (Fruits_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruits_name]} was selected`);
        call_production();

    }, 2000)

};



let production = () => {

    setTimeout(() => {
        console.log("production has started");

        setTimeout(() => {
            console.log("the fruits has been chopped");


            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log('tHE machine has started');

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} has been selected`)

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as topping`);

                            setTimeout(() => {
                                console.log("serve icecream")
                            }, 2000)
                        }, 3000)

                    }, 1000)
                }, 1000)
            }, 1000)

        }, 2000);

    },0000);


}

order("0", production);