<div align="center">

<img src="assets/logo/styleradar-logo.svg" alt="Logotipo de StyleRadar: un vestido que termina en las ondas de un radar" width="300">

# StyleRadar · Frontend

**Descubre tu estilo. En tu ciudad.**

El buscador de moda local con probador virtual.

[**Ver los mockups navegables →**](https://claude.ai/artifact/RwtXRib117HtU4bDGYctgs) · [Manual de identidad (PDF)](docs/StyleRadar_Manual_de_Identidad.pdf) · [Presentación (PDF)](docs/StyleRadar_Presentacion.pdf)

</div>

---

> **Estado del sprint:** este repositorio solo contiene la documentación del frontend. El código en React se desarrollará en los próximos sprints a partir de los mockups enlazados aquí.

## Tabla de contenido

1. [Participantes](#participantes)
2. [Contexto del proyecto](#contexto-del-proyecto)
3. [Logotipo](#logotipo)
4. [Manual de identidad](#manual-de-identidad)
5. [Mockups](#mockups)
6. [Módulos](#módulos)
7. [Criterios de UX aplicados](#criterios-de-ux-aplicados)

---

## Participantes

| Integrante |
|---|
| Juan Nicolás Álvarez |
| Camilo Ortiz |
| Daniel Valero |
| Juan Diego Valderrama |
| Paula Alejandra Diaz |

Curso: **Desarrollo y Operaciones de Software (DOSW)** · Escuela Colombiana de Ingeniería Julio Garavito · 2026

---

## Contexto del proyecto

**StyleRadar** es una plataforma web que conecta compradores con almacenes de moda locales de Bogotá. Los almacenes publican su inventario (fotos, tallas y disponibilidad) y el usuario puede buscar prendas, consultar tiendas cercanas en un mapa y probárselas virtualmente con IA. También permite publicar ropa usada para venderla o donarla a una fundación aliada.

StyleRadar no es un marketplace: es el puente entre la intención de compra digital y la tienda física.

### Problemática

| Problema | Descripción |
|---|---|
| No saber dónde comprar | El comprador no sabe en qué almacén de su ciudad está la prenda que busca, ni si hay disponible su talla. |
| Almacenes invisibles en línea | Los almacenes pequeños y locales no tienen presencia digital: sin pauta y sin app propia. |
| Compras sin probarse | Comprar en línea sin probarse genera devoluciones y compras por impulso. |
| Ropa usada sin canal | La ropa usada en buen estado se acumula sin un canal eficiente para venderla o donarla. |
| No existe un mapa de moda local | No hay un mapa que muestre qué estilos y prendas están disponibles hoy en la ciudad. |

### Actores

| Actor | Qué hace en StyleRadar |
|---|---|
| **Usuario comprador** | Busca prendas, usa el probador virtual, arma playlists de estilo y publica ropa usada para vender o donar. |
| **Almacén de moda** | Gestiona su catálogo, tallas, precios, disponibilidad, colecciones y suscripción. |
| **Fundación aliada** | Recibe solicitudes de donación de personas y tiendas, y coordina la recogida. |
| **Administrador** | Modera el catálogo, verifica almacenes, gestiona fundaciones, usuarios y pagos. |

### Idea diferenciadora: Playlists de estilo

Inspiradas en las listas de música, las playlists permiten crear y compartir colecciones de outfits (hasta 15 prendas) que combinan prendas de almacenes locales con ropa de segunda mano. Con el probador virtual, el usuario puede probarse el outfit completo sobre su propia foto.

---

## Logotipo

El isotipo es la **silueta de un vestido cuyo borde se abre en las ondas de un radar**. Une las dos ideas de la marca: la moda y la capacidad de encontrarla cerca. En pantalla se anima: el vestido aparece de abajo hacia arriba y las ondas se encienden como un pulso de radar.

<table>
  <tr>
    <td align="center" width="25%"><img src="assets/logo/styleradar-logo.svg" alt="Logotipo principal" height="120"><br><sub>Principal</sub></td>
    <td align="center" width="25%"><img src="assets/logo/styleradar-logo-negativo.svg" alt="Logotipo en negativo" height="120"><br><sub>Negativo</sub></td>
    <td align="center" width="25%"><img src="assets/logo/styleradar-isotipo.svg" alt="Isotipo" height="120"><br><sub>Isotipo</sub></td>
    <td align="center" width="25%"><img src="assets/logo/styleradar-isotipo-violeta.svg" alt="Isotipo sobre violeta" height="120"><br><sub>Isotipo sobre violeta</sub></td>
  </tr>
</table>

Los archivos vectoriales están en [`assets/logo/`](assets/logo).

---

## Manual de identidad

📄 **Documento completo:** [StyleRadar_Manual_de_Identidad.pdf](docs/StyleRadar_Manual_de_Identidad.pdf)

El manual incluye versiones del logotipo, área de protección, usos incorrectos, animación, color, combinaciones accesibles, tipografía, fotografía, componentes y voz de marca. Este es el resumen:

### Paleta de color

| Color | HEX | RGB | Uso |
|---|---|---|---|
| <img src="assets/color/violeta.png" width="18" height="18" alt=""> Violeta | `#48119A` | 72, 17, 154 | Innovación, creatividad y tecnología. Logotipo, botón principal y elementos activos. |
| <img src="assets/color/lavanda.png" width="18" height="18" alt=""> Lavanda | `#B9B9CA` | 185, 185, 202 | Color secundario y de apoyo. Texto de acento sobre fondos oscuros. |
| <img src="assets/color/arena.png" width="18" height="18" alt=""> Arena | `#E8DCCB` | 232, 220, 203 | Calidez y cercanía. Fondos de producto y paneles. |
| <img src="assets/color/blanco.png" width="18" height="18" alt=""> Blanco | `#FFFFFF` | 255, 255, 255 | Limpieza y minimalismo. Texto principal sobre grafito. |
| <img src="assets/color/grafito.png" width="18" height="18" alt=""> Grafito | `#262626` | 38, 38, 38 | Contraste y elegancia. Fondo principal de la interfaz. |

**Regla de accesibilidad:** el violeta nunca va como texto sobre grafito (contraste 1,31 : 1). Sobre fondos oscuros el acento de texto es la lavanda (7,82 : 1) y el violeta se usa como fondo de botones con texto blanco (11,52 : 1).

### Tipografía: Poppins

| Peso | Uso |
|---|---|
| Light 300 | Textos secundarios y elementos de apoyo |
| Regular 400 | Textos principales y descripciones |
| Medium 500 | Botones, etiquetas y elementos que necesitan mayor atención |
| Bold 700 | Títulos, subtítulos y conceptos importantes |
| Black 900 | Títulos principales y elementos de alto impacto visual |

---

## Mockups

🔗 **Mockups navegables:** https://claude.ai/artifact/RwtXRib117HtU4bDGYctgs

El prototipo es navegable y simula los flujos de los cuatro actores (no tiene backend). Para entrar, usa las **cuentas de prueba** del inicio de sesión. La contraseña de todas es `1234`:

| Rol | Correo |
|---|---|
| Usuario | `usuario@styleradar.co` |
| Tienda | `luna@styleradar.co` |
| Fundación | `abrigo@styleradar.co` |
| Administrador | `admin@styleradar.co` |

---

## Módulos

### 1. Acceso: inicio de sesión y registro
**Actores:** todos · **Requerimientos:** SR-RF-01, SR-RF-02, SR-RNF-01

Nada de la plataforma es accesible sin iniciar sesión. La entrada muestra fotos editoriales con un efecto de ondas de radar y un botón «Iniciar sesión». El login valida en tiempo real y explica cada error («Ese correo ya tiene una cuenta. ¿Quieres iniciar sesión?»). En «Crear cuenta» se elige el rol (usuario, tienda o fundación), y cada rol entra a su propia interfaz. El panel «¿Qué es StyleRadar?» presenta la plataforma.

| Entrada | Login | Crear cuenta | ¿Qué es StyleRadar? |
|---|---|---|---|
| ![Entrada con ondas](assets/mockups/01-entrada.jpg) | ![Inicio de sesión](assets/mockups/02-login.jpg) | ![Crear cuenta](assets/mockups/03-registro.jpg) | ![Qué es StyleRadar](assets/mockups/04-que-es.jpg) |

### 2. Inicio y descubrimiento
**Actor:** usuario · **Requerimientos:** SR-RF-44

La portada editorial cambia de foto y de color de acento al desplazarse. Reúne las secciones Categorías, Playlists (ordenadas por popularidad), Tiendas, Fundaciones, Probador y Segunda vida. Al bajar, la barra superior se desenfoca para no mezclarse con el contenido.

| Portada | Categorías | Tiendas en el radar | Fundaciones aliadas |
|---|---|---|---|
| ![Portada](assets/mockups/05-portada.jpg) | ![Categorías](assets/mockups/06-categorias.jpg) | ![Tiendas](assets/mockups/07-tiendas.jpg) | ![Fundaciones](assets/mockups/08-fundaciones.jpg) |

### 3. Catálogo: búsqueda y filtros
**Actor:** usuario · **Requerimientos:** SR-RF-05, 06, 07, 11, 12 · SR-RNF-04

Catálogo por categoría (Todas, Formal, Casual, Urbana, Alternativa) con buscador de texto libre y filtros de tipo, estilo, color, talla, marca y precio. Si no hay resultados, muestra un estado vacío con «Prendas similares». Las búsquedas se pueden guardar con alerta, y en prendas agotadas aparece el botón «Avisarme».

![Catálogo por categoría](assets/mockups/09-catalogo.jpg)

### 4. Mapa de moda local y tiendas
**Actor:** usuario · **Requerimientos:** SR-RF-08, SR-RF-09

El mapa muestra las tiendas verificadas y las fundaciones con filtros y «Cómo llegar». Cada tienda tiene su página con portada, datos, colecciones y catálogo con disponibilidad por talla.

| Mapa | Página de tienda |
|---|---|
| ![Mapa de moda local](assets/mockups/10-mapa.jpg) | ![Página de Luna Store](assets/mockups/11-tienda.jpg) |

### 5. Probador virtual
**Actor:** usuario · **Requerimientos:** SR-RF-10, SR-RF-37 · SR-RNF-05

El usuario viste un maniquí con prendas reales de las tiendas por pestañas (camisas, pantalones, chaquetas, abrigos, zapatos, accesorios, maletines) y ve el total del look. Con «Cargar foto» sube su foto, ve el progreso (menos de 30 s) y puede **eliminarla** cuando quiera.

![Probador virtual](assets/mockups/12-probador.jpg)

### 6. Playlists de estilo
**Actor:** usuario (y tienda, como colecciones) · **Requerimientos:** SR-RF-41, 42, 43 · SR-RNF-11, 12

La página de playlist está inspirada en las listas de música: portada, creador, lista de prendas con tienda, quién la agregó y precio. Tiene «Me gusta», «Guardar en mi perfil», mezclar y probar el look. Las prendas agotadas se marcan como «No disponible» sin romper la playlist, y el máximo es de 15 prendas.

![Playlist de estilo](assets/mockups/13-playlist.jpg)

### 7. Segunda vida: vender, donar y chat
**Actor:** usuario · **Requerimientos:** SR-RF-14 a 21

El formulario de publicación tiene cinco pasos cortos, fotos con arrastrar y soltar, vista previa en vivo y la opción Vender o Donar (con selección de fundación). En «Mis publicaciones» se puede editar, marcar como vendida o retirar. Comprador y vendedor coordinan la entrega por chat.

| Publicar una prenda | Mensajes |
|---|---|
| ![Publicar una prenda](assets/mockups/14-vender.jpg) | ![Chat](assets/mockups/15-mensajes.jpg) |

### 8. Perfil del usuario
**Actor:** usuario · **Requerimientos:** SR-RF-03, SR-RF-04

El perfil incluye información, tallas y estilos, privacidad, suscripción, publicaciones, playlists, búsquedas y alertas, y wishlist.

![Perfil del usuario](assets/mockups/16-perfil.jpg)

### 9. Panel de la tienda
**Actor:** almacén de moda · **Requerimientos:** SR-RF-22 a 27, 39, 40 · SR-RNF-06, 09

La tienda ve su propia página con herramientas de edición:
- Agregar prenda en **3 pasos** (fotos, datos y tallas), con revisión previa de StyleRadar.
- Editar y retirar prendas, y actualizar unidades por talla.
- Marcar «Nueva llegada» o «Últimas unidades».
- Crear colecciones.

En su cuenta tiene estadísticas y la suscripción, que puede activar o cancelar.

| Mi tienda | Suscripción |
|---|---|
| ![Panel de la tienda](assets/mockups/17-mi-tienda.jpg) | ![Suscripción de la tienda](assets/mockups/18-suscripcion.jpg) |

### 10. Panel de la fundación
**Actor:** fundación aliada · **Requerimientos:** SR-RF-28 a 31

La fundación edita su página pública (misión, qué recibe, necesidades y contacto). Tiene un catálogo solo de donaciones de personas y tiendas, donde puede:
- Aceptar o rechazar cada solicitud, con motivo.
- Coordinar la recogida (fecha, franja y dirección).
- Confirmar la recepción.

| Mi fundación | Donaciones |
|---|---|
| ![Página de la fundación](assets/mockups/19-mi-fundacion.jpg) | ![Donaciones](assets/mockups/20-donaciones.jpg) |

### 11. Administración
**Actor:** administrador StyleRadar · **Requerimientos:** SR-RF-32 a 36, 38

La interfaz propia tiene barra lateral e incluye:
- Estadísticas generales de la plataforma.
- Listas de usuarios, tiendas y fundaciones con búsqueda, filtros, orden y paginación.
- Detalle de cada registro con su estado y suscripción.
- Verificación de tiendas.
- Moderación de publicaciones.
- Historial de pagos de usuarios y tiendas.

| Estadísticas | Tiendas |
|---|---|
| ![Estadísticas](assets/mockups/21-admin-estadisticas.jpg) | ![Lista de tiendas](assets/mockups/22-admin-tiendas.jpg) |
| **Publicaciones** | **Pagos** |
| ![Moderación](assets/mockups/23-admin-publicaciones.jpg) | ![Pagos](assets/mockups/24-admin-pagos.jpg) |

### 12. Versión móvil
**Requerimiento:** SR-RNF-07

La plataforma funciona en móvil, tableta y computador sin desplazamiento horizontal. En móvil, el menú va arriba a la izquierda y la acción principal queda fija abajo, en la zona del pulgar.

<p>
<img src="assets/mockups/25-movil-portada.jpg" alt="Portada en móvil" width="220">
<img src="assets/mockups/26-movil-catalogo.jpg" alt="Catálogo en móvil" width="220">
</p>

---

## Criterios de UX aplicados

- **Estados de error:** cada formulario marca el campo con error y explica cómo corregirlo, en lenguaje simple.
- **Estados vacíos:** cada listado vacío tiene ícono, explicación y una acción sugerida.
- **Flujos por rol:** usuario, tienda, fundación y administrador tienen interfaces y navegación distintas.
- **Heurísticas de Nielsen:**
  - Visibilidad del estado del sistema: cargas, confirmaciones y opción de «Deshacer».
  - Control y libertad del usuario: confirmación antes de acciones irreversibles y botón «Cancelar» siempre a la izquierda.
  - Prevención y diagnóstico de errores.
  - Ayuda disponible: tooltips en campos complejos y preguntas frecuentes.
- **Leyes de UX:**
  - Fitts: la acción principal es grande y en móvil queda en la zona del pulgar.
  - Hick y Miller: menús de 7 ítems o menos y formularios divididos en pasos.
  - Jakob: el menú va arriba a la izquierda y el perfil arriba a la derecha.
  - Gestalt: label junto al campo y precio junto al nombre.
- **Accesibilidad WCAG 2.1 AA:** contraste verificado, navegación por teclado y textos alternativos.

---

<div align="center">
<img src="assets/logo/styleradar-isotipo.svg" alt="" height="48"><br>
<sub>StyleRadar · Equipo DOSW · Bogotá, 2026</sub>
</div>
