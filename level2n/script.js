let codeStack = []; 

let a=document.getElementById("variable1");
let b=document.getElementById("variable2");
let reset=document.getElementById("reset");
let code=document.getElementById("code");

// const existingCode1 = 'a = input("")\nb = input("")\nc =a + b\nprint("c")\n'; 
const existingCode1 = 'a=5\nb=10\nc =a + b\nprint(c)'; 


function allowDrop(event) {
    event.preventDefault(); 
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id); 
}

let score = localStorage.getItem('gameScore') ? parseInt(localStorage.getItem('gameScore')) : 0;
const scoreDisplay = document.getElementById('score');

function goToHome() {
    localStorage.clear();  // Clears all data in localStorage
    sessionStorage.clear();
    // Use relative path to navigate back to home.html
    window.location.href = '../index.html';
}

function goBack(){
    window.location.href = '../level1/quiz.html';
}

let count=0;
let cnt=0;
let cnt2=0;



function drop(event) {
    event.preventDefault(); 
    const data = event.dataTransfer.getData("text"); 
    const draggedElement = document.getElementById(data);

    let newCode = ""; 

    if (draggedElement.innerText === 'print(int)') {

        const box = document.createElement("input");
        box.type = "text";
        box.placeholder = "Enter number";
        box.id = "numid";
        box.onkeypress = function(event) {
            if (event.key === 'Enter') {
                updatePrintStatement(`print(${box.value})`); 
                box.remove();
            }
        };
        document.getElementById('resultSpace').appendChild(box);
        box.focus(); 
        codeStack.push('print()\n');
    }
    else if (draggedElement.innerText === 'print') {
        
        const inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.placeholder = "Enter your text";
        inputBox.id = "textid";
        inputBox.onkeypress = function(event) {
            if (event.key === 'Enter') {
                updatePrintStatement(`print("${inputBox.value}")`); // Update the print statement
                inputBox.remove(); // Remove the input box
            }
        };
        document.getElementById('resultSpace').appendChild(inputBox);
        inputBox.focus(); // Focus the input box for immediate typing
        codeStack.push('print("")\n'); // Add empty string to print
    }
    
    if (draggedElement.innerText === 'input') {
       
        count++;
        const inputBox = document.createElement("input");
        inputBox.type = "number";
        inputBox.placeholder = "Enter number";
        inputBox.id = "numInput";
        inputBox.onkeypress = function(event) {
            if (event.key === 'Enter') {
                
                if(count==1){
                    // const inputValue = inputBox.value;
                    // a= inputBox.value;
                    updatePrintStatement(`a = input("")`); // Update the input statement
                    // updatePrintStatement(`a = input("${inputBox.value}")`); 
                }else if(count==2){
                    // b= inputBox.value;
                    updatePrintStatement(`b = input("")`); // Update the input statement
                    // updatePrintStatement(`b = input("${inputBox.value}")`);
                }
                
                inputBox.remove(); 
            }
        };
        document.getElementById('resultSpace').appendChild(inputBox);
        inputBox.focus(); 

        if(count==1){
            codeStack.push('a = input("")\n'); 
        }else if(count==2){
            codeStack.push('b = input("")\n');
        }
        
    }
    else if(draggedElement.innerText === 'variable'){
        newCode = "c =";
        //codeStack.push(`${newCode};\n`);
    }
    else if(draggedElement.innerText === 'a=5' ){
        cnt++;
        if(cnt==1){
            newCode= `a=5`;
        }else if(cnt==2){
            newCode= `a`
        }
       
        // newCode= `${a}`;
    }
    else if(draggedElement.innerText === 'b=10' ){

        cnt2++;
        if(cnt2==1){
            newCode= `b=10`;
        }else if(cnt2==2){
            newCode= `b`
        }

        
        // newCode= `${b}`;
    }
    // else if (draggedElement.innerText === '1' || draggedElement.innerText === '2') {
    //     newCode = draggedElement.innerText; // Add number to code
    // }
    else if (draggedElement.innerText === 'add') {
        newCode = " + ";  
    }

    else if (draggedElement.innerText === 'newline') {
        // Display in the result space
        // const newLineElement = document.createElement("div");
        // newLineElement.textContent = '\nprint("\\n")'; // Display "print("\n")"
        // document.getElementById('resultSpace').appendChild(newLineElement);
        
        codeStack.push('\n'); // Push "print("\n")" to the codeStack
    }
    // else if (draggedElement.innerText === 'subtract') {
    //     newCode = " - "; 
    // }
    // else if (draggedElement.innerText === 'multiply') {
    //     newCode = " * ";  
    // }
        
    if (newCode) {
        codeStack.push(newCode);  
    }
    
    updateResult();
}
function updatePrintStatement(userString) {
    // Update the code in codeStack to reflect the user's input
    codeStack[codeStack.length - 1] = userString + '\n';
    updateResult(); // Update the displayed code
}


function updateResult() {
    // Join the codeStack to display the full code
    document.getElementById('result').textContent = codeStack.join('');
    console.log(codeStack);
    // console.log(count);
}

function performAction() {
    console.log(`Existing code is \n${existingCode1}`);
    console.log(`Generated code is \n${codeStack.join('')}`);
    
    // Clear the code area
    code.innerHTML = "";

    // Join the generated code and trim both existing and generated code for comparison
    let generatedCode = codeStack.join('').trim();
    let existingCode = existingCode1.trim();
    
    code.innerHTML += `${existingCode}\n`;
    code.innerHTML += `${generatedCode}\n`;

    // Check if the trimmed versions match
    if (generatedCode === existingCode) {
        console.log('Generated code matches existing code!');
        code.innerHTML = "Generated code matches existing code!\n";
        // score += 10; 
        // localStorage.setItem('gameScore', score);  
        // scoreDisplay.textContent = 'Score: ' + score;  

        // Show the modal on success
        document.getElementById('popupModal').style.display = 'flex';
    } else {
        console.log('Generated code differs from existing code.');
        code.innerHTML = "Generated code differs from existing code!\n";
        code.style.color='red';
    }
}

document.getElementById('quizBtn').addEventListener('click', function() {
    // alert('Redirecting to quiz...');
    // Redirect to your quiz page here, e.g.,
    window.location.href = 'quiz.html'; // Example of redirection
});

// Function to exit the game
document.getElementById('exitBtn').addEventListener('click', function() {
    // Close the modal
    document.getElementById('popupModal').style.display = 'none';
    // Optionally, you can also redirect to a different page or perform any cleanup
});

function openModal() {
    document.getElementById('tutorialModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('tutorialModal').style.display = 'none';
}

reset.addEventListener('click', () => {
    
    window.location.reload();
    // document.getElementById('resultSpace').textContent = '';
});

window.onload = openModal;