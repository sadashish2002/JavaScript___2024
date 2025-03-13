// Immediately Invoked Function Expression (IIFE)
// IIFE - we use it because sometimes problem happens due to global scope pollution .
// So to remove that global declaration pollution we use IIFE

//syntac of  IIFE - (function definition)(function call)
    // different way to declare fun inside IIFE syntax but use ; symbol
(function chai(){
    //named IIFE
    console.log(`DB connected`);  
})();
        //or
(()=>{
    console.log(`Db connected `);
})();

   //if argument will pass to function definintion
((name)=>{
    console.log(`Db connected ${name}`);
})("Sadashish")