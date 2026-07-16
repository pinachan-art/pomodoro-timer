# 🍅 Pomodoro Timer
-------------------------------------------------------------------------------------
Pomodoro Timer è realizzato con "HTML, CSS e JavaScript".  
Permette di gestire sessioni di lavoro e pause in modo automatico.

-------------------------------------------------------------------------------------

## Funzionamento

Il timer è diviso in due modalità:

-  LAVORO
-  PAUSA BREVE
-  PAUSA LUNGA
-  AVVIO

### Avvio
Quando si clicca il pulsante `Avvia`:
- parte un timer con `setInterval`
- ogni secondo il tempo diminuisce (`tempoRimasto--`)
- lo schermo si aggiorna automaticamente

###  Cambio fase
Quando il tempo arriva a **0**:

- se sei in **LAVORO**:
  - aumenta il numero di sessioni
  - aggiorna i minuti totali
  - salva i dati automaticamente
  - passa a **PAUSA**
        -ogni 4 sessioni = pausa lunga
        -altrimenti = pausa breve
  - cambia lo sfondo

- se sei in **PAUSA**:
  - torna a **LAVORO**
  - cambia lo sfondo


### Pausa
Il pulsante pausa:
- ferma il timer con `clearInterval`
- mantiene il tempo corrente


### Reset
Il reset:
- ferma il timer
- riporta tutto a zero
- torna alla modalità **LAVORO**

### Salvataggio dati 
Il progetto utilizza localStorage per salvare :
- numero di sessioni complete
- minuti totali di lavoro

I dati vengono :
- salvati automaticamente dopo ogni sessione 

-------------------------------------------------------------------------------------
## Variabili principali

```js
var tLavoro = 1 * 60; // durata lavoro (in secondi)
var tPausaLunga = 2 * 60; //durata pausa lunga(in secondi)
var tPausaBreve = 1 * 60; //durata pausa breve (in secondi)

var sessioni = 0; // numero sessioni completate
var totMin = 0;   // minuti totali lavorati
