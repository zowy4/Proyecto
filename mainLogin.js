const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el envío del formulario

    const data = {
        username: username.value,
        password: password.value
    };

    // Mostrar los datos en consola (opcional)
    console.log(data);

    // Validación para la contraseña
    if (data.password !== "zowy3427") {
        alert("Error: Contraseña incorrecta. Intenta de nuevo.");
    } else {
        alert("Login exitoso");
    }
});
