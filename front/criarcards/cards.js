export function criarcards(doces) {
    const nossosDoces = document.getElementById('Nossos-doces')
    for (let c = 0; c < doces.length; c++) {
        const blocoDoces = document.createElement('div')   /*CRIANDO A DIV FILHA */
        const botaobloco = document.createElement('button') /* BOTÃO DA DIV FILHA */
        const mensagem = `Olá! Tenho interesse no ${doces[c].sabor} da Doce Encanto!`;

        const link = `https://wa.me/55DDDNUMERO?text=${encodeURIComponent(mensagem)}`;
        botaobloco.addEventListener('click', () => {
            window.open(link, "_blank");
        });

        blocoDoces.className = "blocoDoces"  /*NOME CLASS */
        botaobloco.className = "botaoBlocos"

        blocoDoces.innerHTML = `      
            <img src="${doces[c].imagem}" alt="fotos bolos">
            <p>${doces[c].sabor} </p>  
        `;
        botaobloco.innerHTML = `$${doces[c].preco}`

        botaobloco.addEventListener('mouseover', () => {
            botaobloco.innerText = 'Ver';
        });
        botaobloco.addEventListener('mouseout', () => {
            botaobloco.innerText = `$${doces[c].preco}`;
        })

        nossosDoces.appendChild(blocoDoces)
        blocoDoces.appendChild(botaobloco)
    }
}

