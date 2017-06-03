function handleChange(event) {
  const variable = event.target.name;
  const value = `${event.target.value}${event.target.dataset.suffix || ''}`;
  if (!isVariableChange(variable, value)) return;
  updateVariable(variable, value);
}

function isVariableChange(variable, value) {
  const currentValue = document.documentElement.style.getPropertyValue(`--${variable}`);
  return value !== currentValue;
}

function updateVariable(variable, value) {
  console.log(`--${variable}: ${value}`);
  document.documentElement.style.setProperty(`--${variable}`, value);
}

window.addEventListener('load', () => {
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach(input => { input.addEventListener('change', handleChange)});
  inputs.forEach(input => { input.addEventListener('mousemove', handleChange)});
});
