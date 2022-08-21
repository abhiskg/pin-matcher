"use strict";
var _a;
(_a = document
    .querySelector("#generate-pin")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const randomPin = getPin();
    const generatePinField = document.querySelector("#generate-pin-field");
    generatePinField.value = randomPin.toString();
});
const numericNumbers = document.querySelectorAll("#numeric-number");
numericNumbers.forEach((number) => {
    number.addEventListener("click", () => {
        const pinMatchField = document.querySelector("#pin-match-field");
        const prevNumber = number.innerText;
        pinMatchField.value = prevNumber + prevNumber;
        console.log(number.innerText);
    });
});
