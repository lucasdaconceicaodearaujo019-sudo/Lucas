const frases = [
    "Você é mais forte do que imagina.",
    "Um passo de cada vez.",
    "Dias difíceis não duram para sempre.",
    "Sua história ainda está sendo escrita.",
    "Você merece cuidado e respeito."
];

let indice = 0;

document.getElementById("botao").addEventListener("click", () => {
    document.getElementById("frase").textContent = frases[indice];
    indice = (indice + 1) % frases.length;
});