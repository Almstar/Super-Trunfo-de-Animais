@@ -0,0 +1,510 @@
/* script.js - Super Trunfo Animais (versão simples para GitHub Pages)
   Autor: Kamilla
   Regras básicas implementadas: jogador escolhe atributo; maior valor vence; empate -> pot.
*/

const data = [
  // 1 GALINHA
  { name: "GALINHA", peso: "2KG", comprimento: "40 cm", vida: "15 ANOS", patas: "2", filhotes: "8" },
  // 2 FOCA
  { name: "FOCA", peso: "100KG", comprimento: "1,70 M", vida: "50 ANOS", patas: "4", filhotes: "1" },
  // 3 RINOCERONTE
  { name: "RINOCERONTE", peso: "5.000 KG", comprimento: "5 M", vida: "45 ANOS", patas: "4", filhotes: "1" },
  // 4 URSO
  { name: "URSO", peso: "800 KG", comprimento: "2,50 M", vida: "35 ANOS", patas: "4", filhotes: "1" },
  // 5 BALEIA
  { name: "BALEIA", peso: "160.000 KG", comprimento: "25 M", vida: "90 ANOS", patas: "0", filhotes: "1" },
  // 6 HIPOPÓTAMO
  { name: "HIPOPÓTAMO", peso: "3.000 KG", comprimento: "4 M", vida: "45 ANOS", patas: "4", filhotes: "1" },
  // 7 JACARÉ
  { name: "JACARÉ", peso: "250 KG", comprimento: "4 M", vida: "50 ANOS", patas: "4", filhotes: "30" },
  // 8 GIRAFA
  { name: "GIRAFA", peso: "900 KG", comprimento: "4 M", vida: "26 ANOS", patas: "4", filhotes: "1" },
  // 9 TIGRE
  { name: "TIGRE", peso: "320 KG", comprimento: "3 M", vida: "15 ANOS", patas: "4", filhotes: "2" },
  // 10 CACHORRO
  { name: "CACHORRO", peso: "20 KG", comprimento: "1 M", vida: "15 ANOS", patas: "4", filhotes: "10" },
  // 11 ELEFANTE
  { name: "ELEFANTE", peso: "6.000 KG", comprimento: "7 M", vida: "55 ANOS", patas: "4", filhotes: "1" },
  // 12 VACA
  { name: "VACA", peso: "600 KG", comprimento: "2,5 M", vida: "15 ANOS", patas: "4", filhotes: "1" },
  // 13 RATO
  { name: "RATO", peso: "40 G", comprimento: "7 CM", vida: "2 ANOS", patas: "4", filhotes: "12" },
  // 14 AVESTRUZ
  { name: "AVESTRUZ", peso: "130 KG", comprimento: "1,70 M", vida: "50 ANOS", patas: "2", filhotes: "100" },
  // 15 BEIJA-FLOR
  { name: "BEIJA-FLOR", peso: "6 G", comprimento: "12 CM", vida: "12 ANOS", patas: "2", filhotes: "2" },
  // 16 CANGURU
  { name: "CANGURU", peso: "80 KG", comprimento: "1,20 M", vida: "15 ANOS", patas: "4", filhotes: "1" },
  // 17 ANTA
  { name: "ANTA", peso: "300 KG", comprimento: "2 M", vida: "35 ANOS", patas: "4", filhotes: "1" },
  // 18 LEÃO
  { name: "LEÃO", peso: "200 KG", comprimento: "2,5 M", vida: "30 ANOS", patas: "4", filhotes: "5" },
  // 19 PORCO
  { name: "PORCO", peso: "100 KG", comprimento: "1,5 M", vida: "15 ANOS", patas: "4", filhotes: "10" },
  // 20 CAMELO
  { name: "CAMELO", peso: "600 KG", comprimento: "3 M", vida: "45 ANOS", patas: "4", filhotes: "1" },
  // 21 TAMANDUÁ
  { name: "TAMANDUÁ", peso: "40 KG", comprimento: "1,20 M", vida: "25 ANOS", patas: "4", filhotes: "1" },
  // 22 PATO
  { name: "PATO", peso: "2,5 KG", comprimento: "50 CM", vida: "15 ANOS", patas: "2", filhotes: "14" },
  // 23 COELHO
  { name: "COELHO", peso: "2 KG", comprimento: "50 CM", vida: "12 ANOS", patas: "4", filhotes: "12" },
  // 24 TUCANO
  { name: "TUCANO", peso: "540 G", comprimento: "65 CM", vida: "20 ANOS", patas: "2", filhotes: "4" },
  // 25 TUBARÃO
  { name: "TUBARÃO", peso: "3.000 KG", comprimento: "8 M", vida: "60 ANOS", patas: "0", filhotes: "8" },
  // 26 MACACO
  { name: "MACACO", peso: "5 KG", comprimento: "55 CM", vida: "40 ANOS", patas: "4", filhotes: "1" },
  // 27 PREGUIÇA
  { name: "PREGUIÇA", peso: "8 KG", comprimento: "70 CM", vida: "40 ANOS", patas: "4", filhotes: "1" },
  // 28 TATU
  { name: "TATU", peso: "1,5 KG", comprimento: "50 CM", vida: "15 ANOS", patas: "4", filhotes: "4" },
  // 29 RAPOSA
  { name: "RAPOSA", peso: "1 KG", comprimento: "90 CM", vida: "10 ANOS", patas: "4", filhotes: "5" },
  // 30 SAPO
  { name: "SAPO", peso: "500 G", comprimento: "15 CM", vida: "10 ANOS", patas: "4", filhotes: "1.000" },
  // 31 BESOURO
  { name: "BESOURO", peso: "100 G", comprimento: "10 CM", vida: "2 ANOS", patas: "6", filhotes: "1.000" },
  // 32 CORUJA
  { name: "CORUJA", peso: "700 G", comprimento: "60 CM", vida: "20 ANOS", patas: "2", filhotes: "11" },
  // 33 GORILA
  { name: "GORILA", peso: "275 KG", comprimento: "2 M", vida: "35 ANOS", patas: "4", filhotes: "1" },
  // 34 ELEFANTE MARINHO
  { name: "ELEFANTE MARINHO", peso: "3.000 KG", comprimento: "5 M", vida: "20 ANOS", patas: "2", filhotes: "1" },
  // 35 JABUTI
  { name: "JABUTI", peso: "12 KG", comprimento: "50 CM", vida: "100 ANOS", patas: "4", filhotes: "5" },
  // 36 PEIXE - BOI
  { name: "PEIXE - BOI", peso: "700 KG", comprimento: "4,5 M", vida: "50 ANOS", patas: "2", filhotes: "1" },
  // 37 FORMIGA RAINHA
  { name: "FORMIGA RAINHA", peso: "150 G", comprimento: "5 CM", vida: "15 ANOS", patas: "6", filhotes: "1" },
  // 38 ARANHA CARANGUEJEIRA
  { name: "ARANHA CARANGUEJEIRA", peso: "125 G", comprimento: "25 CM", vida: "20 ANOS", patas: "8", filhotes: "200" },
  // 39 ESQUILO CINZENTO
  { name: "ESQUILO CINZENTO", peso: "600 G", comprimento: "30 CM", vida: "7 ANOS", patas: "4", filhotes: "10" },
  // 40 PINGUIM
  { name: "PINGUIM", peso: "30 KG", comprimento: "1,2 M", vida: "32 ANOS", patas: "2", filhotes: "1" },
  // 41 GOLFINHO
  { name: "GOLFINHO", peso: "7.000 KG", comprimento: "10 M", vida: "30 ANOS", patas: "0", filhotes: "1" },
  // 42 PAPAGAIO
  { name: "PAPAGAIO", peso: "450 G", comprimento: "35 CM", vida: "80 ANOS", patas: "2", filhotes: "2" },
  // 43 PERIQUITO
  { name: "PERIQUITO", peso: "348 G", comprimento: "16 CM", vida: "10 ANOS", patas: "2", filhotes: "6" },
  // 44 URSO PANDA
  { name: "URSO PANDA", peso: "150 KG", comprimento: "1,50 M", vida: "12 ANOS", patas: "4", filhotes: "1" },
  // 45 ÁGUIA
  { name: "ÁGUIA", peso: "8 KG", comprimento: "1 M", vida: "65 ANOS", patas: "2", filhotes: "3" },
  // 46 PEIXE PALHAÇO
  { name: "PEIXE PALHAÇO", peso: "50 G", comprimento: "8 CM", vida: "5 ANOS", patas: "0", filhotes: "100" },
  // 47 PANTERA NEGRA
  { name: "PANTERA NEGRA", peso: "70 KG", comprimento: "1,90 M", vida: "17 ANOS", patas: "4", filhotes: "3" },
  // 48 CAPIVARA
  { name: "CAPIVARA", peso: "60 KG", comprimento: "1 M", vida: "12 ANOS", patas: "4", filhotes: "5" },
  // 49 ONÇA - PINTADA
  { name: "ONÇA - PINTADA", peso: "114 KG", comprimento: "1,80 M", vida: "15 ANOS", patas: "4", filhotes: "4" },
  // 50 GATO
  { name: "GATO", peso: "4 KG", comprimento: "50 CM", vida: "20 ANOS", patas: "4", filhotes: "8" },
  // 51 CAVALO
  { name: "CAVALO", peso: "500 KG", comprimento: "2,5 M", vida: "30 ANOS", patas: "4", filhotes: "1" },
  // 52 ZEBRA
  { name: "ZEBRA", peso: "300 KG", comprimento: "2,4 M", vida: "30 ANOS", patas: "4", filhotes: "1" }
];

