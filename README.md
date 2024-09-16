# Agenda Electrónica

Este proyecto es una Agenda Electrónica interactiva que permite a los usuarios agregar, eliminar o editar eventos, y cuenta con vistas diarias, semanales y mensuales. También incluye notificaciones y recordatorios por correo electrónico.

## Características
- Agregar, eliminar y editar eventos.
- Vista de calendario diaria, semanal y mensual.
- Recordatorios por correo electrónico.
- Notificaciones locales en la aplicación.
  
## Estructura del Proyecto
- `index.html`: Contiene la estructura del calendario.
- `style.css`: Estiliza la apariencia del calendario.
- `script.js`: Maneja la interactividad del calendario.
- `backend/server.js`: Servidor Node.js que gestiona el envío de recordatorios por correo electrónico.

## Configuración

### Frontend
1. Clona el repositorio.
2. Abre el archivo `index.html` en un navegador.

### Backend
1. Navega al directorio `backend` y ejecuta los siguientes comandos:
    ```bash
    npm install
    node server.js
    ```

2. Asegúrate de tener configurado un correo válido en el archivo `server.js`.

## Uso
- Haz clic en "Agregar Evento" para crear un nuevo evento.
- Cambia la vista del calendario entre "Diario", "Semanal" o "Mensual" usando el selector.
- Los recordatorios se enviarán automáticamente por correo electrónico si se marca la opción.

