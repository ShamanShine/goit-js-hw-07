const textInput = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');
const defaultName = 'Anonymous';

textInput.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();
  textOutput.textContent = inputValue !== '' ? inputValue : defaultName;
});
