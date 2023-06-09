let input = document.getElementById('input');
let check = document.getElementById('check');
let result = document.getElementById('display');
check.addEventListener('click', function(){
    let worth = input.value
    let reverse = worth.split('').reverse().join(''); 
    console.log(reverse)
    if(worth == reverse){
        result.style.color="green";
        result.style.backgroundColor="yellow";
        result.style.borderRadius="5px";
        result.innerHTML = 'correct it\'s Palindrome'; 
    }
    else{
        result.innerHTML = 'Wrong, not Palindrome';
        result.style.color="white";
        result.style.backgroundColor="red";
        result.style.borderRadius="5px";
    }
    input.value = '';
})