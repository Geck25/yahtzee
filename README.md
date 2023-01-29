# Yahtzee
Ho implementato questo popolare gioco di dadi chiamato Yahtzee con React. 

## COME SI GIOCA
L'obiettivo del gioco è quello di completare tutte le righe della tabella con il massimo punteggio
possibile. Per completare una riga è possibile fare un massimo di tre lanci con la possibilità
di poter bloccare (attraverso un click sopra il dado) i dadi che si ritengono adeguati e quindi di non cambiare il loro valore al tiro successivo

## PUNTEGGI
I punteggi sono:
- ***dall'1 al 6***: si vanno a sommare tutti i dadi del numero in questione (ad esempio con tre dadi su cinque col numero 1 cliccando sull'uno otterremo 3 punti)
- ***Bonus***: ottenendo almeno 63 punti sommando le prime sei righe si ottiene un bonus di 35 punti
- ***Doppio***: ci deve essere almeno una coppia di dadi uguali, punteggio fisso di 10 punti
- ***Due doppi***: ci devono essere due coppie di dadi uguali, punteggio fisso di 20 punti
- ***Triplo***: ci devono essere almeno tre dadi uguali, il punteggio è la somma di tutti i dadi
- ***Quadruplo***: ci devono essere almeno quattro dadi uguali, il punteggio è la somma di tutti i dadi
- ***Scala minima***: ci deve essere una scala formata da almeno quattro dadi, punteggio fisso di 30 punti
- ***Scala massima***: ci deve essere una scala formata da tutti e cinque i dadi, punteggio fisso di 40 punti
- ***Yahtzee***: tutti e cinque i dadi uguali, punteggio fisso di 50 punti
- ***Chance***: nessuna combinazione in particolare, il punteggio è la somma di tutti i dadi. 

##
Per poter eseguire l'applicazione l'ho caricata al seguente indirizzo https://yahtzee-geck.web.app
oppure va compilata da terminale. 

