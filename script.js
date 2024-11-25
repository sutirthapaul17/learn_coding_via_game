// const startButton = document.getElementById('startButton');
// const nameInput = document.getElementById('nameInput');
// const page1 = document.getElementById('page1');
// const page2 = document.getElementById('page2');
// const questionPopup = document.getElementById('questionPopup');
// const door = document.getElementById('door');

// startButton.addEventListener('click', () => {
//     const userName = nameInput.value || "User";
//     page1.classList.add('hidden');
//     page2.classList.remove('hidden');
//     questionPopup.classList.remove('hidden');

//     door.style.transform = 'scale(1.1)'; // Slightly animate the door
//     setTimeout(() => {
//         door.style.transform = 'scale(1)'; // Reset scale
//     }, 200);
// });

// // Handle MCQ answer
// document.querySelectorAll('.option').forEach(button => {
//     button.addEventListener('click', () => {
//         if (button.getAttribute('data-answer') === 'correct') {
//             door.innerHTML = '🚪 (Door opens)';
//             // Add further animations for door opening here if desired
//         } else {
//             alert('Wrong answer! Try again.');
//         }
//     });
// });


const texts = [
    "Let's learn something!",
    "Python is fun!",
    "Click for another!",
    "Java is powerful!",
    "Time for some C language!"
];

let currentIndex = 0;

// Change thought text on any click
document.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % texts.length; // Cycle through the texts
    document.getElementById('thoughtText').innerText = texts[currentIndex];
});

// Add functionality to the start button
// document.getElementById('startButton').addEventListener('click', () => {
//     alert('The game has started!'); // Replace with your game start logic
// });

document.getElementById('startButton').addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.classList.add('fade-out'); // Add fade-out class to trigger CSS transition

    // Wait for the fade-out transition to finish before navigating
    setTimeout(() => {
        window.location.href = 'doorPage.html'; // Change this to your next page
    }, 500); // Match this time with your CSS transition duration
});
