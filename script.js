const btn = document.getElementById('menuBtn');
const body = document.body; 
const startBtn = document.getElementById("startBtn");
const chavefamilia = document.getElementById("chave-familia");

btn.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark'); 
    
    if (body.classList.contains('dark')) { btn.textContent = "☀️"; }// Sol no tema escuro }
    else { btn.textContent = "🌙";
     } // Lua no tema claro
     // 
    })   

startBtn.addEventListener("click", () => { 
    // Remove a seção de boas-vindas do body ou de um container) 
    document.getElementById("boasvindas").style.display = "none";
    q1.style.display = "block";
     
})

// Seleciona todos os botões dentro de .options
document.querySelectorAll('.options button').forEach(button => {
  button.addEventListener('click', () => {
    // pega o valor do atributo data-answer
    const destino = button.dataset.answer;

    // esconde todas as perguntas

    document.querySelectorAll('.question').forEach(q => q.style.display = 'none');
    document.querySelectorAll('.resultfamilia').forEach(q => q.style.display = 'none');
    document.getElementById("boasvindas").style.display = "none";

    // se o destino for "reset", volta para a primeira pergunta
    if (destino === "reset") {
      document.querySelectorAll('.question').forEach(q => q.style.display = 'none');
      document.getElementById("q1").style.display = "block";
      document.querySelectorAll('.resultfamilia').forEach(q => q.style.display = 'none');
      document.querySelectorAll('.result').forEach(q => q.style.display = 'none');
      

      
    } else {
      // mostra a seção correspondente ao id
      const alvo = document.getElementById(destino);
      if (alvo) {
        alvo.style.display = "block";
      }
    }
  });
});

