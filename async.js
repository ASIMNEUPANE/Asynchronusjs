// Asynchronus

console.log(' i  ')

console.log(' eat ')

setTimeout(()=>{
    console.log(' ice cream ')
},2000)

console.log(' with a ')

console.log(' spoon ')


// callback: calling a function inside function is known as callback

function one (call_two){
console.log('step 1')
call_two();
}
function two (){
console.log('step 2')

}
one(two);


























