export function mostrarUsuarios(listaFiltrada, lista) {
    lista.innerHTML = "";

    listaFiltrada.forEach(usuario => {
        const item = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = `${usuario.usuario} / ${usuario.email}`;

        const botao = document.createElement("button");
        botao.textContent = "remover";
        botao.type = "button";

        botao.addEventListener("click", (event) => {
            event.stopPropagation();
            remover(usuario._id);
        });

        item.appendChild(texto);
        item.appendChild(botao);
        lista.appendChild(item);

    });
}

