"use strict";
function showFeedBack(mesage, type) {
    alert(type.toUpperCase() + " - " + mesage);
}
var feedBack = showFeedBack("ola", "info");
function showError(message) {
    throw new Error("função marcada com never nunca retorna nada");
}
var error = showError("mensagem de erro");
