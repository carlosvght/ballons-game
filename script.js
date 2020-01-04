const play = document.getElementById('play');
play.addEventListener('click', playGame);

function playGame() {
  const level = document.getElementById('level_game').value;
  window.location.href = 'game.html?' + level;
}