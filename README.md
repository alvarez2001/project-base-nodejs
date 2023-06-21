# Proyecto Express - README

Este es el README del proyecto Express, donde se detallan los comandos disponibles y la configuración necesaria.

## Configuración

Antes de utilizar los comandos de migración, es necesario realizar la configuración adecuada del proyecto. Sigue los
pasos a continuación:

1. Renombra el archivo `.env.example` a `.env`.
2. Abre el archivo `.env` y modifica los valores según tus necesidades. Aquí se encuentran las variables de entorno que
   se utilizan para la configuración del proyecto, como la conexión a la base de datos y otras configuraciones
   específicas. Asegúrate de asignar los valores correctos a cada variable.

**NOTA:** Si no tienes el archivo `.env.example`, asegúrate de crear un archivo `.env` nuevo y asignar los valores
correspondientes a cada variable.

## Instalación

Antes de ejecutar cualquier comando, asegúrate de tener instaladas todas las dependencias del proyecto. Para instalar
las dependencias, ejecuta el siguiente comando:

```bash
npm install
```

## Comandos

A continuación, se presentan los comandos disponibles en el proyecto.

### migration:create

Crea una nueva migración para una tabla específica.

```bash
npm run migration:create <nombre tabla>
```


Reemplaza `<nombre tabla>` con el nombre de la tabla para la cual deseas crear la migración. Este comando generará un archivo de migración en el directorio correspondiente.

### migration:run

Ejecuta todas las migraciones pendientes en la base de datos.

```bash
npm run migration:run
```


Este comando buscará todas las migraciones pendientes en el directorio correspondiente y las ejecutará en orden.

### migration:revert

Revierte todas las migraciones ejecutadas previamente en la base de datos.


```bash
npm run migration:revert
```


Al ejecutar este comando, se revertirán todas las migraciones realizadas en orden inverso al que se ejecutaron.

## Uso

Antes de ejecutar cualquier comando, asegúrate de haber configurado correctamente tu entorno modificando los valores en el archivo `.env` según las instrucciones anteriores.

¡Gracias por utilizar el proyecto Express! Si tienes alguna pregunta o necesitas ayuda, no dudes en consultar la documentación o abrir un issue en el repositorio.
