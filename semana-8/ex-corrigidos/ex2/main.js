document.addEventListener('DOMContentLoaded', function() {
  const ps = document.querySelectorAll('p');
  for (let p of ps) {
    p.addEventListener('click', function() {
      p.classList.add('oculto');
    });
  };
});