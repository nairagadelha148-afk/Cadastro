const teste = document.getElementById("ListaDeUsuario");
fetch("https://crudcrud.com/api/68930fce57d641ef973a85fa7857fb98/teste")
    .then(resposta => resposta.json())
    .then((ListaDeUsuario) => {
        ListaDeUsuario.forEach(testes => {
            const item = document.createElement("li");
            item.innerHTML = `${testes.usuario} <button onclick ="remover('${testes._id}')">Remover</button>`;
            teste.appendChild(item);

        });

    });
document.getElementById("adicionar").addEventListener("click", () => {
    const usuario = document.getElementById("teste").value;
    const email = document.getElementById("email").value;
//criar um const para cada input 
    fetch("https://crudcrud.com/api/68930fce57d641ef973a85fa7857fb98/teste", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ usuario: usuario,
            email: email //incluir o email / as inputs do html
        })
        
    })
    .then(resposta => resposta.json())
    .then((testes) => {
        const item = document.createElement("li"); //item.innerhtml mostra na tela o que foi cadastrada, sempre colocar o outro const
        item.innerHTML= `${testes.usuario} / ${testes.email} <button onclick = "remover('${testes._id}')" >remover</button>`;
        teste.appendChild(item);

    });
})
function remover(id) {
    fetch(`https://crudcrud.com/api/68930fce57d641ef973a85fa7857fb98/teste/${id}`,{
        method: "DELETE"
    })
    .then(() => {
        location.reload();
    });
}