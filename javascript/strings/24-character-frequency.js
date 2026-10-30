const message = "Hello";

const messageCount = new Map();

for (let character of message) {
  if (messageCount.has(character)) {
    messageCount.set(character, messageCount.get(character) + 1);
  } else {
    messageCount.set(character, 1);
  }
}

console.log(messageCount);