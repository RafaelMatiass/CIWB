document.addEventListener('DOMContentLoaded', function() {
  const select = document.querySelector('#marca');
  select.addEventListener('change', function() {
    const img = document.querySelector('#logo');
    img.src = 'images/' + select.value + '.png'
  });
})