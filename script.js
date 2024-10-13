const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const palindrome = (event) => {
    event.preventDefault();
    const inputField = document.getElementById("text-input").value;

 if (inputField === ""){
    alert("Please input a value");
    return;
}
const cleaningInput = inputField.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const checking = cleaningInput.split('').reverse().join('');


   

if(cleaningInput === checking){
    resultText.innerHTML = `<strong>${inputField}</strong> is a palindrome`;
    resultText.style.color = 'green'
    

}else if (cleaningInput !== checking){
    resultText.innerHTML = `<strong>${inputField}</strong> is not a palindrome`
    resultText.style.color = 'red'
}
}
checkBtn.addEventListener("click", palindrome);


