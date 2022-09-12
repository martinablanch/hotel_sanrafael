//Inicio de sesión 

document.getElementById("btn-iniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btn-registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

let formularioLogin = document.querySelector(".form-login");
let formularioRegister = document.querySelector(".form-register");
let contenedorLoginRegister = document.querySelector(".contenedor-forms");
let cajaTraseraLogin = document.querySelector(".cajaTrasera-login");
let cajaTraseraRegister = document.querySelector(".cajaTrasera-register");



function anchoPage() {

    if (window.innerWidth > 850) {
        cajaTraseraRegister.style.display = "block";
        cajaTraseraLogin.style.display = "block";
    } else {
        cajaTraseraRegister.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioRegister.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {

    if (window.innerWidth > 850) {
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "10px";
        formularioRegister.style.display = "none";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.opacity = "0";
    } else {
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioRegister.style.display = "none";
        cajaTraseraRegister.style.display = "block";
        cajaTraseraLogin.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "410px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.opacity = "0";
        cajaTraseraLogin.style.opacity = "1";
    } else {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.display = "none";
        cajaTraseraLogin.style.display = "block";
        cajaTraseraLogin.style.opacity = "1";
    }
}


//LOCAL STORAGE
const nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    usuario = document.getElementById('usuario'),
    contraseña = document.getElementById('contraseña'),
    btnRegister = document.getElementById('btn-register');

btnRegister.addEventListener('click', (e) => {
    e.preventDefault()
    const datos = {
        nombre: nombre.value,
        email: email.value,
        usuario: usuario.value,
        contraseña: contraseña.value
    }
    console.log(datos);
})

btnRegister.addEventListener('click', () => {
    let nombreRegistro = document.getElementById('nombre').value,
        emailRegistro = document.getElementById('email').value,
        usuarioRegistro = document.getElementById('usuario'),
        contraseñaRegistro = document.getElementById('contraseña').value;
    const datosRegistro = {
        'nombre': nombreRegistro,
        'email': emailRegistro,
        'usuario': usuarioRegistro,
        'contraseña': contraseñaRegistro
    }
    localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro));
    Swal.fire({
        icon: 'succes',
        title: 'Registro exitoso',
        showConfirmButton: true,
        timer: 2000
    })
})

const userLogin = document.getElementById('usuarioLog'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('btn-login');


let user = 'Barto',
    pass = '987654321',
    ingresar = false;


btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        userLogin: userLogin.value,
        passLogin: passLogin.value
    }
    console.log(data);
})

btnLogin.addEventListener('click', () => {
    let userLog = document.getElementById('usuarioLog').value,
        passLog = document.getElementById('passwordLogin');
    const logIn = {
        'username': userLog,
        'password': passLog
    }
    localStorage.setItem('logIn', JSON.stringify(logIn));

    if ((user === userLog) && (pass === passLog)) {
        Swal.fire({
            icon: 'succes',
            title: '¡Has iniciado sesión correctamente!',
            showConfirmButton: false,
            timer: 3000
        })
        ingresar = true;
    } else {
        swal.fire({
            icon: 'error',
            title: 'No se pudo iniciar sesión',
            text: 'Usuario y/o contraseña incorrectos',
            showConfirmButton: false,
            timer: 3000
        })
    }
})