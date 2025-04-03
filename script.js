const users = {
    login: 'admin',
    password: 'admin',
}

const button = document.getElementById('button-submit')

button.addEventListener('click', (event) => {
    event.preventDefault()
    const login = document.getElementById('login').value.trim()
    const password = document.getElementById('password').value.trim()


    if(login=== '' || password ==='') {
        return alert ('Existem campos obrigatórios não preenchidos.')
    }
    
    if(login === users.login && password === users.password){
        return alert ('Dados verificados com sucesso!')
    } else {
        return alert ('Dados incorretos')
    }


   
})