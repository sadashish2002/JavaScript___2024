const form = document.querySelector('form')
// console.log(form);

// form get submit by Post and get
form.addEventListener('submit',function(e){
    e.preventDefault() // stop it to not sumbit in url or anywhere
    
    const height = parseInt(document.querySelector('#height').value)  //convert string to integer value
    const weight = parseInt(document.querySelector('#weight').value)  //convert string to integer value
    const results = document.querySelector('#results') // no need of parseInt() because its a element only
    
    if(height === '' || height <0 || isNaN(height)){
          results.innerHTML = `please give a valid height ${height}`;
    }else if(weight === '' || weight <0 || isNaN(weight)){
          results.innerHTML = `please give a valid height ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000).toFixed(2));
        if(bmi< 18.6){ 
            results.innerHTML = `Your BMI Score is : ${bmi.toFixed(2)}. So You are Underweight !!!`;
        }else if(bmi>18.6 && bmi <24.9){
            results.innerHTML = `Your BMI Score is : ${bmi.toFixed(2)}.So You have Normalweight !!!`;

        }else{
            results.innerHTML = `Your BMI Score is : ${bmi.toFixed(2)} .So You are Over weight !!!`;

        }
    }  

    // results.innerHTML=`${height}`;
})
