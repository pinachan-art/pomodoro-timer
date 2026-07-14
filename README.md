# 🍅 Pomodoro Timer
-------------------------------------------------------------------------------------
Pomodoro Timer è realizzato con "HTML, CSS e JavaScript".  
Permette di gestire sessioni di lavoro e pause in modo automatico.

-------------------------------------------------------------------------------------

## Funzionamento

Il timer è diviso in due modalità:

-  LAVORO
-  PAUSA

### ▶ Avvio
Quando si clicca il pulsante `Avvia`:
- parte un timer con `setInterval`
- ogni secondo il tempo diminuisce (`tempoRimasto--`)
- lo schermo si aggiorna automaticamente

###  Cambio fase
Quando il tempo arriva a **0**:

- se sei in **LAVORO**:
  - aumenta il numero di sessioni
  - aggiorna i minuti totali
  - passa a **PAUSA**
        -ogni 4 sessioni = pausa lunga
        -altrimenti = pausa breve
  - cambia lo sfondo

- se sei in **PAUSA**:
  - torna a **LAVORO**
  - cambia lo sfondo


### ⏸ Pausa
Il pulsante pausa:
- ferma il timer con `clearInterval`
- mantiene il tempo corrente


### ⟳ Reset
Il reset:
- ferma il timer
- riporta tutto a zero
- torna alla modalità **LAVORO**

-------------------------------------------------------------------------------------
## Variabili principali

```js
var tLavoro = 1 * 60; // durata lavoro (in secondi)
var tPausa = 1 * 60;  // durata pausa (in secondi)
