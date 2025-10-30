 const animals = [
  { nome: "Galinha", peso: 2, comprimento: 0.4, vida: 8, patas: 2, filhotes: 10, img: "imagens/galinha.png" },
  { nome: "Gato", peso: 4, comprimento: 0.5, vida: 15, patas: 4, filhotes: 4, img: "imagens/gato.png" },
  { nome: "Cachorro", peso: 20, comprimento: 0.8, vida: 13, patas: 4, filhotes: 6, img: "imagens/cachorro.png" },
  { nome: "Leão", peso: 190, comprimento: 2.4, vida: 14, patas: 4, filhotes: 3, img: "imagens/leao.png" },
  { nome: "Zebra", peso: 300, comprimento: 2.5, vida: 25, patas: 4, filhotes: 1, img: "imagens/zebra.png" }
  // ... (adicione os outros animais até 52 conforme sua lista)
];

let deck = [...animals];
let computerDeck = [...animals];
let playerCard;
let computerCard;

const playerCardDiv = document.getElementById("player-card");
const computerCardDiv = document.getElementById("computer-card");
const resultDiv = document.getElementById("result");
const nextButton = document.getElementById("next-button");

// Função para pegar uma carta aleatória
function drawCard(deck) {
  const index = Math.floor(Math.random() * deck.length);
  return deck.splice(index, 1)[0];
}

// Mostrar carta do jogador
function showPlayerCard() {
  playerCard = drawCard(deck);
  playerCardDiv.innerHTML = `
    <h2>${playerCard.nome}</h2>
    <img src="${playerCard.img}" alt="${playerCard.nome}" class="animal-img">
    <button onclick="chooseAttribute('peso')">Peso: ${playerCard.peso}</button>
    <button onclick="chooseAttribute('comprimento')">Comprimento: ${playerCard.comprimento}</button>
    <button onclick="chooseAttribute('vida')">Expectativa de vida: ${playerCard.vida}</button>
    <button onclick="chooseAttribute('patas')">Patas: ${playerCard.patas}</button>
    <button onclick="chooseAttribute('filhotes')">Filhotes: ${playerCard.filhotes}</button>
  `;
  computerCardDiv.innerHTML = `<p class="verso">🐾 Carta do computador 🐾</p>`;
  resultDiv.textContent = "";
  nextButton.style.display = "none";
}

// Mostrar carta do computador
function showComputerCard() {
  computerCard = drawCard(computerDeck);
  computerCardDiv.innerHTML = `
    <h2>${computerCard.nome}</h2>
    <img src="${computerCard.img}" alt="${computerCard.nome}" class="animal-img">
    <p>Peso: ${computerCard.peso}</p>
    <p>Comprimento: ${computerCard.comprimento}</p>
    <p>Expectativa de vida: ${computerCard.vida}</p>
    <p>Patas: ${computerCard.patas}</p>
    <p>Filhotes: ${computerCard.filhotes}</p>
  `;
}

// Jogador escolhe o atributo
function chooseAttribute(attribute) {
  showComputerCard();

  // Aguarda 3 segundos antes de comparar e mostrar o resultado
  setTimeout(() => {
    const playerValue = playerCard[attribute];
    const computerValue = computerCard[attribute];

    if (playerValue > computerValue) {
      resultDiv.textContent = `🎉 Você venceu! (${playerValue} contra ${computerValue})`;
      deck.push(playerCard, computerCard); // cartas para o jogador
    } else if (playerValue < computerValue) {
      resultDiv.textContent = `💻 Computador venceu! (${computerValue} contra ${playerValue})`;
      computerDeck.push(playerCard, computerCard); // cartas para o computador
    } else {
      resultDiv.textContent = `🤝 Empate! (${playerValue} contra ${computerValue})`;
    }

    nextButton.style.display = "block";

    // Verifica fim do jogo
    if (deck.length === 0) {
      resultDiv.textContent = "💻 O computador venceu o jogo!";
      nextButton.style.display = "none";
    } else if (computerDeck.length === 0) {
      resultDiv.textContent = "🎉 Você venceu o jogo!";
      nextButton.style.display = "none";
    }
  }, 3000);
}

// Próxima rodada
function nextRound() {
  if (deck.length > 0 && computerDeck.length > 0) {
    showPlayerCard();
  }
}

// Início do jogo
showPlayerCard();