// Funções utilitárias para parsear os atributos para comparação numérica
function parseWeight(raw) {
  // retorna em gramas (number)
  if (!raw) return 0;
  const s = String(raw).toUpperCase().replace(/\s/g, "");
  // detectar 'KG' ou 'G'
  if (s.includes("KG")) {
    let num = s.replace("KG", "");
    num = num.replace(/\./g, ""); // remove milhares com ponto
    num = num.replace(",", "."); // vírgula decimal para ponto
    const v = parseFloat(num);
    return isNaN(v) ? 0 : Math.round(v * 1000);
  } else if (s.includes("G")) {
    let num = s.replace("G", "");
    num = num.replace(/\./g, "");
    num = num.replace(",", ".");
    const v = parseFloat(num);
    return isNaN(v) ? 0 : Math.round(v);
  } else {
    // sem unidade, tenta converter direto
    let num = s.replace(/\./g, "");
    num = num.replace(",", ".");
    const v = parseFloat(num);
    return isNaN(v) ? 0 : Math.round(v * 1000);
  }
}

function parseLength(raw) {
  // retorna em centímetros (number)
  if (!raw) return 0;
  let s = String(raw).toUpperCase().trim();
  s = s.replace(/\s/g, "");
  if (s.includes("CM")) {
    let num = s.replace("CM", "");
    num = num.replace(",", ".");
    num = num.replace(/\./g, "");
    const v = parseFloat(num);
    return isNaN(v) ? 0 : v;
  } else if (s.includes("M")) {
    let num = s.replace("M", "");
    num = num.replace(",", ".");
    num = num.replace(/\./g, "");
    const v = parseFloat(num);
    return isNaN(v) ? 0 : Math.round(v * 100);
  } else {
    // sem unidade - assume metros
    let num = s.replace(",", ".");
    num = num.replace(/\./g, "");
    const v = parseFloat(num);
    return isNaN(v) ? 0 : Math.round(v * 100);
  }
}

