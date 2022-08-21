function generatePin() {
  const random = Math.floor(Math.random() * 10000);
  return random;
}

function getPin(): number {
  const pin = generatePin();
  const pinString = pin.toString();
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
