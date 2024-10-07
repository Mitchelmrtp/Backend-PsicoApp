# Sistema de Gestión de Pacientes - Backend en Node.js

Este proyecto es un sistema de gestión de pacientes diseñado para clínicas y profesionales de la salud mental, que permite la administración eficiente de cuestionarios, sesiones, diagnósticos, y reportes médicos. Desarrollado utilizando **Node.js**, **Express**, y **Sequelize**, este backend proporciona una robusta API que puede ser fácilmente integrada con aplicaciones frontend o móviles.

## Características Principales

- **Gestión de Pacientes**: Registro y seguimiento de pacientes con sus historiales clínicos.
- **Gestión de Especialistas**: Manejo de datos de psicólogos, horarios y especialidades.
- **Sesiones y Diagnósticos**: Registro de sesiones con especialistas y diagnósticos detallados.
- **Cuestionarios y Reportes**: Creación de cuestionarios y generación de reportes automáticos de cada sesión.
- **Sistema de Citas**: Solicitud y administración de citas para los pacientes.
- **Autenticación y Roles de Usuario**: Sistema de autenticación para diferenciar entre los roles de usuarios (pacientes, especialistas, administradores).

## Requisitos

- **Node.js** >= 14.x
- **Express.js** (Framework web para Node.js)
- **Sequelize** (ORM para manejar las conexiones con la base de datos)
- **MySQL** / **PostgreSQL** / **Otro** (Sistema de gestión de bases de datos relacional)

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/usuario/proyecto-backend.git
cd proyecto-backend

npm install
npm run dev
