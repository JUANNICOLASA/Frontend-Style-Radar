<div align="center">

<img src="assets/logo/styleradar-logo.svg" alt="Logotipo de StyleRadar: un vestido que termina en las ondas de un radar" width="300">

# StyleRadar · Frontend

**Descubre tu estilo. En tu ciudad.**

El buscador de moda local con probador virtual.

[**Ver el prototipo v3 →**](prototipo/index.html) · [Manual de identidad v3](docs/StyleRadar_Manual_de_Identidad.html) · [Informe de cambios v3](docs/StyleRadar_Informe_de_cambios_v3.docx) · [Presentación Sprint 2](docs/StyleRadar_Presentacion.pdf)

</div>

---

> **Estado:** Sprint 2 cerrado con el **prototipo navegable v3**. Cumple los 72 requerimientos funcionales del análisis, propone 5 nuevos (SR-RF-73 a 77) y responde las dos rondas de revisión de mockups. El prototipo es solo frontend: no tiene backend y guarda los datos de prueba en el navegador.

## Tabla de contenido

1. [Participantes](#participantes)
2. [Contexto del proyecto](#contexto-del-proyecto)
3. [Estructura del repositorio](#estructura-del-repositorio)
4. [Cómo ver el prototipo](#cómo-ver-el-prototipo)
5. [Historial de sprints](#historial-de-sprints)
6. [Versión 3: cambios y respuesta a la revisión](#versión-3-cambios-y-respuesta-a-la-revisión)
7. [Requerimientos](#requerimientos)
8. [Sprint 2: checklist de frontend y flujos por rol](#sprint-2-checklist-de-frontend-y-flujos-por-rol)
9. [Logotipo](#logotipo)
10. [Manual de identidad](#manual-de-identidad)
11. [Módulos](#módulos)
12. [Criterios de UX aplicados](#criterios-de-ux-aplicados)

---

## Participantes

| Integrante |
|---|
| Juan Nicolás Álvarez |
| Camilo Ortiz |
| Daniel Valero |
| Juan Diego Valder |
| Paula Alejandra Diazrama |

Curso: **Desarrollo y Operaciones de Software (DOSW)** · Escuela Colombiana de Ingeniería Julio Garavito · 2026

---

## Contexto del proyecto

**StyleRadar** es una plataforma web que conecta compradores con almacenes de moda locales de Bogotá. Los almacenes publican su inventario (fotos, tallas y disponibilidad) y el usuario puede buscar prendas, consultar tiendas cercanas en un mapa y probárselas virtualmente. También permite publicar ropa usada para venderla o donarla a una fundación aliada.

StyleRadar no es un marketplace: es el puente entre la intención de compra digital y la tienda física.

### Problemática

| Problema | Descripción |
|---|---|
| Disponibilidad incierta | El comprador no sabe en qué almacén de su ciudad está la prenda que busca, ni si hay disponible su talla. |
| Comercio local invisible | Los almacenes pequeños y locales no siempre tienen pauta, app o presencia digital propia. |
| Comprar sin probar | Comprar en línea sin probarse aumenta las devoluciones y las compras por impulso. |
| Ropa usada sin circuito | La ropa en buen estado se acumula sin un canal eficiente para venderla o donarla. |
| Sin mapa de moda local | No hay un mapa que muestre qué estilos y prendas están disponibles hoy en la ciudad. |

### Actores

| Actor | Qué hace en StyleRadar |
|---|---|
| **Usuario comprador** | Busca prendas, usa el probador virtual, arma playlists de estilo y publica ropa usada para vender o donar. |
| **Almacén de moda** | Gestiona su catálogo, tallas, precios, disponibilidad, colecciones, fotos del local y suscripción. |
| **Fundación aliada** | Recibe solicitudes de donación con punto y franja propuestos, y acepta, rechaza o confirma la recepción. |
| **Administrador** | Modera publicaciones, verifica tiendas, gestiona fundaciones, usuarios y pagos, y consulta estadísticas. |

### Idea diferenciadora: Playlists de estilo

Inspiradas en las listas de música, las playlists permiten crear y compartir colecciones de outfits (hasta 15 prendas) que combinan prendas de almacenes locales con ropa de segunda mano. Con el probador virtual, el usuario puede ver el look sobre un maniquí o sobre su propia foto.

---

## Estructura del repositorio

```
styleradar-frontend/
├── prototipo/
│   └── index.html                      Prototipo navegable v3 (un solo archivo, funciona sin internet)
├── docs/
│   ├── StyleRadar_Manual_de_Identidad.html   Manual de identidad v3
│   ├── StyleRadar_Informe_de_cambios_v3.docx Informe de cambios y respuesta a la revisión (parte 2)
│   ├── StyleRadar_Presentacion.pdf           Presentación del Sprint 2
│   └── historico/
│       └── StyleRadar_Manual_de_Identidad_v1.pdf
├── assets/
│   ├── logo/              Logotipo e isotipo en SVG
│   ├── color/             Muestras de la paleta
│   ├── mockups/           Capturas del prototipo v3 (las que usa este README)
│   └── mockups-sprint1/   Capturas de los mockups del Sprint 1
└── README.md
```

---

## Cómo ver el prototipo

Abrir [`prototipo/index.html`](prototipo/index.html) en Chrome, Edge o Firefox. Todo el código, las fotos y los estilos están dentro de ese archivo, así que funciona sin conexión.

El prototipo simula los flujos de los cuatro actores. Para entrar, usa las **cuentas de prueba** del inicio de sesión. La contraseña de todas es `1234`:

| Rol | Correo |
|---|---|
| Usuario | `usuario@styleradar.co` |
| Tienda | `luna@styleradar.co` |
| Fundación | `abrigo@styleradar.co` |
| Administrador | `admin@styleradar.co` (código de invitación para registrarse: `SR-ADMIN-2026`) |

---

## Historial de sprints

| Sprint | Entrega | Qué incluye |
|---|---|---|
| Sprint 1 | Mockups v1 | Identidad inicial, presentación, 12 módulos navegables para los cuatro actores y criterios de UX ([capturas](assets/mockups-sprint1)) |
| Sprint 2 | Prototipo v2 | Respuesta a la revisión de mockups (parte 1) |
| Sprint 2 | Prototipo v3 | Respuesta a la revisión (parte 2), análisis de requerimientos, manual de identidad v3 dentro de la plataforma, ajustes finales y [presentación del sprint](docs/StyleRadar_Presentacion.pdf) |

### Sprint 1 · Mockups v1

- Prototipo navegable con interfaces separadas para usuario, tienda, fundación y administrador.
- 12 módulos: acceso, inicio, catálogo, mapa y tiendas, probador virtual, playlists, segunda vida, perfil, panel de tienda, panel de fundación, administración y versión móvil.
- Estados de error y estados vacíos en cada formulario y listado.
- Manual de identidad v1 ([PDF](docs/historico/StyleRadar_Manual_de_Identidad_v1.pdf)).

### Sprint 2 · Prototipo v2 (revisión de mockups, parte 1)

- **Barra superior** horizontal en vidrio, con buen contraste y **Crear cuenta** visible para invitados.
- **Portada** sin palabras sueltas ni textos de relleno, con el logo con más peso y un solo color de acento que ya no cambia al desplazarse.
- **Categorías** en una cuadrícula de 3 × 2 que no atrapa el scroll; **playlists** en un carrusel horizontal.
- **Tiendas** con foto de la fachada y datos del local; **fundaciones** con foto real y a quién ayudan.
- **Probador** en el inicio como vitrina estática; en la vista del probador, maniquí de mujer u hombre y **foto de ejemplo**.
- **Segunda vida** con foto real, texto grande y acciones claras.
- **Registro** con cuatro roles (el administrador entra con código de invitación) y selección visible con ✓, sin depender solo del color.
- **Tienda física:** la tienda sube fotos de su local (SR-RF-75) y el usuario le escribe por chat (SR-RF-74) en lugar de llamar.
- **Asistente para agregar prenda** con los atributos de búsqueda agrupados (color, marca, estilo, material, palabras clave).
- Pie de página con enlaces que sí llevan a una sección.

### Sprint 2 · Prototipo v3 (revisión, parte 2)

La v3 aplica **46 cambios** pedidos en la revisión y justifica **19 comentarios** en los que mantener el diseño sirve mejor a los requerimientos o al modelo de negocio. El detalle completo, con capturas, está en el [informe de cambios v3](docs/StyleRadar_Informe_de_cambios_v3.docx). La sección siguiente lo resume.

---

## Versión 3: cambios y respuesta a la revisión

Lo más importante de la v3:

1. **Navegación sin callejones:** todas las pantallas internas tienen un botón **← Volver** junto a la ruta.
2. **Consistencia visual:** todos los menús desplegables usan vidrio con ✓ en la opción elegida, todos los botones tienen las mismas esquinas (12 px) y los iconos son blancos.
3. **Funciones donde se buscan:** el mapa con catálogo resumido y los vendedores de segunda mano pasan al inicio; recomendaciones y feed al perfil; prendas similares a la ficha de cada prenda.
4. **Donación según SR-RF-48:** quien dona propone el punto y la franja; la fundación solo acepta, rechaza y confirma la recepción.
5. **Manual de identidad dentro de la plataforma:** logo en 3 versiones, paleta con justificación y tipografía por tamaños (pie de página → *Manual de identidad*).
6. **Ajustes finales:** fondo de foto difuminada en todas las pantallas internas, fotos reales en todo el catálogo, mapa real de Bogotá con cada lugar en su barrio y transiciones suaves en tiendas y fundaciones.

<details>
<summary><b>Cambios aplicados por pantalla (38)</b></summary>

| Pantalla | Comentario de la revisión | Cambio aplicado |
|---|---|---|
| Todas | No hay botón para devolverse | Botón **← Volver** en todas las pantallas internas de usuario, tienda y fundación (el administrador ya tenía menú lateral y «Volver a…» en cada detalle) |
| Todas | Botones redondeados y cuadrados mezclados | Todos los botones con esquinas de 12 px; chips y filtros en píldora |
| Todas | Menús desplegables sin el estilo de la página | Menús desplegables de vidrio: fondo carbón translúcido con desenfoque, ✓ en la opción elegida y manejo con teclado |
| Portada | El logo queda inmóvil al bajar | El símbolo y el lema se desvanecen con el scroll |
| Cómo funciona | Los iconos no se ven | Iconos en blanco sobre fondo violeta |
| Planes | «Para siempre» y «Todo lo de Radar» | Gratis e Incluye el plan Radar |
| Fundaciones | Texto | La ropa que ya no usas podría servir a alguien más |
| Probador (inicio) | Texto | Los dos textos propuestos, tal cual |
| Inicio | La guía de funciones sobra; cada función en su sección | Se quitó la guía y cada función quedó en su lugar |
| Inicio | El catálogo resumido en el mapa merece más relevancia | Nueva sección **El radar en el mapa**: al tocar una tienda se ven sus 4 prendas destacadas sin salir del mapa |
| Tiendas (inicio) | Filtrar tiendas por categoría | Chips Todas, Casual, Formal, Deportiva, Vintage y Accesorios |
| Segunda vida | Vendedores con perfil público | Bloque **Vendedores de la comunidad** y página de cada vendedor con sus prendas |
| Segunda vida | Imagen genérica | Foto nueva de la caja con la cinta |
| Pie de página | Guía de funciones → lo relevante | El enlace ahora es **Cómo funciona**: paso a paso de playlists, probador y segunda vida |
| Inicio de sesión | La foto parece de una tienda específica | Foto nueva de moda, en la línea de la portada |
| Inicio de sesión | «Mostrar» se monta sobre la contraseña | El texto de la contraseña deja espacio al botón |
| Perfil | El feed personalizado se activa en el perfil | Nueva sección **Recomendaciones** con el interruptor del feed |
| Perfil | Recomendaciones por preferencias | En la misma sección, las prendas recomendadas |
| Perfil | Búsquedas guardadas difíciles de encontrar | **Mis búsquedas y alertas** en el menú de la cuenta y lupa en Buscar |
| Catálogo | La descripción sobra | Eliminada |
| Catálogo | Ordenar por más recientes y recomendados | Recomendados, Más recientes, Más cerca, Mejor calificadas, Precio ↑, Precio ↓ |
| Catálogo | Aviso de prendas agotadas | Eliminado |
| Prenda | Similares debajo de cada prenda | **Puede que también te guste** con 4 prendas parecidas |
| Categorías y colecciones | Audífonos, relojes, aretes y collares no son prendas | Salen de las categorías y colecciones; siguen en las playlists de estilo |
| Mensajes | Compro / Vendo se ve mal | Filtros: Usuarios, Tiendas, Fundaciones |
| Menú de la cuenta | Quitar guía de funciones; apropiación | Mis playlists, Mis publicaciones, Mis búsquedas y alertas, Mi wishlist; tienda: Mi suscripción; fundación: Mis donaciones |
| Tienda | Mensajes con icono en la barra | Icono de mensajes con contador de chats sin responder |
| Tienda | Quitar «13 publicadas»; no información interna | Solo verificación y suscripción; **Información de la tienda** |
| Tienda | Quitar prendas apartadas | Las estadísticas muestran mensajes de clientes |
| Tienda | Quitar historial de pagos | Eliminado de la suscripción |
| Tienda | Bloques negros sobran y fotos cortadas | Etiquetas vacías ocultas; prendas completas, sin recorte |
| Fundación | Quitar cifras (prendas, familias, años) | Eliminadas de la página pública |
| Fundación | Quitar contadores de donaciones | Eliminados |
| Fundación | Sin mensajes; solo aceptar, rechazar y confirmar | La solicitud llega con punto y franja; la fundación acepta, rechaza y confirma recepción |
| Usuario (donar) | El punto de recogida lo pone quien dona | Al donar se elige cómo, día, franja y punto de entrega |
| Administrador | Botones de editar y sin casillas | Botón **Editar** en cada fila, sin casillas |
| Administrador | Quitar transacciones del usuario | Eliminadas del detalle del usuario |
| Administrador | Quitar Invitar | Eliminado; queda **Exportar a Excel** |

</details>

### Ajustes finales de la v3

| Pantalla | Comentario | Cambio aplicado |
|---|---|---|
| Todas las pantallas internas | Fondo de configuraciones y demás vistas (tres propuestas) | Fondo de foto difuminada clara en cuenta, catálogo, mensajes, probador, administrador, tienda y fundación; el texto blanco mantiene un contraste mínimo de 4,7 : 1 |
| Catálogo y fichas | Prendas sin foto y fotos borrosas | Fotos nuevas en 56 prendas: 45 sin foto propia o borrosas y 11 mal recortadas |
| Catálogo y fichas | Imágenes mal cortadas y con bordes blancos | Cada foto llena la tarjeta con el recorte centrado en la prenda; la etiqueta «Nueva llegada» se lee bien |
| Probador (inicio) | El maniquí tiene los pies rotos | Zapatos Oxford completos, reconstruidos desde la foto original, con sombra en el piso |
| Mapa (inicio y Mapa) | Usar el mapa real de Bogotá | Mapa de calles de Bogotá (© OpenStreetMap) en tema oscuro; cada tienda y fundación en el barrio de su página, sin pines superpuestos; distancias desde «Estoy en» |
| Mi cuenta | Textos del menú lateral se salen del marco | Cada opción cabe en una línea dentro del marco |
| Iniciar sesión y Crear cuenta | El formulario se sale de la imagen | El panel nunca supera el alto de la foto; si no cabe, se desplaza por dentro |
| Tienda y fundación | Transición brusca entre la foto y el contenido | La foto se disuelve en el fondo con un degradado; los datos siguen legibles sobre un velo oscuro |

| Mapa real de Bogotá | Página de tienda |
|---|---|
| ![Mapa de Bogotá con tiendas por barrio](assets/mockups/07-mapa-inicio.jpg) | ![Luna Store con la foto que se disuelve en el fondo](assets/mockups/12-tienda.jpg) |

### Decisiones que se mantienen

Estos comentarios no se aplicaron porque el diseño actual responde a un requerimiento, al modelo de negocio o a la tarea de un rol. La justificación completa está en el informe.

- **Usuario:** suscripción con los dos planes lado a lado (para decidir si paga, la persona necesita comparar); menú del celular con todas las secciones (es la única navegación en pantallas de menos de 1040 px); barra con campana, Buscar con lupa y el botón Usuario con texto; Wishlist, Mi información y Privacidad como secciones separadas.
- **Accesorios:** salen de las categorías y colecciones, pero siguen en las playlists de estilo, porque un look no está completo sin ellos.
- **Tienda:** las estadísticas se mantienen (sin apartados), porque son el argumento para pagar la suscripción; la tienda puede publicar accesorios (SR-RF-18 y 54); se mantienen los dos menús, porque el negro es la única navegación en celular.
- **Fundación:** cuenta con Información, Estadísticas y Estado de la cuenta; menú con Mensajes (para cambios en una entrega ya aceptada, SR-RF-48) y Estadísticas.
- **Administrador:** registros encontrados y columna Donaciones; destacar playlists por me gusta y guardados; estadísticas generales (SR-RF-73); sección de pagos (SR-RF-76); Exportar a Excel (SR-RF-77); categorías en Publicaciones; columna Prendas en Tiendas.
- **Probador:** probar el look exacto de una playlist sobre el maniquí y el ajuste perfecto sobre la foto requieren un modelo de IA de *virtual try-on*; el prototipo muestra la etiqueta *Visualización aproximada*, como pide SR-RF-25.

---

## Requerimientos

Los **72 requerimientos funcionales** del análisis son visibles en la v3. El informe incluye una tabla con cómo ver cada uno en el prototipo. Se proponen 5 nuevos porque la plataforma ya tiene esas funciones sin requerimiento que las respalde, y se ajustan los criterios de SR-RF-48:

| Código | Cambio | Motivo |
|---|---|---|
| SR-RF-48 | Quien dona propone modo de entrega, día, franja y punto al enviar la solicitud; la fundación acepta o rechaza la propuesta completa. Si falta la franja o el punto, el formulario no se envía y marca el campo | La coordinación va en la solicitud, no en un paso aparte |
| SR-RF-73 (nuevo) | Consultar estadísticas generales de la plataforma · Administrador | El administrador necesita ver la salud de la plataforma |
| SR-RF-74 (nuevo) | Contactar a un almacén por chat · Usuario y almacén | Reemplaza «Llamar», pedido en la revisión 1 |
| SR-RF-75 (nuevo) | Registrar fotografías de la tienda física (hasta 6; la primera es la portada) · Almacén | Pedido en la revisión 1 |
| SR-RF-76 (nuevo) | Consultar pagos de suscripciones (aprobado, rechazado, pendiente o reembolsado) · Administrador | Soporta SR-RF-67 y 68 |
| SR-RF-77 (nuevo) | Exportar listados a Excel (usuarios, tiendas y pagos con los filtros aplicados) · Administrador | Reportes y conciliación |

### Funciones que la revisión no encontraba

| Función | Cómo llegar |
|---|---|
| Ordenar por distancia (SR-RF-14) | Barra → **Buscar** → Ordenar → **Más cerca de…** (el barrio se cambia en «Cerca de») |
| Ordenar por reputación (SR-RF-15) | Barra → **Buscar** → Ordenar → **Mejor calificadas** |
| Prendas similares (SR-RF-16) | Búsqueda sin resultados → **Prendas similares**; en cualquier prenda → **Puede que también te guste** |
| Atributos de búsqueda (SR-RF-54) | Tienda → Mi tienda → **Agregar prenda** → paso 2 · Atributos de búsqueda |
| Feed personalizado y recomendaciones (SR-RF-05, 06) | Usuario → **Mi cuenta → Recomendaciones** |
| Búsqueda guardada con alerta (SR-RF-28, 29, 32) | Catálogo → **Guardar búsqueda**; se ve en **Mis búsquedas y alertas** |
| Notificación de coincidencia (SR-RF-30, 31) | Campana de la barra → Nueva prenda para tu búsqueda |
| Filtrar almacenes por categoría (SR-RF-18) | Inicio → **Tiendas en el radar** → chips |
| Catálogo resumido desde el mapa (SR-RF-19) | Inicio → **El radar en el mapa** → tocar una tienda |
| Novedades semanales (SR-RF-20) | Página de cada tienda → Novedades de la semana |
| Prendas de otros usuarios (SR-RF-36) | Inicio → Segunda vida → **Vendedores de la comunidad** |
| Chat con vendedor (SR-RF-40, 41) | Prenda de segunda mano → **Escribir al vendedor** → Mensajes |
| Fotos de la tienda física (SR-RF-75) | Tienda → Mi tienda → **Fotos de la tienda** |

---

## Sprint 2: checklist de frontend y flujos por rol

| Punto del sprint | Estado en la v3 | Dónde se ve |
|---|---|---|
| El prototipo cumple el análisis de requerimientos | Cumple: 72 de 72 RF visibles, más 5 propuestos (RF-73 a 77) | Sección [Requerimientos](#requerimientos) |
| Manual de identidad: logo en 3 versiones, paleta con justificación UX, tipografía por tamaño | Cumple | [Manual de identidad](docs/StyleRadar_Manual_de_Identidad.html) y, en la plataforma, pie de página → **Manual de identidad** |
| Un flujo funcional por cada actor | Cumple | Tabla de flujos por rol |
| Happy path y flujo de error en cada pantalla | Cumple: los formularios validan con mensaje en rojo bajo el campo y aviso general | Registro, inicio de sesión, publicar, donar, agregar prenda, editar fundación |
| Responsive en móvil y desktop | Cumple: probado a 390 px y 1440 px sin scroll horizontal | Menú ☰ en celular, tarjetas en una columna |

| Actor | Happy path | Flujo de error |
|---|---|---|
| Invitado | Inicio → Categorías / Tiendas / Mapa → ver prenda → **Crear cuenta** | Toca ♥, Probador o Donar → aviso «Inicia sesión para…» y se abre el inicio de sesión |
| Usuario comprador | Buscar → filtrar → prenda → Preguntar a la tienda o Pruébatela → guardar en playlist o wishlist | Búsqueda sin resultados → prendas similares y «Avisarme cuando llegue»; foto no válida → mensaje y «Usar foto de ejemplo» |
| Usuario vendedor o donante | Segunda vida → Publicar → Vender o Donar (punto y franja) → Mis publicaciones | Sin foto, sin estado, precio menor a $5.000 o sin franja → campo marcado y «Revisa los campos marcados en rojo» |
| Administrador de almacén | Mi tienda → Agregar prenda (3 pasos) → en revisión → publicada → Estadísticas y Mensajes | Sin foto, sin atributos o con 0 unidades → no avanza de paso y marca el error |
| Representante de fundación | Donaciones → Aceptar → Confirmar recepción | Rechazar sin motivo → «Elige un motivo»; fundación inactiva → no puede iniciar sesión |
| Administrador StyleRadar | Estadísticas → Publicaciones (aprobar) → Tiendas (verificar) → Playlists (destacar) | NIT inválido o repetido al registrar fundación; rechazar sin motivo; más de 3 playlists destacadas |

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

📄 **Manual de identidad v3:** [StyleRadar_Manual_de_Identidad.html](docs/StyleRadar_Manual_de_Identidad.html). Descárgalo y ábrelo en el navegador; es una presentación de 10 diapositivas. La versión del Sprint 1 está en [`docs/historico/`](docs/historico).

El manual cubre el problema y los tres públicos, el logo en modo claro y oscuro, la paleta, la tipografía, las combinaciones accesibles, los botones, títulos e iconos, la mascota, las funcionalidades clave y las aplicaciones en computador y celular. Este es el resumen:

### Paleta de color · regla 60 · 30 · 10

60 % colores neutros (grafito y blanco estructuran), 30 % secundarios (lavanda y arena aportan calma y cercanía) y 10 % primario (el violeta concentra la identidad de marca).

| Color | HEX | RGB | Uso |
|---|---|---|---|
| <img src="assets/color/grafito.png" width="18" height="18" alt=""> Grafito | `#262626` | 38, 38, 38 | Contraste y elegancia. Fondo de la interfaz. |
| <img src="assets/color/blanco.png" width="18" height="18" alt=""> Blanco | `#FFFFFF` | 255, 255, 255 | Superficies claras y texto sobre grafito. |
| <img src="assets/color/arena.png" width="18" height="18" alt=""> Arena | `#E8DCCB` | 232, 220, 203 | Calidez y cercanía: fondos de producto y paneles. |
| <img src="assets/color/lavanda.png" width="18" height="18" alt=""> Lavanda | `#B9B9CA` | 185, 185, 202 | Acento de texto sobre oscuro, estados y paneles. |
| <img src="assets/color/violeta.png" width="18" height="18" alt=""> Violeta | `#48119A` | 72, 17, 154 | Color de marca: logotipo, botón principal y elementos activos. |

**Combinaciones accesibles:** blanco sobre grafito 15,13 : 1 · lavanda sobre grafito 7,82 : 1 · blanco sobre violeta 11,52 : 1 · arena sobre violeta 8,52 : 1 · violeta sobre blanco 11,5 : 1. El violeta nunca va como texto sobre grafito.

### Tipografía: Poppins

Una sola familia: geométrica, amable y legible. Sus formas limpias reducen la saturación visual y favorecen la lectura para personas con dislexia, TDAH o condiciones del espectro autista.

| Nivel | Peso y tamaño | Ejemplo |
|---|---|---|
| Título 1 | Black 72 | Hola, Valentina |
| Título 2 | Bold 44 | Tiendas en el radar |
| Título 3 | SemiBold 24 | Chaqueta biker de cuero |
| Texto | Regular 16 | Descripciones y párrafos |
| Etiqueta | Medium 11 | Nueva llegada · Luna Store |
| Apoyo | Light 13 | Textos de ayuda |

### Botones e iconos

- **Principal:** violeta con texto blanco · **Secundario:** borde redondeado · **Terciario:** texto de apoyo con flecha.
- **Iconos:** línea de 1,6 px con esquinas redondeadas, en versión clara y oscura.

### Mascota: Kai

Kai es un camaleón moderno y versátil que cambia con tu estilo: representa la diversidad de la moda en la ciudad. Es curioso, elegante, cercano y versátil, y tiene expresiones para cada momento (look guardado, tienda cercana, nueva llegada, prenda favorita).

---

## Módulos

Capturas del prototipo v3 a 1440 × 900 px. Para ver qué requerimiento cubre cada pantalla, consulta la tabla «Cómo ver cada requerimiento» del [informe de cambios](docs/StyleRadar_Informe_de_cambios_v3.docx). Las de los mockups del Sprint 1 están en [`assets/mockups-sprint1/`](assets/mockups-sprint1).

### 1. Acceso: inicio de sesión y registro
**Actores:** todos

La portada muestra el logo animado. Iniciar sesión y Crear cuenta se abren sobre una foto de moda; el registro pide el rol (usuario, tienda, fundación o administrador con código) y valida cada campo con un mensaje que explica cómo corregirlo.

| Portada | Iniciar sesión | Crear cuenta |
|---|---|---|
| ![Portada](assets/mockups/01-portada.jpg) | ![Inicio de sesión](assets/mockups/02-login.jpg) | ![Crear cuenta](assets/mockups/03-registro.jpg) |

### 2. Inicio y descubrimiento
**Actor:** usuario e invitado

Secciones de Categorías, Playlists, Tiendas en el radar (con filtro por categoría), El radar en el mapa (catálogo resumido de cada tienda), Fundaciones y Segunda vida (con vendedores de la comunidad).

| Categorías | Tiendas en el radar |
|---|---|
| ![Categorías](assets/mockups/05-categorias.jpg) | ![Tiendas](assets/mockups/06-tiendas.jpg) |
| **Fundaciones aliadas** | **Segunda vida** |
| ![Fundaciones](assets/mockups/08-fundaciones.jpg) | ![Segunda vida](assets/mockups/09-segunda-vida.jpg) |

### 3. Catálogo: búsqueda y filtros
**Actor:** usuario

Buscador de texto libre con filtros de tipo, estilo, color, talla, marca y precio, y orden por Recomendados, Más recientes, Más cerca, Mejor calificadas y precio. Cada prenda tiene foto real y, en su ficha, prendas similares.

![Catálogo](assets/mockups/10-catalogo.jpg)

### 4. Mapa de moda local y tiendas
**Actor:** usuario

Mapa real de Bogotá con las tiendas y fundaciones en su barrio, filtros y distancia desde el barrio elegido en «Estoy en». Cada tienda tiene su página con la foto del local, datos, novedades de la semana, colecciones y catálogo.

| Mapa | Página de tienda |
|---|---|
| ![Mapa de moda local](assets/mockups/11-mapa.jpg) | ![Luna Store](assets/mockups/12-tienda.jpg) |

### 5. Probador virtual
**Actor:** usuario

Maniquí de mujer u hombre con prendas reales de las tiendas por pestañas y el total del look. Con «Cargar foto» o «Usar foto de ejemplo» se ve una visualización aproximada; la foto se puede eliminar cuando quiera.

![Probador virtual](assets/mockups/14-probador.jpg)

### 6. Playlists de estilo
**Actor:** usuario (y tienda, como colecciones)

Portada, creador, prendas con tienda y precio, «Me gusta», guardar, mezclar y probar el look. Máximo 15 prendas; las agotadas se marcan como «No disponible» sin romper la playlist.

![Playlist de estilo](assets/mockups/15-playlist.jpg)

### 7. Segunda vida: vender, donar y chat
**Actor:** usuario

Publicación con fotos y vista previa en vivo, Vender o Donar (con modo de entrega, día, franja y punto) y chat con filtros Usuarios, Tiendas y Fundaciones.

| Publicar una prenda | Mensajes |
|---|---|
| ![Publicar](assets/mockups/16-vender.jpg) | ![Mensajes](assets/mockups/17-mensajes.jpg) |

### 8. Perfil del usuario
**Actor:** usuario

Mi actividad (publicaciones, playlists, búsquedas y alertas, wishlist, recomendaciones) y Mi cuenta (información, privacidad, suscripción).

![Perfil](assets/mockups/18-perfil.jpg)

### 9. Panel de la tienda
**Actor:** almacén de moda

La tienda ve su página con herramientas de edición: agregar prenda en 3 pasos, editar y retirar, unidades por talla, colecciones y fotos del local. En su cuenta tiene estadísticas (visitas, guardados y mensajes de clientes) y la suscripción.

| Mi tienda | Estadísticas | Suscripción |
|---|---|---|
| ![Mi tienda](assets/mockups/21-mi-tienda.jpg) | ![Estadísticas](assets/mockups/22-tienda-estadisticas.jpg) | ![Suscripción](assets/mockups/23-tienda-suscripcion.jpg) |

### 10. Panel de la fundación
**Actor:** fundación aliada

La fundación edita su página pública (misión, a quién ayuda, qué recibe y contacto). Las solicitudes de donación llegan con punto y franja; la fundación acepta, rechaza con motivo y confirma la recepción.

| Mi fundación | Donaciones |
|---|---|
| ![Mi fundación](assets/mockups/24-mi-fundacion.jpg) | ![Donaciones](assets/mockups/25-donaciones.jpg) |

### 11. Administración
**Actor:** administrador StyleRadar

Barra lateral con estadísticas generales, usuarios, tiendas (verificación), fundaciones, publicaciones (moderación) y pagos. Cada fila tiene botón **Editar** y los listados se exportan a Excel.

| Estadísticas | Tiendas |
|---|---|
| ![Estadísticas](assets/mockups/26-admin-resumen.jpg) | ![Tiendas](assets/mockups/27-admin-tiendas.jpg) |
| **Publicaciones** | **Fundaciones** |
| ![Publicaciones](assets/mockups/28-admin-publicaciones.jpg) | ![Fundaciones](assets/mockups/29-admin-fundaciones.jpg) |

### 12. Cómo funciona y manual de identidad en la plataforma

El pie de página lleva a **Cómo funciona** (paso a paso de playlists, probador y segunda vida) y al **Manual de identidad** dentro de la plataforma.

| Cómo funciona | Manual de identidad |
|---|---|
| ![Cómo funciona](assets/mockups/19-como-funciona.jpg) | ![Manual en la plataforma](assets/mockups/20-manual-en-plataforma.jpg) |

### 13. Versión móvil
Funciona en celular, tableta y computador sin desplazamiento horizontal. En celular las secciones se abren desde el menú ☰ y las tarjetas van en una columna.

<p>
<img src="assets/mockups/30-movil-portada.jpg" alt="Portada en celular" width="220">
<img src="assets/mockups/31-movil-catalogo.jpg" alt="Catálogo en celular" width="220">
</p>

---

## Criterios de UX aplicados

- **Estados de error:** cada formulario marca el campo con error en rojo y explica cómo corregirlo, en lenguaje simple.
- **Estados vacíos:** cada listado vacío tiene ícono, explicación y una acción sugerida.
- **Flujos por rol:** usuario, tienda, fundación y administrador tienen interfaces y navegación distintas.
- **Consistencia:** botones con esquinas de 12 px, menús desplegables de vidrio con ✓, iconos de línea de 1,6 px y botón ← Volver en cada pantalla interna.
- **Heurísticas de Nielsen:**
  - Visibilidad del estado del sistema: cargas, confirmaciones y opción de «Deshacer».
  - Control y libertad del usuario: botón Volver, confirmación antes de acciones irreversibles y «Cancelar» siempre a la izquierda.
  - Reconocer antes que recordar: iconos con texto en la barra.
  - Prevención y diagnóstico de errores.
  - Ayuda disponible: tooltips en campos complejos, Cómo funciona y preguntas frecuentes.
- **Leyes de UX:**
  - Fitts: la acción principal es grande y en celular queda en la zona del pulgar.
  - Hick y Miller: menús cortos y formularios divididos en pasos.
  - Jakob: el menú va arriba a la izquierda y el perfil arriba a la derecha, como en otras tiendas en línea.
  - Gestalt: label junto al campo y precio junto al nombre.
- **Accesibilidad WCAG 2.1 AA:** contraste verificado (mínimo 4,7 : 1 sobre el fondo de foto), navegación por teclado, selección marcada con ✓ y textos alternativos.

---

<div align="center">
<img src="assets/logo/styleradar-isotipo.svg" alt="" height="48"><br>
<sub>StyleRadar · Equipo DOSW · Bogotá, 2026</sub>
</div>
