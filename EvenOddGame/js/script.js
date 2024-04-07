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

    console.log("user number", userNum, typeof userNum);

    // Define constant for inserted choise value

    const userChoise = userChoiseInput.value;

    console.log("user choise", userChoise, typeof userChoise);

    // Define constant for random number between 1 and 5 value

    const gameRandomNum = getRandomNum( 0, 5 );

    console.log("random number", gameRandomNum, typeof gameRandomNum);

    // Define constant for array of game numbers

    const gameNums = [];

    console.log("empty array", gameNums, typeof gameNums);

    // Push (gameRandomNum) and (userNum) in array(gameNums).

    gameNums.push(userNum);

    gameNums.push(gameRandomNum);

    console.log("array with input numbers", gameNums, typeof gameNums);

    // Define constant for random number between 1 and 5 value

    const sumNum = sum(gameNums);

    console.log("return of sum function", sumNum, typeof sumNum);



    console.log("return of isEven function", isEven(sumNum), typeof isEven(sumNum));

    // OUTPUT

    if (isEven(sumNum) === userChoise) {

        messageOutput.innerHTML = (`Congratulations! You won.`)

        messageOutput.classList.remove("border-danger");

        messageOutput.classList.remove("text-danger");

        messageOutput.classList.add("border-success");

        messageOutput.classList.add("text-success");

        console.log("return of isEven function", isEven(sumNum), typeof isEven(sumNum));

    } else {

        messageOutput.innerHTML = (`We are sorry. You lost.`)

        messageOutput.classList.remove("border-success");

        messageOutput.classList.remove("text-success");

        messageOutput.classList.add("border-danger");

        messageOutput.classList.add("text-danger");

        console.log("return of isEven function", isEven(sumNum), typeof isEven(sumNum));

    };

    messageOutput.classList.toggle("hidden");

});