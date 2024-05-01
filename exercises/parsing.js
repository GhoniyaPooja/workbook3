let name = "Pooja Kirit Ghoniya";
let positionOfFirstSpace = name.indexOf(" ");
let positionOfLastSpace = name.lastIndexOf(" ");
let firstName = name.substring(0, positionOfFirstSpace);
let middleName = name.substring(positionOfFirstSpace + 1, positionOfLastSpace);
let lastName = name.substring(positionOfLastSpace + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);