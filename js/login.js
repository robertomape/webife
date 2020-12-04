function go() {
    if (document.getElementById("userlog").value == '123' && document.getElementById("passlog").value == '123') {
        document.form.submit();
        console.log('hey');
    } else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}