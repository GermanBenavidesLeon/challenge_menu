# Challenge App
## Alkemy 

##### [DEMO](https://hotelmenu.netlify.app/)

Para este proyecto por el momento e instalado las siguientes librerias:

| Librerias  | Utilizacion |
| ------ | ------ |
| Animate Css '4.1.1' | La animacion para el titulo en el cart.  |
| Firebase '8.9.1' | No es una libreria, es una plataforma de google para nuestra base de datos.|
| Boostrap '5.1.3' | Se utilizo para los estilos del formulario y otros. |
| React-boostrap '2.0.0' |Se utilizo para el Modal, NavBar y otros estilos para la aplicacion.|
| React-icons '4.3.1' | Se utilizo para la mayoria de iconos |
| Sweet Alert-React '4.2.0' | Se utilizo para los mensajes en ItemCount y formulario |
| Router-react-dom '6.0.1'| Se utilizo para las rutas de nuestra App |


> Con respecto al diseño o estilos de la App
> utilizo las librerias de Boostrap y algunos
> ajustes con Css. 


## Instalacion

React Js requires [Node.js](https://nodejs.org/es/) to run.

```
npx create-react-app my-app
cd my-app
code .
npm start
```

Para este Proyecto Challenge de Alkemy, se generaron diferentes componentes, mediante funciones, props y hooks, teniendo como idea principal que el usuario genere una orden. el primer componente fue crear el NavBar, e ir dando un estilo que sea simple de interactuar, mediante un catalogo y tambien categorias del producto; los componentes se fueron generando de la sgte secuencia: en primera estancia el ListContainer, Item e ItemList, en estos componentes creamos nuestras primeras cards para nuestro catalogo; despues continue con ItemDetailContainer e ItemDetail, en donde generamos las cards con el detalle del producto mas el ItemCount en donde el usuario puede elegir la cantidad del producto y ademas tiene una alerta con los limites de productos a seleccionar teneienedo en cuenta el stock y la cantidad inicial. En esta secuencia a continuación genere los componentes para el carrito de compras, los componentes son: primero el componente Cart en donde se creó la tabla, que detalla el producto seleccionado por el usuario, segundo genere un componente CartContext, este lleva todas las funciones que van dentro del componente Cart, como por ejemplo agregar ítems, borrar ítems, precio total…..; dentro del componente Cart tenemos el boton generar orden, el cual al dar click nos genera un modal que contiene un formulario donde el usuario puede ingresar sus datos teniendo en cuenta la información requerida, cada campo del formulario tiene validaciones mediante funciones ternarias que indican que debe completar el formulario. Dentro de la aplicación creamos un array de algunos de los productos del hotel. La aplicación está conectada a Firebase, en donde creamos también una colección de nuestros productos, además está conectada para recibir los datos del usuario al momento de generar la orden de compra mediante el formulario. Voy a continuar trabajando en el proyecto challenge de Alkemy , ya que me falto crear el login, el buscador de los platos y ajustar la parte responsive para otros dispositivos.


| Plugin | README |
| ------ | ------ |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |

