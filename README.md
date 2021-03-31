# Anicha --Creaciones en Madera

Este es el proyecto final del curso React JS de CODERHOUSE.
Es una tienda on-line de un emprendimiento sobre artículos realizados en madera.

## Dependencias

Para el proyecto se utilizó React JS, [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) (para la mayoría de estilos CSS) y además se instalaron packages de [Fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) para utilizar iconos.

## React JS

A continuación voy a detallar los componentes creados para cumplir con la entrega intermedia del Proyecto:

### NavBar

Se ejecuta en el App.js una única vez y se encarga de mostrar la navegación del proyecto además de contener el componente CartWidget.

### CartWidget

Por ahora es solo un icono con algunos efectos css.

### ItemListContainer

Dentro de un useEffect se encuentra una promesa con un setTimeout para simular la demora de respuesta contra un servidor. También dentro de ese mismo hook, se filtra el array resuelto por la promesa utilizando useParams para saber la categoría seleccionada en el NavBar. Este Array final es enviado al componente ItemList.

### ItemList

Recibe un Array el cual es mapeado y cada elemento es armado por el componente Item

### Item

Recibe un Item y lo muestra de manera resumida a través de JSX.

### ItemDetailContainer

Posee una función "getItem" la cual retorna un array con todos los objetos. Se monta cuando se le hace click a un Item ubicado en el ItemListConteiner desmontando el mismo. Utiliza useParams para identificar a cual Item se le hizo click y así utilizarlo en el componente ItemDetail.

### ItemDetail

Basándose en el item recibido, se muestra muchas de las propiedades incluyendo la descripcion. También se monta el componente ItemCount. Se deja lugar también a un párrafo:
><p>Elementos enviados al carrito: {elementosCarrito}</p>

Este último sirve para demostrar que el evento onAdd() del ItemCount puede enviar información a su parent.

### ItemCount

Monta un contador el cual maneja el usuario a través de dos botones. Utilizando el stock como límite máximo. Al apretar el botón **Agregar a carrito** ejecuta la función onAdd para enviar la información del input al parent.