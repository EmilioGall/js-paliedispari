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

    console.log(newWord, typeof newWord);

    if (isPalindrome(newWord) === true) {

        messageOutput.innerHTML = (`The word <br> "${newWord}" <br> is palindrome.`)

        messageOutput.classList.remove("border-danger");

        messageOutput.classList.remove("text-danger");

        messageOutput.classList.add("border-success");

        messageOutput.classList.add("text-success");

    } else {

        messageOutput.innerHTML = (`The word <br> "${newWord}" <br> is not palindrome.`)

        messageOutput.classList.remove("border-success");

        messageOutput.classList.remove("text-success");

        messageOutput.classList.add("border-danger");

        messageOutput.classList.add("text-danger");

    };

    messageOutput.classList.toggle("hidden");

});