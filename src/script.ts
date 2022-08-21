const generatePinField = document.querySelector(
  "#generate-pin-field"
) as HTMLInputElement;

const pinMatchField = document.querySelector(
  "#pin-match-field"
) as HTMLInputElement;

document
  .querySelector<HTMLButtonElement>("#generate-pin")
  ?.addEventListener("click", () => {
    const randomPin = getPin();

    generatePinField.value = randomPin.toString();
  });

document
  .querySelector<HTMLDivElement>("#calculator")
  ?.addEventListener("click", (e) => {
    const character = (e.target as HTMLDivElement).innerText;

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

document
  .querySelector<HTMLButtonElement>("#verify-pin")
  ?.addEventListener("click", () => {
    const matchSuccess = document.querySelector(
      "#match-success"
    ) as HTMLParagraphElement;
    const matchFailed = document.querySelector(
      "#match-failed"
    ) as HTMLParagraphElement;
    if (generatePinField.value === pinMatchField.value) {
      matchSuccess.style.display = "block";
      matchFailed.style.display = "none";
    } else {
      matchFailed.style.display = "block";
      matchSuccess.style.display = "none";
    }
  });
