
// salva statistiche
function salvaDati() {
  localStorage.setItem("sessioni", sessioni);
  localStorage.setItem("totMin", totMin);
}

function caricaDati() {
  var s = localStorage.getItem("sessioni");
  var m = localStorage.getItem("totMin");

  if (s !== null) sessioni = parseInt(s);
  if (m !== null) totMin = parseInt(m);

  sessioniEl.textContent = sessioni;
  minEl.textContent = totMin;
}

//var = indica le variabili globali
//let = indica le variabili locali
var  tLavoro = 1 * 60;
var tPausaLunga = 2 * 60;
var tPausaBreve = 1 * 60;

var tempoRimasto = tLavoro;
var timerAttivo = false;
var intervalId = null; //variabile per salvare l'id dell'intervallo e all'inizio non c'è nessun timer  
var inLavoro = true;

var sessioni = 0;
var totMin = 0;

//elementi
var minnuti = document.getElementById("minutiDisplay");
var seccondi = document.getElementById("secondiDisplay");
var stato = document.getElementById("stato");

var sessioniEl = document.getElementById("sessioni");
var minEl = document.getElementById("minuti");

var bAvvia = document.getElementById("bAvvia");
var bPausa = document.getElementById("bPausa");

// schermo
function aggiornaSchermo() {
  var min = Math.floor(tempoRimasto / 60);
  var sec = tempoRimasto % 60;

  minnuti.textContent = min.toString().padStart(2, "0");
  seccondi.textContent = sec.toString().padStart(2, "0");
}

function cambiaFase() {
  if (inLavoro) {

    sessioni++;
    totMin += tLavoro / 60;

    sessioniEl.textContent = sessioni;
    minEl.textContent = totMin;

    salvaDati(); // 🔥 salva dopo ogni sessione
  //pausa
    if (sessioni % 4 === 0) {
      tempoRimasto = tPausaLunga;
      stato.textContent = "PAUSA LUNGA";
    }else{
      tempoRimasto = tPausaBreve;
      stato.textContent = "PAUSA BREVE";
    }
    document.body.className = "pausa";//cambia lo sfondo a pausa
    inLavoro = false;
  }else{
    tempoRimasto = tLavoro;
    stato.textContent = "LAVORO";
    document.body.className = "lavoro";//cambia lo sfondo a lavoro
    inLavoro = true;
  }

}

// avvia il timer
function avviaTimer() {
  if (timerAttivo) return;

  timerAttivo = true;

  bAvvia.disabled = true;
  bPausa.disabled = false;

  //setInterval serve per eseguire una funzione ogni tot millisecondi 
  intervalId = setInterval(function () {  

    tempoRimasto--;

    if (tempoRimasto <= 0) {
      cambiaFase();
    }

    aggiornaSchermo();

  }, 1000);
}

// pausa il timer
function pausaTimer() {
  if (!timerAttivo) return; //se il timer non è attivo, esci subito

  clearInterval(intervalId); //ferma l'intervallo
  intervalId = null;
  timerAttivo = false;

  bAvvia.disabled = false;
  bPausa.disabled = true;
}

// reset il timer
function resetTimer() {
  pausaTimer();

  tempoRimasto = tLavoro;
  inLavoro = true;

  sessioni = 0;
  totMin = 0;

  sessioniEl.textContent = 0;
  minEl.textContent = 0;

  stato.textContent = "LAVORO";
  document.body.className = "lavoro";//cambia lo sfondo a lavoro
  salvaDati();

  aggiornaSchermo();
}
  
caricaDati();
aggiornaSchermo();