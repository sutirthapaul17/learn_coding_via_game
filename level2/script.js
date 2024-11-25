// Mentor messages array
let mentorMessages = [
    "Let's talk about variables! You can store numbers in them. Can you create a variable?",
    "Great! Now, can you add two numbers using variables?",
    "Awesome! Now try subtracting two numbers."
];

let currentMessageIndex = 0;

// Function to update mentor's message
function updateMentorMessage() {
    let mentorBox = document.getElementById("mentorBox");
    mentorBox.innerText = mentorMessages[currentMessageIndex];
    if (currentMessageIndex < mentorMessages.length - 1) {
        currentMessageIndex++;
    }
}

// Function to allow the drop of items
function allowDrop(ev) {
    ev.preventDefault();
}

// Function to drag items
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Function to drop items
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let droppedElement = document.getElementById(data).cloneNode(true);
    document.getElementById("codeArea").appendChild(droppedElement);
}

// Function to evaluate code and display output
function evaluateCode() {
    let userCode = document.getElementById("codeArea").innerText;

    try {
        // Mocking an evaluation of the user's code.
        // This is a simple example of showing a static result for the mock code.
        if (userCode.includes("x = 5;") && userCode.includes("y = 10;") && userCode.includes("print(x + y);")) {
            document.getElementById("outputBox").innerText = "Output: 15";  // Mock result
            updateMentorMessage();  // Update mentor message for the next challenge
        } else {
            document.getElementById("outputBox").innerText = "Incorrect code. Try again!";
        }
    } catch (error) {
        document.getElementById("outputBox").innerText = "Error in your code. Please review!";
        console.error("Error evaluating code:", error);
    }
}
