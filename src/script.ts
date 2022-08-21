document
  .querySelector<HTMLButtonElement>("#generate-pin")
  ?.addEventListener("click", () => {
    const randomPin = getPin();
    const generatePinField = document.querySelector(
      "#generate-pin-field"
    ) as HTMLInputElement;
    generatePinField.value = randomPin.toString();
  });

const numericNumbers = document.querySelectorAll(
  "#numeric-number"
) as NodeListOf<HTMLButtonElement>;
numericNumbers.forEach((number) => {
  number.addEventListener("click", () => {
    const pinMatchField = document.querySelector(
      "#pin-match-field"
    ) as HTMLInputElement;
    const prevNumber = number.innerText;
    pinMatchField.value = prevNumber + prevNumber;
    console.log(number.innerText);
  });
});
