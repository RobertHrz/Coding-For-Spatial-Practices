const palettes = document.querySelectorAll('.palette');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', generatePalettes);

function generatePalettes() {
  const colors = [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor()
  ];
  
  for (let i = 0; i < palettes.length; i++) {
    palettes[i].style.backgroundColor = colors[i];
    palettes[i].setAttribute('data-color', colors[i]);
  }
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  return hex;
}

generatePalettes();
for (let i = 0; i < palettes.length; i++) {
  palettes[i].addEventListener('mouseenter', function() {
    document.body.style.backgroundColor = this.style.backgroundColor;
  });
}

function copyToClipboard(text) {
  const input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  document.body.removeChild(input);
}

for (let i = 0; i < palettes.length; i++) {
  palettes[i].addEventListener('click', function() {
    const colorCode = this.getAttribute('data-color');
    copyToClipboard(colorCode);
    alert(`Copied color code ${colorCode} to clipboard!`);
  });
}
