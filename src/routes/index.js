import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,//establecemos la ruta para hacer render del home
  '/:id': Character,//ruta con valor dinamico id: hace render en los personajes
  '/contact': 'Contact', //establecemos la ruta y este hace render de Contact
}

//manejador(obtener valores y como utilizarlos)
const router = async() => {
  //Elemento header hacia donde voy hacer el render
  const header = null || document.getElementById("header");
  //Elemento content hacia donde voy hacer el render
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render(); 

};

export default router;
