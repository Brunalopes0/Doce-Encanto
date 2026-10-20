import { criarcards } from "../criarcards/cards.js";

const nossosDoces = document.getElementById("Nossos-doces");
const filtro = document.getElementById("filtro");
const buscar = document.getElementById("buscar");

const backend = "https://doce-encanto-production-2b82.up.railway.app";

buscar.addEventListener("click", () => {
    const sabor = filtro.value.trim(); // .trim() remove espaços acidentais que o usuário digitar
    const url = backend;

    function docesUrl(url) {
        const xhr = new XMLHttpRequest();

        // AJUSTE AQUI: Adicionado /doces antes das variáveis para bater com o seu back-end
        if (sabor === "") {
            xhr.open("GET", `${url}/doces`);
        } else {
            xhr.open("GET", `${url}/doces/${sabor}`);
        }

        xhr.onload = () => {
            if (xhr.status === 200) { // Garante que a requisição deu certo antes de tratar os dados
                const doces = JSON.parse(xhr.responseText);

                // Se você filtrou por sabor e o back-end retornou uma lista vazia [], significa que não encontrou
                if (sabor !== "" && doces.length === 0) {
                    alert("ERRO: não temos esse tipo de sabor!");
                } else {
                    nossosDoces.innerHTML = "";
                    criarcards(doces);
                }
            } else {
                alert("Erro ao conectar com o servidor!");
            }
        };

        xhr.send();
    }

    docesUrl(url);
});
