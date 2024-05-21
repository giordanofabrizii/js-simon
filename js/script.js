// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/**
 * Return a random number between the min and the max int, included
 * 
 * @param {*} min int number
 * @param {*} max int number
 * @returns int number
 */
function getRandomInt(min,max) {
    return Math.floor(Math.random()* (max - min) + min);
}

// * Generate a list of 5 random numbers all differents
let numbersToRemeber = [];
while (numbersToRemeber.length < 5) {
    num = getRandomInt(1,100);
    if (numbersToRemeber.includes(num) == 0) {
        numbersToRemeber.push(num);
    }
}

// * Show the numbers
const displayEl = document.getElementById("numbers");

for (let i = 0; i < numbersToRemeber.length; i++) {
    let liEl = document.createElement("li");
    liEl.innerHTML = numbersToRemeber[i];
    displayEl.appendChild(liEl);
}

setTimeout(function(){
    // > Erase the content of the numbers container
    displayEl.innerHTML = '';

    // > Have to separate the functions
    setTimeout(function(){
        // > Ask the user to insert the numbers, one by one
        let numberInserted = [];

        for (let i = 0; i < numbersToRemeber.length; i++) {
            let userNum = Number.parseInt(prompt("Per favore inserisci un numero di quelli che ti ricordi"));
            if (numbersToRemeber.includes(userNum) && (numberInserted.includes(userNum) == 0)) {
                // ? If the number is correct and not alredy inserted
                numberInserted.push(userNum);
            }
        }

        // > Show the correct numbers
        let results = "Complimenti, hai indovinato i numeri:"

        if (numberInserted.length == 0) {
            results = "Peccato, non hai inserito nessun numero corretto, erano: ";
            for (let i = 0; i < numbersToRemeber.length; i++) {
                results += ' ' + numbersToRemeber[i]
                if (i != numbersToRemeber.length - 1) {
                    results += ','
                }
            }
        }

        for (let i = 0; i < numberInserted.length; i++) {
            results += ' ' + numberInserted[i]
            if (i != numberInserted.length - 1) {
                results += ','
            }
        }

        console.log(results)

    }, 1);
}, 3000);