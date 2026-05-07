import { teste } from "./classes.js";
import { mostrarUsuarios } from "./util.js";

const lista = document.getElementById("ListaDeUsuario");
const pesquisa = document.getElementById("pesquisa");
const formulario = document.querySelector("form");


let usuarios = [];



fetch("https://crudcrud.com/api/50d53bdebdf543b09efea661a4cd875a/user")
    .then(resposta => resposta.json())
    .then((Usuario) => {
        usuarios = Usuario;
        mostrarUsuarios(usuarios, lista);



    });



formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();


    const usuario = document.getElementById("teste").value;
    const CEP = document.getElementById("CEP").value;
    const nascimento = document.getElementById("nascimento").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;




    //criar um const para cada input 
    fetch("https://crudcrud.com/api/50d53bdebdf543b09efea661a4cd875a/user", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            usuario,
            CEP,  //incluir o email / as inputs do html
            nascimento,
            email,
            telefone
        })

    })

        .then(resposta => resposta.json())
        .then((testes) => {
            usuarios.push(testes);
            mostrarUsuarios(usuarios, lista);
            formulario.reset();




        });
});


pesquisa.addEventListener("input", () => {
    const valorPesquisa = pesquisa.value.toLowerCase();
    const usuariosFiltrados = usuarios.filter(usuario =>
        (usuario.usuario || "").toLowerCase().includes(valorPesquisa)
    );
    mostrarUsuarios(usuariosFiltrados, lista)
})



window.remover = function (id) {
    fetch(`https://crudcrud.com/api/50d53bdebdf543b09efea661a4cd875a/user/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            usuarios = usuarios.filter(u => u._id !== id);
            mostrarUsuarios(usuarios, lista);
        });
};
