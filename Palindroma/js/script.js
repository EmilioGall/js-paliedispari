// Define constant for Input word

const newWordInput = document.getElementById("input-word");

console.log(newWordInput);

// Define constant for Input Form

const inputForm = document.getElementById("input-form");

console.log(inputForm);

// Define constant for toggle message

const messageOutput = document.getElementById("message"); // object | null

console.log(messageOutput);

// Submit Click Event

inputForm.addEventListener ("submit", function(e) {

    e.preventDefault() // Prevent default behaviour of form tag

    const newWord = newWordInput.value;

    console.log(newWord);

    if (isPalindrome(newWord) === true) {

        messageOutput.classList.add("border-success");

        messageOutput.classList.add("text-success");

    } else {

        messageOutput.classList.add("border-danger");

        messageOutput.classList.add("text-danger");

    };

    messageOutput.classList.toggle("hidden");

});