function parseNumber(raw) {
  if (!raw) return 0;
  let s = String(raw).toUpperCase();
  s = s.replace(/[^\d,.\-]/g, ""); // keep digits, comma, dot, minus
  s = s.replace(/\./g, ""); // remove thousands separators
  s = s.replace(",", "."); // comma to dot
  const v = parseFloat(s);
  return isNaN(v) ? 0 : Math.round(v);
}

// Preprocessa o deck para adicionar campos numéricos
const deck = data.map(card => ({
  ...card,
  // display raw kept as provided
  numeric: {
    peso_g: parseWeight(card.peso),
    comprimento_cm: parseLength(card.comprimento),
    vida_anos: parseNumber(card.vida),
    patas: parseNumber(card.patas),
    filhotes: parseNumber(card.filhotes)
  }
}));

// Shuffle (Fisher-Yates)
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Estado do jogo
let playerDeck = [];
let cpuDeck = [];
let pot = []; // cartas em empate temporário
let currentStarter = "player"; // quien escolhe atributo (player/computer)
let playerTurn = true; // quem tem a vez de escolher no momento
let revealed = { player: null, cpu: null }; // cartas reveladas

// Elementos DOM
const cpuCountEl = document.getElementById("cpu-count");
const playerCountEl = document.getElementById("player-count");
const playerBack = document.getElementById("player-back");
const cpuBack = document.getElementById("cpu-back");
const playerCardEl = document.getElementById("player-card");
const cpuCardEl = document.getElementById("cpu-card");
const cardArea = document.getElementById("card-area");
const messageEl = document.getElementById("message");
const potCountEl = document.getElementById("pot-count");
const playerSize = document.getElementById("player-size");
const cpuSize = document.getElementById("cpu-size");
const nextBtn = document.getElementById("next-round");

