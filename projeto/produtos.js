document.addEventListener('DOMContentLoaded', function () {
    const botaoComprar = document.querySelector('.produto button');
    const bolinhaCarrinho = document.querySelector('.menu .c .bolinha');

    botaoComprar.addEventListener('click', function () {
        bolinhaCarrinho.classList.add('ativo');
    });
});