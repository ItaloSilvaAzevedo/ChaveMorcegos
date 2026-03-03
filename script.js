// ============================================
// CHAVE DICOTÔMICA - SCRIPT PRINCIPAL
// ============================================

const menuBtn = document.getElementById('menuBtn');
const backBtn = document.getElementById('backBtn');
const startBtn = document.getElementById('startBtn');
const body = document.body;

// Histórico de navegação para suportar o botão "Voltar"
const navHistory = [];

// ============================================
// TEMA CLARO / ESCURO
// ============================================

menuBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  menuBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// ============================================
// UTILITÁRIOS DE NAVEGAÇÃO
// ============================================

/** Oculta todas as perguntas, resultados e boas-vindas */
function hideAll() {
  document.querySelectorAll('.question, .result, .resultfamilia').forEach(el => {
    el.style.display = 'none';
  });
  document.getElementById('boasvindas').style.display = 'none';
}

/** Retorna o id do elemento atualmente visível */
function getCurrentId() {
  const bv = document.getElementById('boasvindas');
  if (bv && bv.style.display === 'block') return 'boasvindas';

  for (const el of document.querySelectorAll('.question, .result, .resultfamilia')) {
    if (el.style.display === 'block') return el.id;
  }
  return null;
}

/** Exibe a seção com o id fornecido e atualiza o botão Voltar */
function showSection(id) {
  hideAll();
  if (id === 'boasvindas') {
    document.getElementById('boasvindas').style.display = 'block';
  } else {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
  }
  updateBackBtn();
}

/** Mostra ou oculta o botão Voltar conforme o histórico */
function updateBackBtn() {
  backBtn.style.display = navHistory.length > 0 ? 'flex' : 'none';
}

// ============================================
// BOTÃO INICIAR
// ============================================

startBtn.addEventListener('click', () => {
  navHistory.push('boasvindas');
  showSection('q1');
});

// ============================================
// BOTÃO VOLTAR
// ============================================

backBtn.addEventListener('click', () => {
  if (navHistory.length > 0) {
    const prev = navHistory.pop();
    showSection(prev);
  }
});

// ============================================
// NAVEGAÇÃO POR BOTÕES DE OPÇÃO
// ============================================

document.querySelectorAll('.options button').forEach(button => {
  button.addEventListener('click', () => {
    const destino = button.dataset.answer;

    if (destino === 'reset') {
      // Limpa o histórico e volta ao início
      navHistory.length = 0;
      showSection('q1');
      return;
    }

    // Salva a tela atual no histórico antes de navegar
    const current = getCurrentId();
    if (current) navHistory.push(current);

    const alvo = document.getElementById(destino);
    if (alvo) {
      showSection(destino);
    }
  });
});
