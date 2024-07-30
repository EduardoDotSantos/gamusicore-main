var ageInput = document.getElementById('age');
var ageValueSpan = document.getElementById('ageValue');

ageInput.addEventListener('input', function() {
    ageValueSpan.textContent = ageInput.value;
});
function populateCities() {
var stateSelect = document.getElementById('state');
var citySelect = document.getElementById('city');

// Limpa as opções atuais de cidades
citySelect.innerHTML = '';

// Obtém o valor selecionado do estado
var state = stateSelect.value;

// Define as cidades correspondentes ao estado selecionado
var cities = [];
switch (state) {
  case 'SP':
    cities = ['São Paulo', 'Campinas', 'Santo André'];
    break;
  case 'RJ':
    cities = ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'];
    break;
  case 'MG':
    cities = ['Belo Horizonte', 'Contagem', 'Uberlândia'];
    break;
  case 'ES':
    cities = ['Vitória', 'Vila Velha', 'Cariacica'];
    break;
  default:
    break;
}

// Preenche o select de cidades com as novas opções
cities.forEach(function (city) {
  var option = document.createElement('option');
  option.textContent = city;
  citySelect.appendChild(option);
});

// Habilita o select de cidades se há cidades disponíveis
citySelect.disabled = cities.length === 0;
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
event.preventDefault(); // Impede o envio automático do formulário

var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
var age = document.getElementById('age').value;
var state = document.getElementById('state').value;
var city = document.getElementById('city').value;
var errorMessage = document.getElementById('errorMessage');
var successMessage = document.getElementById('successMessage');
var isValid = true;

// Limpa mensagens de erro e sucesso anteriores
errorMessage.textContent = '';
successMessage.textContent = '';

// Validação da senha
if (password.length < 8) {
  errorMessage.textContent = 'A senha deve ter pelo menos 8 caracteres.';
  isValid = false;
} else if (!/[A-Z]/.test(password)) {
  errorMessage.textContent = 'A senha deve conter pelo menos uma letra maiúscula.';
  isValid = false;
} else if (!/\d/.test(password)) {
  errorMessage.textContent = 'A senha deve conter pelo menos um número.';
  isValid = false;
}

// Validação da confirmação de senha
if (password !== confirmPassword) {
  document.getElementById('confirmPassword').value = '';
  errorMessage.textContent = 'As senhas não coincidem. Por favor, digite novamente.';
  isValid = false;
}

// Validação da idade
if (age < 18) {
  errorMessage.textContent = 'Você deve ter pelo menos 18 anos para preencher este formulário.';
  isValid = false;
}

// Validação do estado e cidade
if (state === '' || city === '') {
  errorMessage.textContent = 'Por favor, selecione um estado e uma cidade.';
  isValid = false;
}

// Se todas as validações passarem, exibe mensagem de sucesso
if (isValid) {
  successMessage.textContent = 'Formulário enviado com sucesso!';
  // Aqui você pode adicionar o código para enviar os dados para o servidor, se necessário
  // Exemplo: enviarFormulario();
}
});
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const minLengthItem = document.getElementById('min-length');
    const uppercaseItem = document.getElementById('uppercase');
    const numberItem = document.getElementById('number');

    function validatePassword() {
        const password = passwordInput.value;
        const hasMinLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        // Atualiza o estado do item de comprimento
        if (hasMinLength) {
            minLengthItem.classList.add('valid');
            minLengthItem.classList.remove('invalid');
        } else {
            minLengthItem.classList.add('invalid');
            minLengthItem.classList.remove('valid');
        }

        // Atualiza o estado do item de maiúscula
        if (hasUppercase) {
            uppercaseItem.classList.add('valid');
            uppercaseItem.classList.remove('invalid');
        } else {
            uppercaseItem.classList.add('invalid');
            uppercaseItem.classList.remove('valid');
        }

        // Atualiza o estado do item de número
        if (hasNumber) {
            numberItem.classList.add('valid');
            numberItem.classList.remove('invalid');
        } else {
            numberItem.classList.add('invalid');
            numberItem.classList.remove('valid');
        }
    }

    passwordInput.addEventListener('input', validatePassword);
});
document.addEventListener('DOMContentLoade', () => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const messageDiv = document.getElementById('messagem');

    function validatePasswords() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password && confirmPassword) {
            if (password === confirmPassword) {
                messageDiv.textContent = 'As senhas coincidem.';
                messageDiv.style.color = 'green';
            } else {
                messageDiv.textContent = 'As senhas não coincidem.';
                messageDiv.style.color = 'red';
            }
        } else {
            messageDiv.textContent = ''; // Limpa a mensagem se algum campo estiver vazio
        }
    }

    // Adiciona eventos de input para verificar as senhas em tempo real
    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);
});
