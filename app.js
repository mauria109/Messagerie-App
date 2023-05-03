const socket = io();

// Get DOM elements
const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-input');
const messages = document.querySelector('#messages');

// Add event listener for message form submission
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get message value from input
    const message = messageInput.value;

    // Emit message to server
    socket.emit('message', message);

    // Clear message input field
    messageInput.value = '';
});

// Add event listener for incoming messages
socket.on('message', (message) => {
    // Create new message item and add to DOM
    const messageItem = document.createElement('li');
    messageItem.textContent = message;
    messages.appendChild(messageItem);
});
