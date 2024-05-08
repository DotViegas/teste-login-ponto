function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Verifica se o usuário e a senha estão corretos
    if (usuario === "admin" && senha === "123") {
        alert("Login bem-sucedido!");
        // Redireciona para a página de sucesso ou faz qualquer outra ação necessária
        window.location.href = "platform.html";
    } else if (usuario == "") {
        alert("Campo vazio. Insira os dados.")
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}