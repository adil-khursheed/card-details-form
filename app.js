const defaultNumber = document.getElementById("default-number");
const defaultName = document.getElementById("default-name");
const defaultMonth = document.getElementById("default-month");
const defaultYear = document.getElementById("default-year");
const defaultPin = document.getElementById("default-pin");
const cardHolderName = document.getElementById("card_holder_name");
const nameError = document.getElementById("name-error");
const cardNumber = document.getElementById("card-number");
const numberError = document.getElementById("number-error");
const expMonth = document.getElementById("exp_month");
const expYear = document.getElementById("exp_year");
const dateError = document.getElementById("date-error");
const cvvPin = document.getElementById("security-pin");
const pinError = document.getElementById("pin-error");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const cardForm = document.querySelector(".card-form");
const completeState = document.querySelector(".completed-state");

// Card Name Validation
cardHolderName.addEventListener('input', () => {
    
    defaultName.innerText = cardHolderName.value;

    let regExp = /[0-9]/g;
    if (regExp.test(cardHolderName.value)) {
        showError(cardHolderName, nameError, 'Wrong format, alphabets only');

    } else {
        showError(cardHolderName, nameError, '', false);
    }

    if (cardHolderName.value == "") {
        defaultName.innerText = "Jane Appleseed";
    }
})


// Card Number Validation
    cardNumber.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w]/g, '').replace(/(.{4})/g, '$1 ').trim();

        defaultNumber.innerText = cardNumber.value;

        let regExp = /[A-z]/g;
        if (regExp.test(cardNumber.value)) {
            showError(cardNumber, numberError, 'Wrong format, numbers only');

        } else {
            showError(cardNumber, numberError, '', false);
        }
        
        if (cardNumber.value == "") {
            defaultNumber.innerText = "0000 0000 0000 0000";
        }
    });


// Month Validation
expMonth.addEventListener('input', () => {

    defaultMonth.innerText = expMonth.value;

    validateLetters(expMonth, dateError);

    if (expMonth.value == "") {
        defaultMonth.innerText = "00";
    }
})



// Year Validation
expYear.addEventListener('input', () => {

    defaultYear.innerText = expYear.value;

    validateLetters(expYear, dateError);

    if (expYear.value == "") {
        defaultYear.innerText = "00";
    }
})


// CVV Validation
cvvPin.addEventListener('input', () => {

    defaultPin.innerText = cvvPin.value;

    validateLetters(cvvPin, pinError);

    if (cvvPin.value == "") {
        defaultPin.innerText = "000";
    }
})


// Form Submission
let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvvValidation = false;

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Validate Name
    if (verifyIsFilled(cardHolderName, nameError)) {
        nameValidation = true;
    } else {
        nameValidation = false;
    }

    // Validate number
    if (verifyIsFilled(cardNumber, numberError) == true) {
        if (cardNumber.value.length == 19) {
            showError(cardNumber, numberError, '', false);
            numberValidation = true;
        } else {
            showError(cardNumber, numberError, 'Please enter a valid number');
            numberValidation = false;
        }
    }

    // Validate Month 
    if (verifyIsFilled(expMonth, dateError)) {
        if (parseInt(expMonth.value) > 0 && parseInt(expMonth.value) <= 12) {
            showError(expMonth, dateError, '', false);
            monthValidation = true;
        } else {
            showError(expMonth, dateError, 'Please enter a valid month');
            monthValidation = false;
        }
    }

    // Validate Year
    if (verifyIsFilled(expYear, dateError)) {
        if (parseInt(expYear.value) > 22 && parseInt(expYear.value) <= 32) {
            showError(expYear, dateError, '', false);
            yearValidation = true;
        } else {
            showError(expYear, dateError, 'Please enter a valid year');
            yearValidation = false;
        }
    }

    // Validate Cvv
    if (verifyIsFilled(cvvPin, pinError)) {
        if (cvvPin.value.length == 3) {
            showError(cvvPin, pinError, '', false);
            cvvValidation = true;
        } else {
            showError(cvvPin, pinError, 'Please enter a valid CVV');
            cvvValidation = false;
        }
    }

    if (nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvvValidation == true) {
        
        cardForm.style.display = 'none';
        completeState.style.display = 'block';
    }
})


// Form Reset
resetBtn.addEventListener('click', () => {
    window.location.reload();
})


// Functions

function showError(divInput, divError, msgError, show = true){
    if(show) {
        divError.innerText = msgError;
        divInput.style.setProperty('--validationColor', 'linear-gradient(white, white), linear-gradient(90deg, hsl(0, 100%, 66%), hsl(0, 100%, 66%))');
        divInput.style.setProperty('--validColor', 'hsl(0, 100%, 66%)');
    } else {
        divError.innerText = msgError;
        divInput.style.setProperty('--validationColor', 'linear-gradient(white, white), linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%))');
        divInput.style.setProperty('--validColor', 'hsl(270, 3%, 87%)');
    }
}

function verifyIsFilled(divInput, divError){
    if(divInput.value.length > 0) {
        showError(divInput, divError, "", false);
        return true;
    } else {
        showError(divInput, divError, "Can't be blank");
        return false;
    }
}

function validateLetters(input, divError){
    let regExp = /[A-z]/g;
    if(regExp.test(input.value)){
        showError(input, divError, 'Wrong format, numbers only');
    }else{
        showError(input, divError, '', false);
    }
}