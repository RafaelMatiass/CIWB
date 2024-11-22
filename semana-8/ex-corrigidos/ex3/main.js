document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');
  for (let btn of buttons) {
    btn.addEventListener('click', function(e) {
      console.log('Botão: ', e.target.id)
    });
  };
});