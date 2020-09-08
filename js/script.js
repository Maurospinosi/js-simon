// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire,un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

function numCasuale(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var arrNumeriCasuali = [];

for (var i=0; i< 6 ; i ++){
  var cinquenumeri = numCasuale(1, 50);

  if(arrNumeriCasuali.includes(cinquenumeri) == false){
    arrNumeriCasuali.push(cinquenumeri);
  }
}
alert("ricorda i numeri :" + " " + arrNumeriCasuali);

setTimeout (function(){

  var arrUtente = [];

  while(arrUtente.length<5){
    var num = parseInt(prompt("Inserisci un numero da 0 a 50"));

    if(arrUtente.indexOf(num) > -1 ){
      alert("Hai già inserito questo numero!!")
    } else if (num<0 || isNaN(num) || num>50){
      alert("Inserisci il numero correttamente!")
    }else{
      arrUtente.push(num);
    }
  }
  console.log(arrUtente);

  var numeriIndvinati = [];

  for(var i=0; i<arrNumeriCasuali.length; i++){
    if(arrUtente.includes(arrNumeriCasuali[i])){
      numeriIndvinati.push(arrNumeriCasuali[i]);
    }
  }
  if(numeriIndvinati == 0){
    alert("Non hai indovinato nessun numero, FAI SCHIFO!");
  } else{
    alert(" Hai indovinato " + " " + numeriIndvinati.length + " " + "numeri :" + " " + numeriIndvinati);
  }
}, 30000);
