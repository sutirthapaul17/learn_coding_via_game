let submit=document.querySelector("#submit");

let nextTaskButton = document.createElement("button"); // Create the Next Task button
nextTaskButton.id = "ntb";
nextTaskButton.textContent = "Next Task"; // Set the button text
nextTaskButton.style.display = "none"; // Initially hide the button

// Add some styles
nextTaskButton.style.backgroundColor = "#5e35b1";
nextTaskButton.style.color = "white"; // White text
nextTaskButton.style.border = "none"; // No border
nextTaskButton.style.padding = "10px 20px"; // Padding
nextTaskButton.style.textAlign = "center"; // Centered text
nextTaskButton.style.textDecoration = "none"; // No underline
nextTaskButton.style.display = "inline-block"; // Inline-block display
nextTaskButton.style.fontSize = "16px"; // Font size
nextTaskButton.style.marginTop = "10px"; // Margin above
nextTaskButton.style.cursor = "pointer"; // Pointer cursor on hover
nextTaskButton.style.borderRadius = "15px"; // Pointer cursor on hover
// Append the button to the box div
document.querySelector(".box").appendChild(nextTaskButton);

const answer=`a=int(input("Enter an integer:"))
print(a)`;
submit.addEventListener('click',function(){
    const ucode=document.getElementById("code").value;
    let out=document.getElementById("output");

    console.log(ucode);
    console.log(answer);
    console.log(ucode == answer);
    if(ucode == answer){
        out.textContent="Nice job ! Your code is correct.";
        out.style.color="green";

        nextTaskButton.style.display = "block"; // Show the Next Task button

    }else{
        out.textContent="OOPs!! something went wrong .Try again";
        out.style.color="red";
        nextTaskButton.style.display = "block"; // Show the Next Task button
    }
});

let next=document.querySelector("#ntb").addEventListener('click',()=>{
    window.location.href="../level2n/index.html";
});
window.onload = nextTaskButton.style.display = "none";