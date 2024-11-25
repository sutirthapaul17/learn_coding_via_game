// document.addEventListener('DOMContentLoaded', () => {
//     const mentorTextElement = document.getElementById('mentorText');
//     const mentorMessage = `Hi buddy, you know we use print() to show output and input() to take input. 
//     A sample code for that is:
//     print("Enter your name:")
//     name = input()
//     print("Hello", name)
//     Can you do that?`;

//     // Function to simulate typing effect
//     function typeMessage(message, element, delay = 100) {
//         let index = 0;
//         function typeNextLetter() {
//             if (index < message.length) {
//                 element.innerHTML += message[index];
//                 index++;
//                 setTimeout(typeNextLetter, delay); // Adjust delay to speed up/slow down typing
//             }
//         }
//         typeNextLetter();
//     }

//     // Call the typing function on page load
//     typeMessage(mentorMessage, mentorTextElement, 50); // Adjust the delay (50ms) as desired
// });



document.addEventListener('DOMContentLoaded', () => {
    const mentorTextElement = document.getElementById('mentorText');
    const mentorMessage = `Hi buddy, you know we use print() to show output and input() to take input. 
    A sample code for that is:
    <span class="code-snippet">name=input("Enter your name")\nprint("Hello",name)</span>
    Can you do that?`;

    // Function to simulate typing effect
    function typeMessage(message, element, delay = 100) {
        let index = 0;
        function typeNextLetter() {
            if (index < message.length) {
                element.innerHTML += message[index];
                index++;
                setTimeout(typeNextLetter, delay); // Adjust delay to speed up/slow down typing
            }
        }
        typeNextLetter();
    }

    // Call the typing function on page load
    // typeMessage(mentorMessage, mentorTextElement, 50); // Adjust the delay (50ms) as desired

    // Extracting the code snippet for comparison
    const codeSnippetElement = document.createElement('div');
    codeSnippetElement.innerHTML = mentorMessage; // Insert the mentorMessage HTML
    const codeSnippet = codeSnippetElement.querySelector('.code-snippet').textContent; // Get the text content of the code snippet

    // Display the mentor message without the span
    const messageWithoutSpan = mentorMessage.replace(/<span class="code-snippet">.*?<\/span>/, '');
    mentorTextElement.innerHTML = messageWithoutSpan; // Replace with message without span
    typeMessage(messageWithoutSpan, mentorTextElement, 50);

    console.log('Code snippet for comparison:', codeSnippet); // You can use this variable for comparison later
});

// document.addEventListener('DOMContentLoaded', () => {
//     const mentorTextElement = document.getElementById('mentorText');
//     const mentorMessage = `Hi buddy, you know we use print() to show output and input() to take input. 
//     A sample code for that is:
//     <span class="code-snippet">name = input("Enter your name")\nprint("Hello", name)</span>
//     Can you do that?`;

//     // Extracting the code snippet for comparison
//     const codeSnippetElement = document.createElement('div');
//     codeSnippetElement.innerHTML = mentorMessage; // Insert the mentorMessage HTML
//     const codeSnippet = codeSnippetElement.querySelector('.code-snippet').textContent; // Get the text content of the code snippet

//     // Display the mentor message without the span
//     const messageWithoutSpan = mentorMessage.replace(/<span class="code-snippet">.*?<\/span>/, '');
//     mentorTextElement.innerHTML = messageWithoutSpan; // Set to message without span

//     // Function to simulate typing effect
//     function typeMessage(message, element, delay = 100) {
//         let index = 0;
//         function typeNextLetter() {
//             if (index < message.length) {
//                 element.innerHTML += message[index];
//                 index++;
//                 setTimeout(typeNextLetter, delay); // Adjust delay to speed up/slow down typing
//             }
//         }
//         typeNextLetter();
//     }

//     // Call the typing function with the message without span
//     typeMessage(messageWithoutSpan, mentorTextElement, 50); // Adjust the delay (50ms) as desired

//     console.log('Code snippet for comparison:', codeSnippet); // You can use this variable for comparison later
// });




x= `name=input("Enter your name")
print("Hello",name)`;

document.getElementById('submitCode').addEventListener('click', function() {
    const userCode = document.getElementById('codeInput').value;

    console.log(userCode);
    console.log(x);
    console.log(userCode == x);
    if (userCode==x) {
        document.getElementById('popupModal').style.display = 'flex';
        // alert('You submitted:\n' + userCode); // You can modify this to handle code evaluation or feedback
    } else {
        alert('Please type your code!');
    }
});

document.getElementById('quizBtn').addEventListener('click', function() {
    
    window.location.href = 'quiz.html'; 
});

// Function to exit the game
document.getElementById('exitBtn').addEventListener('click', function() {
    // Close the modal
    document.getElementById('popupModal').style.display = 'none';
    // Optionally, you can also redirect to a different page or perform any cleanup
});


// name=input("Enter your name: ")
// print("Hello", name)