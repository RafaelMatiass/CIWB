function removerLinha(e) {
  const a = e.target;
  const tr = a.parentElement.parentElement;
  const table = tr.parentElement;

  table.removeChild(tr);
}

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelector('a.action');
  for (let a of anchors) {
    a.addEventListener('click', removerLinha);
  }  
});