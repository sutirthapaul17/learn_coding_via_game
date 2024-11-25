// const door = document.getElementById('door');
// const questionPopup = document.getElementById('questionPopup');
// const options = document.querySelectorAll('.option');

// // Show the popup when the door is clicked
// door.addEventListener('click', () => {
//     questionPopup.style.display = 'block'; // Show popup
// });

// // Handle option clicks
// options.forEach(option => {
//     option.addEventListener('click', function() {
//         if (this.dataset.correct === "true") {
//             // Correct answer: Open the door
//             door.src = 'images/library_door_open.webp'; // Change to open door image
//             door.style.transform = 'scale(1.1)'; // Optional: Slight scale effect
//             setTimeout(() => {
//                 door.style.transform = 'scale(1)'; // Reset scale after a moment
//             }, 500);
//             questionPopup.style.display = 'none'; // Close popup
//         } else {
//             // Wrong answer: Turn options red
//             options.forEach(opt => {
//                 if (opt.dataset.correct === "false") {
//                     opt.classList.add('red'); // Mark wrong options red
//                 }
//             });
//             // Optionally, give feedback
//             alert('Wrong answer! Try again.');
//         }
//     });
// });

// // Close the popup when the close button is clicked
// document.getElementById('closePopup').addEventListener('click', () => {
//     questionPopup.style.display = 'none';
// });


const door = document.getElementById('door');
const questionPopup = document.getElementById('questionPopup');
const options = document.querySelectorAll('.option');
const instructionBox = document.getElementById('instructionBox');
const instructionText = document.getElementById('instructionText');

let doorIsOpen = false; // Track whether the door is open

// Array of different instructions
// const instructionMessages = [
//     "Try clicking on the door!",
//     "Can you solve the question?",
//     "Look at the options carefully.",
//     "Remember, you can try again!"
// ];

// Show the popup only when the door is clicked (if door is closed)
door.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the page click event from firing
    
    if (doorIsOpen) {
        // Redirect to the next page if the door is open
        window.location.href = 'level1/index.html'; // Replace 'nextPage.html' with your desired URL
    } else {
        // Show the popup if the door is still closed
        questionPopup.style.display = 'block';
    }
});

// Handle option clicks
options.forEach(option => {
    option.addEventListener('click', function() {
        if (this.dataset.correct === "true") {
            // Correct answer: Open the door
            door.src = 'images/library_door_open.webp'; // Change to open door image
            door.style.transform = 'scale(1.1)';
            doorIsOpen = true; // Mark that the door is now open
            setTimeout(() => {
                door.style.transform = 'scale(1)';
            }, 500);
            questionPopup.style.display = 'none'; // Close popup
        } else {
            // Wrong answer: Turn options red
            options.forEach(opt => {
                if (opt.dataset.correct === "false") {
                    opt.classList.add('red');
                }
            });
            alert('Wrong answer! Try again.');
        }
    });
});

// Close the popup when the close button is clicked
document.getElementById('closePopup').addEventListener('click', () => {
    questionPopup.style.display = 'none';
});

// // Change the instruction text when the page is clicked
// document.body.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * instructionMessages.length);
//     instructionText.textContent = instructionMessages[randomIndex];
// });
