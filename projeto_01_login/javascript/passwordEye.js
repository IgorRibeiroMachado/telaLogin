const eye = document.querySelector('#eye')
        eye.onclick = e => {
            const senha = document.querySelector('#password')
            senha.getAttribute('type') == 'password' ? 
            senha.setAttribute('type', 'text') : senha.setAttribute('type', 'password')
                
        }