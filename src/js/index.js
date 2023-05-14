const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "src/images/sun.png")
    }//verifica se possui a classe "modo-escuro"
    else {
        imagemBotaoAlterarTema.setAttribute("src", "src/images/moon.png");//troca a imagem do sol pela da lua
    }
})