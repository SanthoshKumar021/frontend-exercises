const message = "Hey there, Its pleasure to be here";
let reversedMessage = "";

for (let i = message.length - 1; i >= 0; i--) {
  reversedMessage += message[i];
}

console.log(reversedMessage);