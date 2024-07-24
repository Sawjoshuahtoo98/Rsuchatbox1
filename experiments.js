
// Select the necessary elements from the DOM
const addTaskForm = document.querySelector('.add-task-form');
const addTaskInput = document.getElementById('add-task-input');
const taskList = document.querySelector('.task-list');

// Function to add a new task
function addTask(taskName) {
    // Create a new list item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Create a new task name element
    const taskNameElement = document.createElement('span');
    taskNameElement.classList.add('task-name');
    taskNameElement.textContent = taskName;

    // Create a new delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('task-delete-button');
    deleteButton.textContent = 'Delete';

    // Attach the task name and delete button to the list item
    taskItem.appendChild(taskNameElement);
    taskItem.appendChild(deleteButton);

    // Attach the task item to the task list
    taskList.appendChild(taskItem);

    // Add an event listener to the delete button for the current task
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}

// Add an event listener to the add task form for adding new tasks
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!addTaskInput.value) return;

    addTask(addTaskInput.value);
    addTaskInput.value = '';
});

// Function to update the digital clock
function updateDigitalClock() {
    const now = new Date();

    // Format the time as hh:mm:ss
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Update the digital clock display
    const digitalClock = document.getElementById('digital-clock');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

    // Call the updateDigitalClock function again after 1 second
    setTimeout(updateDigitalClock, 1000);
}

// Call the updateDigitalClock function to initialize the digital clock
updateDigitalClock();


function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatMessages = document.getElementById("chat-messages");

    if (userInput.trim() !== "") {
        // Display user message
        var userMessage = document.createElement("div");
        userMessage.classList.add("message");
        userMessage.classList.add("user");
        userMessage.textContent = userInput;
        chatMessages.appendChild(userMessage);

        // Simulate AI response
        var aiResponse = document.createElement("div");
        aiResponse.classList.add("message");
        aiResponse.classList.add("ai");
        aiResponse.textContent = "AI: Thank you for your message!";
        chatMessages.appendChild(aiResponse);

        // Clear input field
        document.getElementById("user-input").value = "";

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatMessages = document.getElementById("chat-messages");

    if (userInput.trim() !== "") {
        var userMessage = createMessageElement(userInput, "user");
        chatMessages.appendChild(userMessage);

        // Simulate AI response after a delay
        setTimeout(function () {
            getAIResponse(userInput).then(aiResponse => {
                var aiMessage = createMessageElement(aiResponse, "ai");
                chatMessages.appendChild(aiMessage);

                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            })

        }, 500);

        // Clear input field
        document.getElementById("user-input").value = "";
    }
}

function createMessageElement(message, sender) {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    return messageElement;
}

function getAIResponse(message) {
    // Replace this with your AI logic or API call to get AI response
    // For demonstration, just echoing the user message
    return "AI: You said '" + message + "'.";
}
async function getAIResponse(message) {
    const result = await model.generateContent(message)
    const answer = await result.response;
    const text = await answer.text()
    return text
}
