// DATA COLLECTION

// Define constant for Input number element

const numInput = document.getElementById("input-number");

console.log(numInput);

// Define constant for Input Choise element

const userChoiseInput = document.getElementById("input-choise");

console.log(userChoiseInput);

// Define constant for Input Form element

const inputForm = document.getElementById("input-form");

console.log(inputForm);

// Define constant for toggle message element

const messageOutput = document.getElementById("message"); // object | null

console.log(messageOutput);

// LOGICAL EXECUTION

// Submit Click Event

inputForm.addEventListener ("submit", function(e) {

    e.preventDefault() // Prevent default behaviour of form tag

    // Define constant for inserted number value

    const userNum = parseInt(numInput.value);

    console.log(userNum, typeof userNum);

    // Define constant for inserted choise value

    const userChoise = userChoiseInput.value;

    console.log(userChoise, typeof userChoise);

    // Define constant for random number between 1 and 5 value

    const gameRandomNum = getRandomNum( 0, 5 );

    console.log(gameRandomNum, typeof gameRandomNum);

    // Define constant for array of game numbers

    const gameNums = [];

    console.log(gameNums, typeof gameNums);

    // Push (gameRandomNum) and (userNum) in array(gameNums).

    gameNums.push(userNum);

    gameNums.push(gameRandomNum);

    console.log(gameNums, typeof gameNums);

    // Define constant for random number between 1 and 5 value

    const sumNum = sum(gameNums);

    console.log(sumNum, typeof sumNum);

    // OUTPUT

    if (isEven(sumNum) === true) {

        messageOutput.innerHTML = (`Congratulations! You won.`)

        messageOutput.classList.remove("border-danger");

        messageOutput.classList.remove("text-danger");

        messageOutput.classList.add("border-success");

        messageOutput.classList.add("text-success");

    } else {

        messageOutput.innerHTML = (`We are sorry. You lost.`)

        messageOutput.classList.remove("border-success");

        messageOutput.classList.remove("text-success");

        messageOutput.classList.add("border-danger");

        messageOutput.classList.add("text-danger");

    };

    messageOutput.classList.toggle("hidden");

});