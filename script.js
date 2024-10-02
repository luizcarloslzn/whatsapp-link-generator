// Aplica a máscara de input ao campo de telefone
$(document).ready(function() {
    $('#phone').mask('(00) 0 0000-0000');
});

document.getElementById('whatsappLinkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega o valor do telefone sem os caracteres especiais
    let phone = document.getElementById('phone').value.trim();
    phone = phone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Verifica se o telefone tem o número correto de dígitos (11 dígitos sem o DDD)
    if (phone.length !== 11) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    // Verifica se o checkbox "Deixar a mensagem em branco" está marcado
    const noMessage = document.getElementById('noMessage').checked;

    let whatsappLink;

    if (noMessage) {
        // Caso a mensagem seja deixada em branco, cria apenas o link com o número
        whatsappLink = `https://wa.me/55${phone}`;
    } else {
        // Pega o valor da mensagem
        const message = document.getElementById('message').value.trim();

        // Verifica se a mensagem não está vazia quando o checkbox não está marcado
        if (message === '') {
            alert('Por favor, insira uma mensagem ou marque a opção de deixar a mensagem em branco.');
            return;
        }

        // Substitui espaços na mensagem por %20 para codificação URL
        const encodedMessage = encodeURIComponent(message);
        whatsappLink = `https://wa.me/55${phone}?text=${encodedMessage}`;
    }

    // Exibe o link na página
    document.getElementById('output').innerHTML = `
        <p>Seu link para WhatsApp:</p>
        <a href="${whatsappLink}" target="_blank">${whatsappLink}</a>
    `;
});
