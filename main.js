function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio')
        elemento.play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (e) {
        if(e.which === 13 || e.which === 32)
            tecla.classList.add('ativa');
    };

    tecla.onkeyup = function (e) {
        tecla.classList.remove('ativa');
    };
});
