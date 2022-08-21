document
  .querySelector<HTMLButtonElement>("#generate-pin")
  ?.addEventListener("click", () => {
    const randomPin = getPin();
    const generatePinField = document.querySelector(
      "#generate-pin-field"
    ) as HTMLInputElement;
    generatePinField.value = randomPin.toString();
  });

document
  .querySelector<HTMLDivElement>("#calculator")
  ?.addEventListener("click", (e) => {
    const character = (e.target as HTMLDivElement).innerText;
    const pinMatchField = document.querySelector(
      "#pin-match-field"
    ) as HTMLInputElement;
    let prevNumber = pinMatchField.value;
    if (isNaN(parseInt(character))) {
      if (character === "C") {
        pinMatchField.value = "";
      } else if (character === "<") {
        const digits = prevNumber.split("");
        digits.pop();
        pinMatchField.value = digits.join("");
      }
    } else {
      const newNumber = prevNumber + character;
      pinMatchField.value = newNumber;
    }
  });
