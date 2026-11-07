const chat = document.getElementById("chat");
const form = document.getElementById("composer");
const prompt = document.getElementById("prompt");

function addMessage(text, sender) {
  const message = document.createElement("p");
  message.textContent = text;
  message.className = sender;
  chat.appendChild(message);
}

function getReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hey! 🔥 Welcome to Fire Nite AI!";
  }

  if (text.includes("game")) {
    return "Let's create an awesome game together! 🎮";
  }

  if (text.includes("your name")) {
    return "I'm Fire Nite AI, your AI companion!";
  }

  if (text.includes("help")) {
    return "I'm here to help! What would you like to do?";
  }

  return "That's interesting! Tell me more. 🔥";
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const message = prompt.value.trim();
  if (!message) return;

  addMessage(message, "user-message");
  prompt.value = "";

  addMessage(getReply(message), "ai-message");
});

console.log("🔥 Fire Nite AI is ready!");
