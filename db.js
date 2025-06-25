const messages = [
  {
    text: "test message",
    user: "test name",
    added: new Date(),
  },
];

async function getMessages() {
  return messages;
}

async function getMessageByAuthor(authorName) {
  return messages.find(
    (message) => message.user.toLowerCase() === authorName.toLowerCase()
  );
}

async function addMessage(text, user) {
  messages.push({ text: text, user: user, added: new Date() });
}

module.exports = { getMessages, getMessageByAuthor, addMessage };
