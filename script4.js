var visivel = true;

function alternarVisibilidade() {
  const elemento = document.getElementById('elemento');
  if (visivel) {
    elemento.style.display = 'none';
    visivel = false;
  } else {
    elemento.style.display = 'block';
    visivel = true;
  }
}


