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

// Generate a list of 5 random numbers all differents
let numbersToRemeber = [];
while (numbersToRemeber.length < 5) {
    num = getRandomInt(1,100);
    if (numbersToRemeber.includes(num) == 0) {
        numbersToRemeber.push(num);
    }
}