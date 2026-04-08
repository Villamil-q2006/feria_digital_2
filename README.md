# Portal Rural El Progreso

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una plataforma web interactiva e informativa sobre las actividades agrícolas y ganaderas de la comunidad rural **El Progreso**.

La plataforma funciona como un portal de acceso privado que permite a los usuarios registrados visualizar productos del sector agrícola y ganadero, además de ofrecer información detallada sobre cada producto mediante páginas individuales.

El sitio no solo es informativo, sino que incluye un sistema de seguridad de usuarios, contacto directo con los vendedores mediante WhatsApp y un formulario de inscripción para participar en talleres rurales.

Se le incluyó una IA funcional.
---

## Tecnologías utilizadas

Para el desarrollo del proyecto se utilizaron las siguientes tecnologías:

* **HTML5** → Estructura de la página web y semántica.
* **CSS3** → Diseño visual, galerías responsivas y estilos modernos (modo oscuro/neón).
* **JavaScript** → Lógica de validación de formularios y manejo del estado de sesión.
* **Firebase Authentication** → Backend para la creación de usuarios, inicio de sesión, protección de rutas y envío de correos de verificación.

El proyecto fue desarrollado utilizando **Visual Studio Code** como editor de código.

---

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

    feria_digital_2
    │
    ├── index.html       # Portal de acceso (Login/Registro) y menú principal
    ├── estilos.css      # Hoja de estilos global y diseño de galerías
    ├── funciones.js     # Validaciones de formularios (edad, contacto)
    ├── chat-ia.html     # Chat con IA funcional
    ├── README.md        # Documentación del proyecto
    │
    └── productos/       # Páginas individuales de exposición
        ├── cafe.html
        ├── platano.html
        ├── maiz.html
        ├── yuca.html
        ├── leche.html
        └── ganado.html

---

## Funcionalidades principales del sitio

El sitio web pasó de ser una página estática a una plataforma dinámica con las siguientes funcionalidades:

* **Sistema de Autenticación:** Registro e inicio de sesión seguro con Firebase.
* **Verificación de correos:** El sistema exige y envía un enlace de verificación al correo registrado para garantizar que sea real antes de conceder el acceso.
* **Rutas protegidas:** Memoria de sesión que muestra el contenido de la feria solo a usuarios logueados y verificados.
* **Galerías de productos:** Visualización organizada y responsiva de productos agrícolas y ganaderos usando object-fit para evitar deformaciones.
* **Contacto en tiempo real:** Botón flotante integrado con la API de WhatsApp para atención directa al cliente.
* **Formulario de inscripción:** Sistema para talleres rurales con validación de mayoría de edad y formato de teléfono mediante JavaScript.

---

## Explicación del funcionamiento

### Ejecución y Flujo de Usuario
El proyecto se ejecuta iniciando un servidor local en el archivo index.html. Si el usuario no tiene cuenta, debe registrarse con un correo válido y una contraseña. El sistema envía un enlace de verificación a esa bandeja de entrada. Una vez verificado, la plataforma desbloquea el menú principal, permitiendo navegar hacia las páginas de cada producto sin pedir la clave en cada recarga gracias a la persistencia de sesión.

### Adaptación y Escalabilidad
Se adaptó el código inicial estático para soportar una arquitectura más compleja. Las imágenes fueron controladas mediante clases CSS, los scripts de validación se separaron para evitar conflictos con Firebase, y se agregó la funcionalidad de "Cerrar sesión" para gestionar la privacidad del usuario.

### Importancia de las pruebas
Durante el desarrollo se realizaron pruebas exhaustivas para comprobar:
* El correcto envío de correos de verificación hacia plataformas reales (ej. Gmail).
* La persistencia de la sesión al navegar entre la raíz y la subcarpeta /productos.
* El funcionamiento del botón flotante de WhatsApp.
* La adaptación del diseño CSS para que las imágenes mantuvieran su proporción sin romper el contenedor.

---

## Impacto en la calidad del software

La correcta organización del código (separando la base de datos, los estilos y la estructura), la realización de pruebas de flujo de usuario y la implementación de seguridad con Firebase permiten mejorar enormemente la calidad del software.

Esto facilita el mantenimiento del sistema, previene accesos no autorizados y ofrece una experiencia de usuario (UX) mucho más fluida, moderna y profesional.

---

## Autores

Este proyecto fue desarrollado por:

* **Juan Villamil**
* **Jeronimo Roman**
* **David Calderon**

Como parte de una actividad académica de desarrollo web.