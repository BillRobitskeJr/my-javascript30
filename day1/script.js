function playSound(event) {
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  if (!key) return;
  key.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

window.addEventListener('load', () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});