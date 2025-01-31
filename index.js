const italic = document.querySelector("i");
let word = "BharatCart.";
let characterIndex = 0;
let reverseType = false;

const intervalId = setInterval(() => {
  if (!reverseType) {
    italic.textContent = word.substring(0, characterIndex++);
    if (characterIndex === word.length) reverseType = true;
  } else {
    italic.textContent = word.substring(0, characterIndex--);

    if (characterIndex === 0) reverseType = false;
  }
}, 250);