function startGame() {
  const shuffled = shuffle(deck);
  playerDeck = shuffled.slice(0, 26);
  cpuDeck = shuffled.slice(26);
  pot = [];
  currentStarter = "player";
  playerTurn = true;
  revealed = { player: null, cpu: null };
  updateCounts();
  resetUI();
  messageEl.textContent = "Jogo iniciado! Clique na sua pilha para virar a carta. Você começa.";
}

// Atualiza os contadores visuais
function updateCounts() {
  cpuCountEl.textContent = cpuDeck.length;
  playerCountEl.textContent = playerDeck.length;
  playerSize.textContent = playerDeck.length;
  cpuSize.textContent = cpuDeck.length;
  potCountEl.textContent = pot.length;
}

// UI reset
function resetUI() {
  cardArea.classList.add("hidden");
  playerBack.classList.remove("hidden");
  cpuBack.classList.remove("hidden");
  playerCardEl.classList.add("hidden");
  cpuCardEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  cpuCardEl.innerHTML = "";
  playerCardEl.innerHTML = "";
}

// Mostra a carta do jogador (frente) com atributos clicáveis
function showPlayerCard() {
  if (playerDeck.length === 0) { checkGameOver(); return; }
  const card = playerDeck[0];
  revealed.player = card;
  playerBack.classList.add("hidden");
  playerCardEl.classList.remove("hidden");
  cardArea.classList.remove("hidden");

  playerCardEl.innerHTML = renderCardFace(card, true);
  attachAttributeClicks();
  messageEl.textContent = "Escolha um atributo clicando nele (PESO, COMPRIMENTO, EXPECTATIVA DE VIDA, PATAS ou FILHOTES).";
}

// Mostra a carta do CPU (virada) — quando for revelada, preenchida
function showCpuCard(reveal = false) {
  if (cpuDeck.length === 0) { checkGameOver(); return; }
  cpuBack.classList.add("hidden");
  cpuCardEl.classList.remove("hidden");
  if (reveal && revealed.cpu) {
    cpuCardEl.innerHTML = renderCardFace(revealed.cpu, false);
  } else {
    cpuCardEl.innerHTML = '<div style="font-weight:800;color:#2a6f97">VIRA</div>';
  }
}

// Quando jogador clica em um atributo da sua carta
function attachAttributeClicks() {
  const attrCells = playerCardEl.querySelectorAll(".clickable");
  attrCells.forEach(cell => {
    cell.addEventListener("click", () => {
      const attr = cell.dataset.attr;
      // trava cliques
      attrCells.forEach(c => c.classList.add("disabled"));
      onPlayerChoose(attr);
    });
  });
}

