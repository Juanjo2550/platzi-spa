import router from "./routes";

//Verificamos si la página ya cargó
window.addEventListener("load", router);

//Escuchamos cuando la aplicación cambie de ruta
window.addEventListener("hashchange", router);
