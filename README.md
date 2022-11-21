| Solución al Problema 7 |

Para ejecutar el proyecto se debe hacer npm install para la instalación de las dependencias y luego iniciar con el comando npm start que ocupará el puerto 4000.

Para visualizar el proyecto se debe acceder al localhost:4000 en un buscador. Se mostrará un formulario con distintos campos para llenar y se podrá tanto cargar los datos como limpiar todos los campos. Adicionalmente, en la parte inferior del formulario estará una tabla que mostrará los datos de la base de datos (si no hay nada, se observará un mensaje que no hay datos presentes). Dentro de la tabla hay opciones para editar un regisro y eliminarlo. Si se edita, se redireccionará a otra página que mostrará los campos con los datos que se habrían guardado en la base de datos y ahí se podrá actualizar dicho registro o en cuyo caso si no se desea actualizar, se puede regresar al inicio con el hipervínculo "volver". Cabe destacar que si no se observa un nuevo registro posterior a cargar el formulario, se debe actualizar la página.

Para este proyecto se creó una base de datos con MySQL, por lo que se comparte el arhivo sql para su uso.

¡¨¨¨DATO IMPORTANTE¨¨!

Se desarrolló el proyecto con Docker de manera local (uso de docker-compose), por lo que para poder ejecutar el proyecto desde otro dispositivo se deberán cambiar las credenciales y configuraciones en el archivo config.json ubicado en la carpeta config que esta dentro de la carpeta database. Adicionalmente, se agrega la propiedad "port" al archivo config.json para lograr enlazar la base de datos, por lo que esta propiedad puede llegar a afectar la ejecución del proyecto.