import { criarcards } from "../criarcards/cards.js";

const nossosDoces = document.getElementById("Nossos-doces");
const filtro = document.getElementById("filtro");
const buscar = document.getElementById("buscar");

buscar.addEventListener("click", () => {

    const sabor = filtro.value;
    const url = "http://localhost:3000/doces"
    function docesUrl(url) {

        const xhr = new XMLHttpRequest();

        if (sabor === "") {
            xhr.open("GET", `${url}`);
        } else {
            xhr.open("GET", `${url}/${sabor}`);
        }

        xhr.onload = () => {
            const doces = JSON.parse(xhr.responseText);
            let encontrou = false;

            for (let c = 0; c < doces.length; c++) {
                if (sabor === doces[c].sabor) {
                    encontrou = true;
                }
            }

            if (encontrou || sabor === "") {
                nossosDoces.innerHTML = "";
                criarcards(doces);
            } else {
                alert("ERRO: não temos esse tipo de sabor!");
            }

        };

        xhr.send();

    }
    docesUrl(url)

})