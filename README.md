Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

<!-- SVOLGIMENTO -->
Ciclo for 5 volte
    Random number generator (da 1 a 100 per non fare numeri troppo lunghi)
Aggiungi in pagina i 5 numeri
setTimeout di 30 secondi
    cancella i numeri in pagina
    Ciclo for 5 volte
        prompt per chiedere i numeri
        verificare che il numero sia nella lista di quelli generati
            se c'era, salvarlo in una lista
    Visualizzare i numeri inseriti correttamente