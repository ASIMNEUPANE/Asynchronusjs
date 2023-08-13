const { promises } = require("nodemailer/lib/xoauth2");

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};


let is_shop_open = true;


function time (ms){
    return new Promise((resolve,reject)=>{
if(is_shop_open){
    setTimeout(resolve,ms);
}
else{
    reject(console.log("Shop is closed"))
}
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]}`)

        await time(0000)
        console.log("start the production")

        await time (2000)
        console.log("cut the fruit")

        await time (1000)
        console.log("wateer and ice added")

        await time (1000)
        console.log("cons selected")

        await time (2000)
        console.log("choclate is selected for toppings")

        await time (2000)
        console.log("serve choclate")
    }
    catch(error){"customer left"}
    finally{
        console.log("days ended shop closed")
    }
}

kitchen()






































// let toppings_choice = ()=>{
//     return new Promise((resolve,reject)=>{

// setTimeout(()=>{
//     resolve(console.log("Which chooping would you like to choice"));

// },3000);

//     });
// };

// async function kitchen(){
// console.log("A");
// console.log("B");
// console.log("c");
// await toppings_choice();
// console.log("d");
// console.log("e");

// }





// kitchen();
// console.log("cleaning the dishes");
// console.log("cleaning the table");
// console.log("takings other order");
