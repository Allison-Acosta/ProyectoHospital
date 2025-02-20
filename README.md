# ProyectoHospital- Allison Acosta
Modulo 6 - Entrega 1

1. Se agrega un archivo manifest.json en la carpeta public
    Adicionalmente se crea la carpeta icons con iconos del hospital en 512 y 128 px.
2. Se agregan las dependencias para PWA con npm install vite-plugin-pwa --save-dev
    Se edita el vite.config.js
    Se crea el sw.js
3. Para configurar el service worker, editamos el archivo sw.js antes creado.
    Usaré una estrategia Stale-While-Revalidate 
4. Se verificó que el programa funciona en version offline, En la pestaña "Equipo medico" no carga los medicos, ya que esta informacion viene de una API online. 
y actualmente esta no está guardada en la memoria CACHE. 
5. Para el informe de Lighthouse en version movile se tienen los siguientes resultados: (estos se hicieron a partir de la pag principal)
    34% performance
    90% accessibility
    96% Best practices
    83% SEO
   En el caso de la version web:
    44% performance
    90% accessibility
    96% Best practices
    83% SEO
 Los informes se pueden ver en la carpeta de documentos del proyecto.