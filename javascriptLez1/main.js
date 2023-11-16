// eserzio 1 scrivere 5 variabili e fare somma,media e output in consol con stringa

let a = 3;
let b = 5;
let c = 7;
let d = 10;
let e = 12;

let somma = a + b + c + d + e;
let media = somma / 5;
let presentazione = `La somma tra i numeri equivale a ${somma} e la media risulta ${media}`;
console.log(presentazione);

//eserecizio 2.Scrivi due variabili con l’anno corrente e l’anno di nascita, e stampa in console:
//l’età della persona, 
//quanti anni sono necessari per raggiungere i 100
//e stampi in console la frase: “Hai 26 anni e ti mancano 74 anni per compierne 100”

let oggi = 2023;
let nascita = 1990;
let età = oggi - nascita ;
let anniMancanti = 100 - età ;
let presentazioneOggi = `La persona ha ${età} anni `; 
let presentazioneAnniMancanti =`e per arrivare a 100 gli mancano ${anniMancanti} anni`;
console.log(presentazioneOggi);
console.log(presentazioneAnniMancanti);
let presentazioneFinale = presentazioneOggi + presentazioneAnniMancanti;
console.log(presentazioneFinale);

// Esercizio 3: Scrivere un programma che dati:
// a) Un numero totale di gatti (44) 
// b) Il numero dei gatti presenti in ogni fila (6)
// Restituisca in output: 
// Il numero di file risultanti 
// indicare il numero di gatti mancanti per completare una nuova fila
// Esempio: “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”

let tot = 44;
let fila = 6;
let file = tot / fila ;
let modulo = tot & fila;
let presentazionegatti = `ci sono ${file} file di gatti e ne mancano 2 per una nuova fila, con un avanzo di ${modulo} `;
console.log(presentazionegatti);

// EXTRA:
// Scrivi un programma che dati sette valori relativi alle temperature della settimana stabilisca la giornata più calda e quella più fredda.
// Esempio:
// Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
// “La temperatura piu’ calda e’ 31  quella piu’ fredda -6”     PROVATE A CERCARE  Math.max()  E  Math.min() che vi servono per l esercizio.  VI ANTICIPO CHE SONO UN ARGOMENTO DI DOMANI 

let temperaturaMassima = Math.max(10,-2,31,22,15,-6,7);
let temperaturaMinima = Math.min(10,-2,31,22,15,-6,7);
let temperatura =`la temp max è ${temperaturaMassima} mentre la minima è ${temperaturaMinima}`;
console.log(temperatura);