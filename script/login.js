const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioLogado = null;

(()=>{
    usuarioLogado = localStorage.getItem("usuario");
    if(usuarioLogado){
        window.location.href = "/tmp/guest-sfbvdh/Área de Trabalho/g243I2t-main/logado.html";
    }
})();

btnLogin.onclick = (e) =>{

    e.preventDefault();

    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if (usuario){
    if(usuario === "raul"){
        if (senha === "123"){
            localStorage.setItem("usuario",usuario);
            window.location.helf = "/tmp/guest-sfbvdh/Área de Trabalho/g243I2t-main/logado.html";
        }
        else{
            inputUsuario.focus();
        }
    }
}
}