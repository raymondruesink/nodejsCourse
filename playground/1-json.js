const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Raymond";
user.age = 46;

const modifiedData = JSON.stringify(user);
fs.writeFileSync('1-json.json', modifiedData);