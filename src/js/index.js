const botoes = document.querySelectorAll('.botao');
const casas = document.querySelectorAll('.casa');




botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarCasa();

        botao.classList.add("selecionado");
        casas[indice].classList.add("selecionado")


    })
})



function desselecionarCasa() {
    const casaSelecionada = document.querySelector(".casa.selecionado");
    casaSelecionada.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado")
}