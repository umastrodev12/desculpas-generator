var desculpas = [
    "O Cachorro comeu o roteador",
    "A Internet caiu no chão",
    "Desculpa pela demora eu esqueci que você existe!",
    "Meu pc tava atualizando"
];

function gerarDesculpaAleatoria() {
    var sortear = Math.floor(Math.random() * (desculpas.length));
    document.getElementById('desculpasDisplay').innerHTML = desculpas[sortear];
}
