// Função para mostrar um pop-up ao clicar em um botão
function mostrarPopup() {
    alert("Você clicou no botão!");
}

// Função para mostrar um pop-up ao passar o mouse sobre um elemento
function mostrarPopupHover() {
    alert("Você passou o mouse sobre o elemento!");
}

// Adicionar evento de clique a um botão
document.getElementById("meuBotao").addEventListener("click", mostrarPopup);

// Adicionar evento de passar o mouse sobre um elemento
document.getElementById("meuElemento").addEventListener("mouseover", mostrarPopupHover);

// Funções de navegação
document.getElementById("homeBtn").onclick = function() {
    window.location.href = "#home";
};

document.getElementById("productsBtn").onclick = function() {
    window.location.href = "#products";
};

document.getElementById("aboutBtn").onclick = function() {
    Swal.fire({
        title: 'Bem-vindo ao Estilo do Reino!',
        html: 'No Estilo do Reino, acreditamos que moda e fé podem andar juntas. Somos uma marca de roupas gospel comprometida em promover a modéstia e os valores cristãos no cenário do streetwear. Em um mundo onde a moda muitas vezes pode ser superficial, buscamos oferecer uma alternativa que celebra a beleza interior e exterior, sem comprometer a autenticidade ou estilo.<br><br>Nossas peças são cuidadosamente projetadas para refletir a essência da modéstia cristã, mantendo-se relevantes e atrativas para uma geração que valoriza a individualidade e a expressão pessoal. Cada costura, tecido e design é pensado para transmitir uma mensagem de amor, respeito e dignidade.<br><br>Seja bem-vindo ao nosso mundo, onde a moda encontra propósito e a expressão pessoal se une à fé. Junte-se a nós enquanto exploramos o belo equilíbrio entre estilo e substância, onde cada peça conta uma história e cada escolha reflete nossos valores mais profundos.<br><br>Obrigado por escolher o Estilo do Reino - onde a moda encontra seu verdadeiro significado.',
        confirmButtonText: 'Entendi'
    });
};

document.getElementById("contactBtn").onclick = function() {
    Swal.fire({
        title: 'Contato',
        html: 'Endereço:<br>Estilo do Reino<br>Rua das Virtudes, 123<br>Bairro da Fé - Cidade da Esperança<br>CEP: 12345-678<br><br>Telefone:<br>Telefone: (12) 3456-7890<br><br>E-mail:<br>E-mail: contato@estilodoreino.com<br><br>Redes Sociais:<br><br>Facebook: @EstilodoReino<br>Instagram: @EstilodoReinoOficial<br>Twitter: @EstilodoReino_',
        confirmButtonText: 'Fechar'
    });
};

// Adiciona evento de clique aos botões "Comprar"
document.querySelectorAll(".product button").forEach(button => {
    button.onclick = function() {
        Swal.fire({
            title: 'Pagamento',
            html: `
                <p>Por favor, insira os dados de seu cartão de crédito:</p>
                <input type="text" id="creditCardInfo" class="swal2-input" placeholder="Número do cartão">
                <input type="password" id="password" class="swal2-input" placeholder="Senha">
            `,
            showCancelButton: true,
            confirmButtonText: 'Confirmar Pagamento',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const creditCardInfo = Swal.getPopup().querySelector('#creditCardInfo').value;
                const password = Swal.getPopup().querySelector('#password').value;
                if (!creditCardInfo || !password) {
                    Swal.showValidationMessage('Por favor, preencha todos os campos');
                }
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Pagamento Confirmado!',
                    icon: 'success',
                    text: 'Seu pagamento foi processado com sucesso!'
                });
            }
        });
    };
});
