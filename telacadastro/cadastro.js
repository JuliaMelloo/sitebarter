// Função que será executada quando o formulário for enviado
function cadastrarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    // Exibe os dados do usuário no console
    console.log('Nome: ' + nome);
    console.log('Email: ' + email);
    console.log('Senha: ' + senha);
  
    // Aqui você pode realizar outras operações, como enviar os dados para um servidor, validar os campos, etc.
  
    // Redireciona para uma nova página
    window.location.href = 'pagina-sucesso.html';
  }
  
  // Vincula a função 'cadastrarUsuario' ao evento 'submit' do formulário
  var form = document.getElementById('cadastroForm');
  form.addEventListener('submit', cadastrarUsuario);
  