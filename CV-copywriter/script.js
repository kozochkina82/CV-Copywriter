const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const span = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

document.getElementById('enter-button').addEventListener('click', function() {
  window.location.href = 'portfolio.html';
});

document.getElementById('cta-button').addEventListener('click', function() {
  window.open('https://t.me/Dorienn', '_blank');
});