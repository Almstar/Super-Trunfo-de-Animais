let deck = [...animals];
let computerDeck = [...animals];
let playerCard;
let computerCard;

const playerCardDiv = document.getElementById("player-card");
const computerCardDiv = document.getElementById("computer-card");
const resultDiv = document.getElementById("result");
const nextButton = document.getElementById("next-button");

// Função para sortear uma carta
function drawCard(deck) {
  const index = Math.floor(Math.random() * deck.length);
  return deck.splice(index, 1)[0];
}

// Mostrar carta do jogador
function showPlayerCard() {
  playerCard = drawCard(deck);
  playerCardDiv.innerHTML = `
    <div class="card">
      <h2>${playerCard.nome}</h2>
      <img src="${playerCard.imagem}" alt="${playerCard.nome}">
      <button onclick="chooseAttribute('peso')">Peso: ${playerCard.peso}</button>
      <button onclick="chooseAttribute('comprimento')">Comprimento: ${playerCard.comprimento}</button>
      <button onclick="chooseAttribute('vida')">Expectativa de vida: ${playerCard.vida}</button>
      <button onclick="chooseAttribute('patas')">Patas: ${playerCard.patas}</button>
      <button onclick="chooseAttribute('filhotes')">Filhotes: ${playerCard.filhotes}</button>
    </div>
  `;
  computerCardDiv.innerHTML = `<div class="card back">🐾 Carta do computador 🐾</div>`;
  resultDiv.textContent = "";
  nextButton.style.display = "none";
}

// Mostrar carta do computador
function showComputerCard() {
  computerCard = drawCard(computerDeck);
  computerCardDiv.innerHTML = `
    <div class="card">
      <h2>${computerCard.nome}</h2>
      <img src="${computerCard.imagem}" alt="${computerCard.nome}">
      <p>Peso: ${computerCard.peso}</p>
      <p>Comprimento: ${computerCard.comprimento}</p>
      <p>Expectativa de vida: ${computerCard.vida}</p>
      <p>Patas: ${computerCard.patas}</p>
      <p>Filhotes: ${computerCard.filhotes}</p>
    </div>
  `;
}

// Jogador escolhe o atributo
function chooseAttribute(attribute) {
  showComputerCard();

  // Mostra visualmente a comparação durante 3 segundos
  const playerValue = playerCard[attribute];
  const computerValue = computerCard[attribute];

  resultDiv.innerHTML = `
    ⚖️ Comparando <strong>${attribute}</strong>...
    <br><br>
    ${playerCard.nome}: <strong>${playerValue}</strong> 🆚 
    ${computerCard.nome}: <strong>${computerValue}</strong>
  `;

  // Aguarda 3 segundos com a tela de comparação antes de mostrar o vencedor
  setTimeout(() => {
    if (playerValue > computerValue) {
      resultDiv.textContent = `🎉 Você venceu! (${playerValue} contra ${computerValue})`;
      deck.push(playerCard, computerCard);
    } else if (playerValue < computerValue) {
      resultDiv.textContent = `💻 Computador venceu! (${computerValue} contra ${playerValue})`;
      computerDeck.push(playerCard, computerCard);
    } else {
      resultDiv.textContent = `🤝 Empate! (${playerValue} contra ${computerValue})`;
    }

    nextButton.style.display = "block";

    // Verifica fim de jogo
    if (deck.length === 0) {
      resultDiv.textContent = "💻 O computador venceu o jogo!";
      nextButton.style.display = "none";
    } else if (computerDeck.length === 0) {
      resultDiv.textContent = "🎉 Você venceu o jogo!";
      nextButton.style.display = "none";
    }
  }, 3000); // ← Mantém a tela de comparação por 3 segundos
}

// Próxima rodada
function nextRound() {
  if (deck.length > 0 && computerDeck.length > 0) {
    showPlayerCard();
  }
}

// Início do jogo
showPlayerCard();
