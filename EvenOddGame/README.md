# Even/Odd

## Text of the exercise
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

## Solution

### DATA COLLECTION

- [x] Define constant for input number element. (numInput)

- [x] Define constant for user choise element. (userChoiseInput)

- [x] Define constant for input form. (inputForm)

- [x] Define constant for message. (messageOutput)

### LOGICAL EXECUTION

- **ADD EVENT** *Click* on (inputForm)

    - [x] Define constant for input number value. (userNum)

    - [x] Define constant for user choise value. (userChoise)

    - [x] Define constant for function(getRandomArbitrary) value. (gameRandomNum)

    - [x] Define constant for array of game numbers. (gameNums)

    - [x] Push (gameRandomNum) and (userNum) in array(gameNums).

    - [ ] Define constant for function(sum) of array(gameNums). (sumNum)

    ### OUTPUT

    - **IF** function(isEven) value of (sumNum) is same as (userChoise).

        - [ ] Print message "You Won"

    - **ELSE**

        - [x] Print message "You Lost"
