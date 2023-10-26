function mudarCor() {
    const cores = ["red", "blue", "green", "yellow", "pink"];
    const indice = Math.floor(Math.random() * cores.length);
    document.body.style.backgroundColor = cores[indice];
  }


  