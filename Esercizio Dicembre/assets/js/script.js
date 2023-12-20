document.addEventListener('DOMContentLoaded', () => {
    let ServerURL="http://localhost:3000/users"
    let serverLogin="http://localhost:3000/login"

    if (window.location.href.includes('index.html')) {
        register()
    } else if (window.location.href.includes('login.html')) {
        login()
    }

    function register() {
        document.querySelector('#register-btn').addEventListener('click', () => {
            fetch(ServerURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: document.querySelector('#exampleInputEmail1').value,
                    password: document.querySelector('#exampleInputPassword1').value
                })
            }).then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err))
        })}

    function login() {
    document.querySelector('#login-btn').addEventListener('click', () => {
        fetch(serverLogin, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.querySelector('#exampleInputEmail1').value,
                password: document.querySelector('#exampleInputPassword1').value
            })
        }).then(response => response.json())
            .then(json => {console.log(json)
            if (json.accessToken) {
                alert('Login effettuato')
            } else {
                alert('Credenziali errate')
            }
            })
            .catch(err => console.log(err))
    })
}
})