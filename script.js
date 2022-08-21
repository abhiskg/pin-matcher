"use strict";
var _a, _b, _c;
const generatePinField = document.querySelector("#generate-pin-field");
const pinMatchField = document.querySelector("#pin-match-field");
(_a = document
    .querySelector("#generate-pin")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const randomPin = getPin();
    generatePinField.value = randomPin.toString();
});
(_b = document
    .querySelector("#calculator")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => {
    const character = e.target.innerText;
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
(_c = document
    .querySelector("#verify-pin")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const matchSuccess = document.querySelector("#match-success");
    const matchFailed = document.querySelector("#match-failed");
    if (generatePinField.value === pinMatchField.value) {
        matchSuccess.style.display = "block";
        matchFailed.style.display = "none";
    }
    else {
        matchFailed.style.display = "block";
        matchSuccess.style.display = "none";
    }
});
