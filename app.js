const defaultNumber = document.getElementById("default-number");
const defaultName = document.getElementById("default-name");
const defaultMonth = document.getElementById("default-month");
const defaultYear = document.getElementById("default-year");
const defaultPin = document.getElementById("default-pin");
const cardHolderName = document.getElementById("card_holder_name");
const cardNumber = document.getElementById("card-number");
const numberError = document.getElementById("number-error");
const expMonth = document.getElementById("exp_month");
const expYear = document.getElementById("exp_year");
const dateError = document.getElementById("date-error");
const cvvPin = document.getElementById("security-pin");
const pinError = document.getElementById("pin-error");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");


const inputName = () => {
    defaultName.innerHTML = cardHolderName.value;
    if (defaultName.innerHTML == "") {
        let name = "Jane Appleseed"
        defaultName.innerHTML = name;
    }
}

const inputNumber = () => {
    cardNumber.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w]/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
    
    let cardNumberInput = cardNumber.value;
    defaultNumber.innerHTML = cardNumberInput;
    if (defaultNumber.innerHTML == "") {
        let number = "0000 0000 0000 0000"
        defaultNumber.innerHTML = number;
    }

    if (!cardNumberInput.match(/^[0-9]{20}$/)) {
        cardNumber.style.setProperty('--validationColor', 'linear-gradient(white, white), linear-gradient(90deg, hsl(0, 100%, 66%), hsl(0, 100%, 66%))');
        numberError.innerHTML = 'Wrong format, numbers only';

        return false;
    }

    cardNumber.style.setProperty('--validationColor', 'linear-gradient(white, white), linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%))');
    numberError.innerHTML = '';

    return true;
}