// Renderiza o HTML do card face. if isPlayer => atributos clicáveis
function renderCardFace(card, isPlayer) {
  return `
    <div class="name">${card.name}</div>
    <table class="attr-table">
      <tr>
        <td class="label">PESO</td>
        <td class="value ${isPlayer ? "clickable" : ""}" data-attr="peso">${card.peso}</td>
      </tr>
      <tr>
        <td class="label">COMPRIMENTO</td>
        <td class="value ${isPlayer ? "clickable" : ""}" data-attr="comprimento">${card.comprimento}</td>
      </tr>
      <tr>
        <td class="label">EXPECTATIVA DE VIDA</td>
        <td class="value ${isPlayer ? "clickable" : ""}" data-attr="vida">${card.vida}</td>
      </tr>
      <tr>
        <td class="label">PATAS</td>
        <td class="value ${isPlayer ? "clickable" : ""}" data-attr="patas">${card.patas}</td>
      </tr>
      <tr>
        <td class="label">FILHOTES</td>
        <td class="value ${isPlayer ? "clickable" : ""}" data-attr="filhotes">${card.filhotes}</td>
      </tr>
    </table>
  `;
}

// Quando jogador escolhe um atributo
function onPlayerChoose(attr) {
  // revelar CPU
  revealed.cpu = cpuDeck[0];
  showCpuCard(true);

  // calcular comparação
  const left = getNumeric(revealed.player, attr);
  const right = getNumeric(revealed.cpu, attr);

  // mostrar resultado
  setTimeout(() => {
    resolveRound(attr, left, right);
  }, 600);
}

// Retorna valor numérico do atributo escolhido
function getNumeric(card, attr) {
  if (!card || !card.numeric) {
    // fallback: parse raw
    if (attr === "peso") return parseWeight(card.peso);
    if (attr === "comprimento") return parseLength(card.comprimento);
    if (attr === "vida") return parseNumber(card.vida);
    if (attr === "patas") return parseNumber(card.patas);
    if (attr === "filhotes") return parseNumber(card.filhotes);
  }
  const n = card.numeric;
  if (attr === "peso") return n.peso_g;
  if (attr === "comprimento") return n.comprimento_cm;
  if (attr === "vida") return n.vida_anos;
  if (attr === "patas") return n.patas;
  if (attr === "filhotes") return n.filhotes;
  return 0;
}

// Resolve a rodada após escolha do atributo (user escolheu).
function resolveRound(attr, leftVal, rightVal) {
  const leftDisplay = revealed.player[attr === "peso" ? "peso" : (attr === "comprimento" ? "comprimento" : (attr === "vida" ? "vida" : (attr === "patas" ? "patas" : "filhotes")))];
  const rightDisplay = revealed.cpu[attr === "peso" ? "peso" : (attr === "comprimento" ? "comprimento" : (attr === "vida" ? "vida" : (attr === "patas" ? "patas" : "filhotes")))];
  let text;
  if (leftVal > rightVal) {
    text = `Você venceu a rodada! (${leftDisplay} × ${rightDisplay})`;
    // vencedor: jogador
    collectCards("player");
    currentStarter = "player";
  } else if (leftVal < rightVal) {
    text = `Computador venceu a rodada. (${rightDisplay} × ${leftDisplay})`;
    collectCards("cpu");
    currentStarter = "cpu";
  } else {
    text = `Empate! (${leftDisplay} × ${rightDisplay}) — cartas vão para o pot.`;
    // empatar: empilhar as cartas no pot e continuar (quem iniciou escolhe novamente)
    pot.push(playerDeck.shift());
    pot.push(cpuDeck.shift());
    revealed = { player: null, cpu: null };
    updateCounts();
    potCountEl.textContent = pot.length;
    // exibir reset UI e permitir próximo virar
    messageEl.textContent = text + " Clique na sua pilha para virar a nova carta (empate).";
    resetUI(); // mostra novamente as pilhas
    return;
  }

  // após vencedor pegar cartas, atualizar tela e verificar fim
  messageEl.textContent = text;
  // small delay antes de preparar próxima rodada
  setTimeout(() => {
    revealed = { player: null, cpu: null };
    updateCounts();
    resetUI();
    // se jogo acabou
    checkGameOver();
    // se o vencedor é o computador, ele automaticamente inicia a próxima rodada
    if (currentStarter === "cpu" && !isGameOver()) {
      messageEl.textContent = "Computador vai escolher o próximo atributo...";
      // pequena espera para o jogador ver resultado
      setTimeout(cpuChooseAttribute, 900);
    } else if (!isGameOver()) {
      messageEl.textContent = "Vencedor escolhe — clique na sua pilha para virar (ou aguarde se for o computador).";
    }
  }, 900);
}

