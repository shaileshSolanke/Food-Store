import { placeholderData } from "../data/search-bar-data.js";

const input = document.querySelector("#search");
let count = 0;
setInterval(() => {
  if (count < placeholderData.length) {
    input.placeholder = `Search for ${placeholderData[count++]}`;
  } else {
    count = 0;
  }
},500);
