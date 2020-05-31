
    //Javascript Code
    const val = document.querySelector('.value');
const kelvin = document.querySelector('#k');
const fahrenheit = document.querySelector('#f');
// console.log(fahrenheit);

// Event organise
val.addEventListener('input',function(){
//   console.log("hii");
fahrenheit.innerHTML = parseInt(val.value)*(9/5)+32;
kelvin.innerHTML = parseInt(val.value)+273.15;
});
