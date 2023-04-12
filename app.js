document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "nacional1",
      img: "imges/nacional1.png"
    },
    {
      name: "nacional2",
      img: "imges/nacional2.png"
    },
    {
      name: "nacional3",
      img: "imges/nacional3.png"
    },
    {
      name: "nacional4",
      img: "imges/nacional4.png"
    },
    {
      name: "nacional5",
      img: "imges/nacional5.png"
    },
    {
      name: "nacional6",
      img: "imges/nacional6.png"
    },
    {
      name: "nacional1",
      img: "imges/nacional1.png"
    },
    {
      name: "nacional2",
      img: "imges/nacional2.png"
    },
    {
      name: "nacional3",
      img: "imges/nacional3.png"
    },
    {
      name: "nacional4",
      img: "imges/nacional4.png"
    },
    {
      name: "nacional5",
      img: "imges/nacional5.png"
    },
    {
      name: "nacional6",
      img: "imges/nacional6.png"
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
      // cuando i=cardAdj.length, es decir, 12.
      var carta = document.createElement("img"); // Crea elemento img cada vez que se ejecuta la función.
      carta.setAttribute("src", "imges/reverso.png"); //Asignar nuevo atributo a cada carta
      //igual a la imagen 'reverso'.
      carta.setAttribute("data-id", i); //Asignar como atributo a cada carta creada, el id=i.
      carta.addEventListener("click", voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta
      //la función voltearCarta.
      cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
      // cuadricula de html para que se imprima la carta creada en el div de html.
    }
  }

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];
    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imges/reverso.png");
      cards[opcionDosId].setAttribute("src", "imges/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      cards[opcionUnoId].setAttribute("src", "imges/blank.png");
      cards[opcionDosId].setAttribute("src", "imges/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imges/reverso.png");
      cards[opcionDosId].setAttribute("src", "imges/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
