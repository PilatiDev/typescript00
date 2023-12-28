"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['vermelho']);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 10] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 100] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 1000] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Admin"] = 1] = "Admin";
    UserStatus[UserStatus["Editor"] = 2] = "Editor";
    UserStatus[UserStatus["User"] = 3] = "User";
})(UserStatus || (UserStatus = {}));
function checkStatus(status) {
    switch (status) {
        case UserStatus.Admin:
            console.log('É admin');
            break;
        case UserStatus.Editor:
            console.log('É editor');
            break;
        case UserStatus.User:
            console.log('É user');
            break;
    }
}
var Teclas;
(function (Teclas) {
    Teclas["Up"] = "ArrowUp";
    Teclas["Down"] = "ArrowDown";
    Teclas["Left"] = "ArrowLeft";
    Teclas["Direita"] = "ArrowRight";
})(Teclas || (Teclas = {}));
window.addEventListener('keydown', function (e) {
    console.log(e);
});
