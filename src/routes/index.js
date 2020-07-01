import Home from "../pages/Home";
import Header from "../templates/Header";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  //Especificamos los elementos donde se realizará render
  const header = document.getElementById("header") || null;
  const content = document.getElementById("content") || null;
  console.log(content);

  //Renderizamos el header
  header.innerHTML = await Header();

  //Identificamos que ruta se encuentra actualmente la página
  let hash = getHash();
  let route = await resolveRoutes(hash);
  //Verificamos si la ruta actual existe en nuestro objeto de rutas
  let render = routes[route] ? routes[route] : Error404;

  //Renderizamos el content
  content.innerHTML = await render();
};

export default router;
