var bancoscore = Math.floor((Math.random() * 21) + 1);
console.log (bancoscore);
var playerscore = 0
do { partialscore = Math.floor((Math.random() * 10) + 1);
    alert ("Carta estratta " + partialscore)
    playerscore = playerscore + partialscore
    console.log (playerscore)
    var giocata = prompt ("Carta o Stop?");
} while ((giocata=="carta") && (playerscore<=21))

if (playerscore>21) {
  alert ("Hai perso!")
}
else  {if (playerscore<bancoscore) {
        alert ("Hai perso!")
      }
      else if (playerscore==bancoscore) {
        alert ("Patta")
      }
      else {
        alert ("HAI VINTOO!!")
      }
}
