var timerId = null;

function startGame() {
  var url = window.location.search;
  var levelGame = url.replace('?', '');
  var seconds = 0;

  if (levelGame == 1) {
    seconds = 120
  }
  if (levelGame == 2) {
    seconds = 60
  }
  if (levelGame == 3) {
    seconds = 30
  }
  document.getElementById('timer').innerHTML = seconds;

  var amtBalloons = 20;
  createBalloons(amtBalloons);

  document.getElementById('balloons_rmg').innerHTML = amtBalloons;
  document.getElementById('balloons_pop').innerHTML = 0;

  counter(seconds + 1);

}

function counter(sec) {
  sec = sec - 1;
  if (sec == -1) {
    clearTimeout(timerId);
    gameOver();
    return false;
  }

  document.getElementById('countdown').innerHTML = sec;
  timerId = setTimeout("counter(" + sec + ")", 1000);
}

function gameOver() {
  removeEvents();
  alert('Você não conseguiu estourar todos os balões!');
}

function createBalloons(amtBalloons) {
  for (var i = 1; i <= amtBalloons; i++) {
    var balloon = document.createElement("img");
    balloon.src = 'imagens/balao_azul_pequeno.png';
    balloon.style.margin = '10px';
    balloon.id = 'b' + i;
    balloon.onclick = function () { pop(this); }

    document.getElementById('scenario').appendChild(balloon);
  }
}

function pop(e) {

  var balloon = e.id;

  document.getElementById(balloon).setAttribute('onclick', '');
  document.getElementById(balloon).src = 'imagens/balao_azul_pequeno_estourado.png';

  score(-1);


}

function score(act) {
  var balloonsRmg = document.getElementById('balloons_rmg').innerHTML;
  var balloonsPop = document.getElementById('balloons_pop').innerHTML;

  balloonsRmg = parseInt(balloonsRmg);
  balloonsPop = parseInt(balloonsPop);

  balloonsRmg = balloonsRmg + act;
  balloonsPop = balloonsPop - act;

  document.getElementById('balloons_rmg').innerHTML = balloonsRmg;
  document.getElementById('balloons_pop').innerHTML = balloonsPop;

  situationGame(balloonsRmg);
}

function situationGame(ballonsRmg) {
  if (ballonsRmg == 0) {
    alert('Parabéns, você conseguiu estourar todos os balões!');
    stopGame();
  }
}

function stopGame() {
  clearTimeout(timerId);
}

function removeEvents() {
  var i = 1;

  while (document.getElementById('b' + i)) {

    document.getElementById('b' + i).onclick = '';
    i++;
  }
}