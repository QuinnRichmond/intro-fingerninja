function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["luckySevens"].elements.length;
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
function validateItems() {
  clearErrors();
  var bet = document.forms["luckySevens"]["bet"].value;

  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  if(bet <= 0){
    alert("Bet must be above $0.00");
    document.forms["luckySevens"]["bet"]
       .parentElement.className = "form-group has-error";
    document.forms["luckySevens"]["bet"].focus();
    return false;
  }

  var money = parseFloat(bet);

  var maxWon = money;
  var maxRoll = 0;

  for(var i = 1; money > 0; i++){
    var one = rollDice();
    var two = rollDice();
    if((one + two) == 7){
      money = money + 4;
    }else{
      money = money - 1;
    }
    if(money > maxWon){
      maxWon = money;
      maxRoll = i;
    }
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("resultsTable").style.display = "block";
  document.getElementById("submitButton").innerText = "Play Again";
  document.getElementById("startingBet").innerText = bet;
  document.getElementById("rolls").innerText = Number(i-1);
  document.getElementById("maxMoney").innerText = maxWon;
  document.getElementById("maxRoll").innerText = Number(maxRoll);

  return false;

}
