function togglePanel() {
  this.classList.toggle('active');
}

function togglePanelContent(event) {
  if (event.propertyName !== 'flex' && event.propertyName !== 'flex-grow') return;
  this.classList.toggle('show-content');
}

window.addEventListener('load', () => {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.addEventListener('click', togglePanel);
    panel.addEventListener('transitionend', togglePanelContent);
  });
});