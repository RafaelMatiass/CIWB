function myListener(e) {
  const btn = e.target;
  const div = btn.parentElement;

  const p = document.createElement('p');
  p.textContent = 'Oi, mundo!';

  div.appendChild(p);
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', myListener);
});