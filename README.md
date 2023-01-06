# API NodePop
Práctica del módulo "Backend con Node y MongoDB" del Bootcamp "Mujeres en Tech" de Glovo y Keepcoding

El servicio mantiene anuncios de compra o venta de artículos y permite consultar, y buscar filtros por varios criterios.
Este proyecto usa EXPRESS, MongoDB, mongoose y Node.js. Se puede conocer las dependencias en package.json.

Instalar dependencias:

```sh
npm install
```

Inicializar base de datos:
(Crearà y cargará una colección de documentos de la base de datos necesaria para el funcionamiento de la aplicación 'nodepop'

```sh
npm run init-db
```

Iniciar App

. En modo desarrollo:
```sh
npm run dev
```

. En modo producción:
```sh
npm start
```

## API Methods
El Api de nodepop esta basada en principios REST y usa los métodos HTTP(GET y POST) para acceder a los recursos. 
El formato de transferencia soportado por el API para enviar y recibir respuestas es en JSON.

GET Lista de productos ->
Devuelve una lista de todos los productos
```sh
http://localhost:3000/apiv1/products
```

GET Lista de productos con paginación
```sh
http://localhost:3000/apiv1/products?skip=0&limit=2
```

GET Lista por tag ->
Filtra productos cuyo campo tag contenga mobile 
```sh
http://localhost:3000/apiv1/products?tags=mobile 
```

GET Lista por tipo de anuncio -> 
Filtra productos por tipo, en venta si el parámetro es true y compra si el parámetro es false
```sh
http://localhost:3000/apiv1/products?onSale=true
```

GET Filtro por rango de precio ->
Devuelve los productos cuyo precio esté entre 10 y 50
```sh
http://localhost:3000/apiv1/products?price=10-50
```
Si el precio inicial es mayor que el final, devuelve una lista vacía
```sh
http://localhost:3000/apiv1/products?price=50-10
```

GET Búsqueda por nombre ->
Devuelve los productos cuyo nombre empiece por "ca"
```sh
http://localhost:3000/apiv1/products?name=ca
```

GET Listado de tags ->
Devuelve una lista con los tags existentes
```sh
http://localhost:3000/apiv1/products/tags
```

GET Obtener una imagen ->
Devuelve la imagen de un producto
```sh
http://localhost:3000/images/products/zapatillas.png
```

POST Añadir un producto ->
Crea un nuevo producto y lo guarda en la base de datos
```sh
http://localhost:3000/apiv1/products
```