// Coleta as cartas (inclui pot se houver)
function collectCards(winner) {
  // mover a carta do topo de cada deck para vencedor (se existirem)
  const wonCards = [];
  if (playerDeck.length > 0) wonCards.push(playerDeck.shift());
  if (cpuDeck.length > 0) wonCards.push(cpuDeck.shift());
  // adiciona as cartas do pot (se houver)
  while (pot.length) wonCards.push(pot.shift());
  // coloca no fim do deck do vencedor
  if (winner === "player") {
    playerDeck.push(...wonCards);
  } else {
    cpuDeck.push(...wonCards);
  }
  updateCounts();
  potCountEl.textContent = pot.length;
}

// CPU escolhe atributo aleatoriamente (pode ser melhorado)
function cpuChooseAttribute() {
  if (cpuDeck.length === 0 || playerDeck.length === 0) { checkGameOver(); return; }
  // revelamos a carta do CPU para a comparação (já será mostrada ao usuário)
  revealed.cpu = cpuDeck[0];
  showCpuCard(true);

  // CPU deve escolher um atributo da sua carta
  // estratégia simples: escolher o atributo com maior valor relativo
  const numeric = revealed.cpu.numeric;
  // criamos uma pontuação simples para decidir
  const scores = {
    peso: numeric.peso_g || 0,
    comprimento: numeric.comprimento_cm || 0,
    vida: numeric.vida_anos || 0,
    patas: numeric.patas || 0,
    filhotes: numeric.filhotes || 0
  };
  // escolhe o atributo com maior valor
  const attr = Object.keys(scores).reduce((a,b) => scores[a] >= scores[b] ? a : b);
  // se o jogador ainda não virou, obrigamos o jogador a virar (ou se já virou, procedemos)
  if (!revealed.player) {
    // forçamos a virar a carta do jogador imediatamente (mostramos)
    revealed.player = playerDeck[0];
    playerBack.classList.add("hidden");
    playerCardEl.classList.remove("hidden");
    cardArea.classList.remove("hidden");
    playerCardEl.innerHTML = renderCardFace(revealed.player, false);
  }

  // Delay pequeno antes da comparação para o jogador enxergar
  setTimeout(() => {
    const left = getNumeric(revealed.player, attr);
    const right = getNumeric(revealed.cpu, attr);
    resolveRound(attr, left, right);
  }, 800);
}

// Verifica fim de jogo
function isGameOver() {
  return playerDeck.length === 0 || cpuDeck.length === 0;
}

function checkGameOver() {
  if (playerDeck.length === 0) {
    messageEl.textContent = "Fim de jogo — o computador venceu! 😕";
    resetUI();
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = "Reiniciar jogo";
    nextBtn.onclick = () => startGame();
    return true;
  }
  if (cpuDeck.length === 0) {
    messageEl.textContent = "Parabéns — você venceu o jogo! 🎉";
    resetUI();
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = "Jogar novamente";
    nextBtn.onclick = () => startGame();
    return true;
  }
  return false;
}

// Eventos de clique nas pilhas
document.getElementById("player-pile").addEventListener("click", () => {
  if (isGameOver()) return;
  // Se já há uma carta do jogador revelada, não permitir virar outra
  if (revealed.player) {
    messageEl.textContent = "Você já virou sua carta — escolha um atributo.";
    return;
  }
  // virar a carta do jogador
  showPlayerCard();
  // mostrar CPU verso (sem revelar)
  cpuBack.classList.remove("hidden");
  cpuCardEl.classList.add("hidden");
});

document.getElementById("computer-pile").addEventListener("click", () => {
  // Opcional: permitir o usuário clicar também no topo do cpu só para ver a quantidade
  messageEl.textContent = "Essa pilha é do computador. Clique na sua pilha para virar a carta.";
});

// Botão next (reiniciar) já configurado dinamicamente

// inicia o jogo
startGame();
