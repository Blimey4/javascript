const str = "Привет, как дела?";

const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]

const getVolwes = str => {
  let extractedVolwes = "";

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      extractedVolwes += currentLetter;
    }
  }

  return extractedVolwes;
}

console.log(getVolwes(str))