let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],

};


let is_shop_open = true;

let order = (time, work)=>{

    return new Promise( (resolve, reject)=>{
if(is_shop_open){

    setTimeout(()=>{
        resolve(work())
    },time)
   
}
else{
    reject(console.log("our shop is close"))
}
    })



}

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(0000,()=> console.log("production has started"))
})

.then(()=>{
    return order(2000, ()=> console.log("the fruits was chopped"))
})
.then(()=>{
    return order(1000, ()=> console.log("Ice and water added"))
})
.then(()=>{
    return order(1000, ()=> console.log(`${stocks.holder[0]} has been selected`))
})
.then(()=>{
    return order(1000, ()=> console.log(`${stocks.toppings[0]} has been selected`))
})
.then(()=>{
    return order(1000, ()=> console.log(`IceCream has been selected`))
})


.catch(()=>{
    console.log("Customer left")
})


.finally(()=>{
    console.log("day ended, shop is closed")
})