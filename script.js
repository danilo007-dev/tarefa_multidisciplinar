// Selecionar elementos
const container = document.querySelector('.container');
const signUpBtn1 = document.getElementById('sign-up-btn');
const signUpBtn2 = document.getElementById('sign-up-btn2');
const signInBtn1 = document.getElementById('sign-in-btn');
const signInBtn2 = document.getElementById('sign-in-btn2');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Função para alternar para modo de cadastro
function toggleSignUpMode() {
    container.classList.add('sign-up-mode');
}

// Função para alternar para modo de login
function toggleSignInMode() {
    container.classList.remove('sign-up-mode');
}

// Event listeners para os botões
signUpBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSignUpMode();
});

signUpBtn2.addEventListener('click', () => {
    toggleSignUpMode();
});

signInBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSignInMode();
});

signInBtn2.addEventListener('click', () => {
    toggleSignInMode();
});

// Manipular envio do formulário de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    // Animação de sucesso
    showSuccessMessage('Login realizado com sucesso! 🎉');
    
    console.log('Login:', { email, password });
    
    // Limpar formulário
    loginForm.reset();
});

// Manipular envio do formulário de cadastro
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    
    // Animação de sucesso
    showSuccessMessage('Cadastro realizado com sucesso! 🎉');
    
    console.log('Cadastro:', { name, email, password });
    
    // Limpar formulário
    signupForm.reset();
    
    // Opcional: redirecionar para login após cadastro
    setTimeout(() => {
        toggleSignInMode();
    }, 2000);
});

// Função para mostrar mensagem de sucesso
function showSuccessMessage(message) {
    // Criar elemento de mensagem
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: 600;
        animation: slideIn 0.5s ease-out;
    `;
    
    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(messageDiv);
    
    // Remover mensagem após 3 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 500);
    }, 3000);
}

// Adicionar efeito de digitação no placeholder (opcional - deixar como extra)
const inputs = document.querySelectorAll('.input-field input');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});
