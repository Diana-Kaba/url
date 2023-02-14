let text = document.getElementById("text");

let arr = [
  "https://www.w3schools.com/",
  "this is not a URL",
  "https://google.com/",
  "123461",
  "https://en.wikipedia.org/wiki/JavaScript",
  "http://not a valid url",
  "abc http://invalid.url/",
];

let newArr = [];

let reg = /https?:\/\/[^"]+/gi;

for (let i = 0; i < arr.length; i++) {
  if (reg.test(arr[i])) {
    newArr += arr[i];
  }
}

text.innerHTML = newArr;
