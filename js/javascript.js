function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile');
}

const meuNome = "Karielly de Carvalho";
const texto = "Graduando em Análise e Desenvolvimento de Sistemas";
const nomeSpan = document.querySelector('.meu-nome');
const textoP = document.querySelector('.descricao');
let indexNome = 0;
let indexTexto = 0;

function digitarNome() {
    nomeSpan.textContent += meuNome[indexNome];
    indexNome++;
    if (indexNome < meuNome.length) {
        setTimeout(digitarNome, 100); // Ajuste o tempo conforme desejado
    } else {
        digitarTexto();
    }
}

function digitarTexto() {
    textoP.textContent += texto[indexTexto];
    indexTexto++;
    if (indexTexto < texto.length) {
        setTimeout(digitarTexto, 100); // Ajuste o tempo conforme desejado
    }
}

addEventListener('load', digitarNome);

