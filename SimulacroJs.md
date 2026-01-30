#  SIMULACRO DE PRUEBA DE DESEMPEÑO  
##  Sistema de pedidos para restaurante

---

#  Contexto general

Eres parte del equipo de desarrollo de **RestorApp**, un sistema web para la gestión de pedidos de un restaurante.
El restaurante busca un diseño inspirado en el siguiente figma: https://www.figma.com/design/HlbubAizLimCZGVRuqNtfT/Sin-t%C3%ADtulo?node-id=0-1&t=i3Eino109TkWDcRj-1

El restaurante necesita una aplicación que permita:

##  A los clientes (usuarios)
- Ver el menú  
- Realizar pedidos  
- Ver el estado de sus pedidos  
- Consultar su información de perfil  

##  A los administradores
- Visualizar todos los pedidos  
- Cambiar el estado de cada pedido  
- Gestionar el flujo de atención del restaurante  

Tu misión es construir una aplicación web funcional que simule este sistema.

---

#  Módulos obligatorios del sistema

---

## 1️⃣ Sistema de usuarios

Debe existir como mínimo:

### Usuario normal
- Puede ver el menú  
- Puede realizar pedidos  
- Puede ver solo SUS pedidos  
- Puede ver su perfil  

### Administrador
- Puede ver TODOS los pedidos  
- Puede cambiar estados  
- Puede gestionar pedidos  

Los usuarios deben tener como mínimo:

```js
{
  id,
  name,
  email,
  role // "admin" | "user"
}
```

---

## 2️⃣ Vista de usuario (User panel)

###  A. Menú del restaurante  
Lista de productos (nombre, precio, categoría)

Botón para agregar al pedido

Ejemplo de producto:

```js
{
  id,
  name,
  price,
  category
}
```

---

### 🛒 B. Creación de pedidos

Un usuario debe poder:

- Agregar productos a un pedido  
- Ver un resumen del pedido  
- Confirmar pedido  

Cada pedido debe tener:

```js
{
  id,
  userId,
  items: [],
  total,
  status,
  createdAt
}
```

---

###  C. Mis pedidos

- Ver todos sus pedidos  
- Ver su estado actual  
- Ver el total y productos  

---

###  D. Perfil de usuario

Debe existir una vista de perfil con:

- Nombre  
- Correo  
- Rol  
- Cantidad de pedidos realizados  
- Total gastado (opcional avanzado)

---

## 3️⃣ Vista de administrador (Admin panel)

El administrador debe poder:

- Ver todos los pedidos del sistema  
- Filtrar pedidos por estado  
- Ver detalle de cada pedido  
- Cambiar el estado del pedido:

```
pendiente → preparando → listo → entregado
```

- Eliminar pedidos (opcional)

---

## 4️⃣ Estados del pedido (obligatorio)

Cada pedido debe manejar estados claros:

- Pendiente  
- Preparando  
- Listo  
- Entregado  

Estos estados deben:

- Reflejarse visualmente  
- Poder cambiarse desde el panel admin  
- Actualizarse en el sistema dinámicamente  

---

## 5️⃣ Persistencia de datos

Debe existir persistencia usando:

- LocalStorage y/o  
- Archivos JSON simulando base de datos  

Debe persistirse:

- Usuarios  
- Menú  
- Pedidos  
- Sesión  

---

## 6️⃣ Sistema de vistas y rutas

Debe existir:

- Vista de login (opcional)  
- Vista de usuario  
- Vista de administrador  
- Vista de perfil  

Debe existir protección de rutas según rol:

- El usuario no puede entrar al panel admin  
- El admin no debe entrar al panel user  

---

#  Requisitos técnicos obligatorios

El proyecto debe evidenciar:

- Estado central (arrays principales)  
- Manipulación real del DOM  
- Eventos (`addEventListener`)  
- Formularios con `preventDefault`  

Uso obligatorio de:

- `map`  
- `filter`  
- `find`  
- `some`  
- `every`  

- Renderizado dinámico  
- Separación de archivos:

```
index.html  
styles.css  
app.js  
```

---

# 📦 Entregables del simulacro

Estructura del proyecto:

```
/RestorApp
  index.html
  styles.css
  app.js
  data.json (opcional)
  README.md
```

El README debe incluir:

- Descripción del sistema  
- Cómo ejecutarlo  
- Roles del sistema  
- Flujo de uso  
