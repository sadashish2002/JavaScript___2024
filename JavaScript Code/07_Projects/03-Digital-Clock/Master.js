const clock = document.getElementById('clock')


//The setInterval() method of the Window interface repeatedly calls a function 
// or executes a code snippet,with a fixed time delay between each call.
 // syntax - setInterval(function,delay)

 setInterval(() => {
let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();   
}, 1000);