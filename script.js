"use strict";
var _a, _b;
(_a = document
    .querySelector("#generate-pin")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const randomPin = getPin();
    const generatePinField = document.querySelector("#generate-pin-field");
    generatePinField.value = randomPin.toString();
});
(_b = document
    .querySelector("#calculator")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => {
    const character = e.target.innerText;
    const pinMatchField = document.querySelector("#pin-match-field");
    let prevNumber = pinMatchField.value;
    if (isNaN(parseInt(character))) {
        if (character === "C") {
            pinMatchField.value = "";
        }
        else if (character === "<") {
            const digits = prevNumber.split("");
            digits.pop();
            pinMatchField.value = digits.join("");
        }
    }
    else {
        const newNumber = prevNumber + character;
        pinMatchField.value = newNumber;
    }
});
