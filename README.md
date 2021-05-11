# Anicha --Creaciones en Madera

Este es el proyecto final del curso React JS de CODERHOUSE.
Es una tienda on-line de un emprendimiento sobre artículos realizados en madera.

## Dependencias

Para el proyecto se utilizó React JS, Firebase, [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) (para la mayoría de estilos CSS) y además se instalaron packages de [Fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) para utilizar iconos.

## React JS

A continuación voy a detallar los componentes creados para cumplir con la entrega del Proyecto:

### CartContext

Contiente el conext CartContext y su provider CartProvider. Se utiliza en toda la app para la interacción con el estado del *cart*. Contiene distintas funciones para trabajar con el mismo:
- addItem:
Recibe un item y una cantidad del mismo para agregarla al carrito. Si ya existe este item entonces solo modifica su cantidad.
- removeItem:
Recibe el *id* de un item y lo elimina de *cart*.
- clear:
Elimina el contenido de *cart*.
- isInCart:
Recibe un *id* de un item y devuelve un boolean si existe el mismo en el *cart*.
- quantityTotal:
Retorna el total de items en el *cart*.

### FireBase

Contiene los datos necesarios para utilizar la base de datos de FireBase.

### Cart

En el se visualiza el contenido del carro, el total a pagar y el componente FormularioCompra para el registro de los datos del usuario. Cuenta con la función *generarOrden* la cual utilizando un objeto con los datos del cliente y el contenido en el CartContext, realiza la compra y setea el idCompra a mostrar.

### CartWidget

Se encuentra dentro de un link que va al componente Cart. Muestra además todos los artículos en el carrito basándose en el CartContext.

### FormularioCompra

Presenta un formulario con validaciones para el ingreso de los datos del usuario a realizar la compra. Recibe como propiedad la función *generarOrden* utilizada para enviar un objeto cuyas propiedades son los datos ingresados; tambien recipe el *idCompra* el cual es el id generado de la nueva compra a mostrarse en un "Pop-up". Justificacion: Este componente se creó con el motico de tener el codigo mas ordenado ya que el componente Cart estaba bastante cargado.

### Item

Recibe un Item y lo muestra de manera resumida a través de JSX.

### ItemCount

Monta un contador el cual maneja el usuario a través de dos botones. Utilizando el stock como límite máximo. Al apretar el botón **Agregar a carrito** ejecuta la función onAdd para enviar la información del input al parent.

### ItemDetail

Basándose en el item recibido, se muestra muchas de las propiedades incluyendo la descripción. También se monta el componente ItemCount y luego de definir la cantidad con el mismo, este agrega el item con su cantidad correspondiente al CartContext y se puede finalizar la compra (lo que es un link a Cart)

### ItemDetailContainer

Posee una función "getItem" la cual retorna un Item con su propiedad buscandolo en la base de datos de FireBase. Se monta cuando se le hace click a un Item ubicado en el ItemListConteiner desmontando el mismo. Utiliza useParams para identificar a cual Item se le hizo click y así utilizarlo en el componente ItemDetail.

### ItemList

Recibe un Array el cual es mapeado y cada elemento es armado por el componente Item

### ItemListContainer

Utilizando useParams para reconocer la categoría (si es que existe), realiza una consulta a la base de datos de FireBase para que retorne un array que cumpla con dicha categoría. Este Array final es enviado al componente ItemList.

### LoadingIcon

Muestra un icono animado. Dependiendo de la propiedad *bigIcon* (la cual por defecto es true), cambia el tamaño del mismo. Es utilizado cuando se realizan consultas a la base de datos mientras se espera la respuesta. Justificacion: como el icono se repetiría en varios componentes, este se aisló para no repetir codigo.

### NavBar

Se ejecuta en el App.js una única vez y se encarga de mostrar la navegación del proyecto además de contener el componente CartWidget en un Link que va al componente Cart.




