<div align="center">

<img src="assets/logo/styleradar-logo.svg" alt="Logotipo de StyleRadar: un vestido que termina en las ondas de un radar" width="300">

# StyleRadar · Frontend

**Descubre tu estilo. En tu ciudad.**

El buscador de moda local con probador virtual.

[**Ver el prototipo final →**](prototipo/StyleRadar_prototipo/index.html) · [Manual de identidad](docs/StyleRadar_Manual_de_Identidadv2.html) · [Informe de cambios v3](docs/StyleRadar_Informe_de_cambios_v3.docx) · [Presentación Sprint 2](docs/StyleRadar_Presentacion.pdf)

</div>

---

> **Estado actual:** el prototipo final está integrado en `main` mediante el [PR #2](https://github.com/JUANNICOLASA/Frontend-Style-Radar/pull/2), merge `53def7934646c38fcf99d3af65318fa2614e77f2`; origen técnico `f72f71d`. Esta entrega incorpora arquitectura **v2.0**, conserva v1.1 y distingue la simulación HTML/CSS/JavaScript de React e integración Spring Boot futuros. Las 95 comprobaciones solo validan el router local, no los 75 RF ni permisos de servidor. Véase la [validación v2](docs/sprints/validacion-documental-sprint4-v2.md).

## Tabla de contenido

1. [Participantes](#participantes)
2. [Contexto del proyecto](#contexto-del-proyecto)
3. [Estructura del repositorio](#estructura-del-repositorio)
4. [Cómo ver el prototipo](#cómo-ver-el-prototipo)
5. [Historial de sprints](#historial-de-sprints)
6. [Versión 3: cambios y respuesta a la revisión](#versión-3-cambios-y-respuesta-a-la-revisión)
7. [Requerimientos](#requerimientos)
8. [Sprint 2: checklist de frontend y flujos por rol](#sprint-2-checklist-de-frontend-y-flujos-por-rol)
9. [Sprint 3 y Sprint 4: plan de trabajo](#sprint-3-y-sprint-4-plan-de-trabajo)
10. [Arquitectura frontend Sprint 4](#arquitectura-frontend-sprint-4)
11. [Arquitectura de paquetes nivel 3](#arquitectura-de-paquetes-nivel-3)
12. [Diagramas de navegación por rol](#diagramas-de-navegación-por-rol)
13. [Documento completo de arquitectura](#documento-completo-de-arquitectura)
14. [Prototipo navegable](#prototipo-navegable)
15. [Pantallas y accesos por rol](#pantallas-y-accesos-por-rol)
16. [Flujos exitosos y de error](#flujos-exitosos-y-de-error)
17. [Tecnologías propuestas e integración futura con el backend Spring Boot](#tecnologías-propuestas-e-integración-futura-con-el-backend-spring-boot)
18. [Estado real del Sprint 4](#estado-real-del-sprint-4)
19. [Logotipo](#logotipo)
20. [Manual de identidad](#manual-de-identidad)
21. [Módulos](#módulos)
22. [Criterios de UX aplicados](#criterios-de-ux-aplicados)

---

## Participantes

| Integrante           |
|----------------------|
| Juan Nicolás Álvarez |
| Camilo Ortiz         |
| Daniel Valero        |
| Juan Diego Valderrama |
| Paula Alejandra Diaz |

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
| **Administrador** | Modera publicaciones, verifica tiendas y gestiona fundaciones, usuarios y pagos. |

### Idea diferenciadora: Playlists de estilo

Inspiradas en las listas de música, las playlists permiten crear y compartir colecciones de outfits (hasta 15 prendas) que combinan prendas de almacenes locales con ropa de segunda mano. Con el probador virtual, el usuario puede ver el look sobre un maniquí o sobre su propia foto.

---

## Estructura del repositorio

```text
styleradar-frontend-v3/
├── prototipo/
│   ├── index.html                        # HTML monolítico anterior; intacto
│   └── StyleRadar_prototipo/             # FINAL: conservar carpeta completa
│       ├── index.html                   # 1 HTML
│       ├── css/                         # 4 hojas CSS
│       ├── js/                          # 20 scripts secuenciales
│       └── assets/img/                  # 173 recursos gráficos
├── docs/
│   ├── arquitectura/
│   │   ├── StyleRadar_Arquitectura_Frontend_v2_0.docx / .pdf
│   │   ├── StyleRadar_Arquitectura_Frontend_Con_Diagramas.docx / .pdf # v1.1
│   │   └── figuras/                     # actual/futura, SVG y PNG
│   ├── flujo/                           # cinco diagramas por rol v2.0, SVG/PNG
│   │   └── historico/v1_1/              # diez originales anteriores
│   ├── sprints/
│   │   ├── StyleRadar_Matriz_Cambios_v1_1_a_v2_0.md
│   │   ├── validacion-documental-sprint4-v2.md
│   │   ├── validacion-documental-sprint4.md # evidencia histórica v1.1
│   │   └── sprint-3-y-4.md              # plan conservado
│   ├── StyleRadar_Manual_de_Identidadv2.html # vigente, intacto
│   ├── StyleRadar_Informe_de_cambios_v3.docx # antecedente
│   ├── StyleRadar_Presentacion.pdf
│   ├── requerimientos/                  # Excel de 75 RF
│   └── historico/                       # manuales anteriores
├── assets/
│   ├── logo/                            # identidad oficial intacta
│   ├── color/
│   ├── mascota/
│   ├── mockups/                         # imágenes históricas
│   └── mockups-sprint1/
├── .editorconfig
├── .gitignore
└── README.md
```

La carpeta final contiene **198 archivos**. El desglose estático y los globales/extensiones JS no constituyen una implementación de módulos React.

## Cómo ver el prototipo

La entrada final es [`prototipo/StyleRadar_prototipo/index.html`](prototipo/StyleRadar_prototipo/index.html), con las carpetas hermanas `css/`, `js/` y `assets/`. **No copiar únicamente el HTML.** El [HTML anterior](prototipo/index.html) se conserva como antecedente y no es la fuente de las capturas v2.0.

Servir **la carpeta final como raíz HTTP** con un servidor estático ya disponible. Si Python 3 está instalado, desde `styleradar-frontend-v3/`:

```shell
python -m http.server 8080 --bind 127.0.0.1 --directory prototipo/StyleRadar_prototipo
```

Abrir `http://127.0.0.1:8080/index.html` en Chrome, Edge o Firefox; detener con Ctrl+C. No se instalan dependencias frontend. Poppins se solicita a Google Fonts, por lo que la apariencia sin conexión puede variar.

El prototipo usa rutas hash y almacenamiento local de demostración. No implementa React, JWT real ni REST con Spring Boot. El origen técnico es `f72f71db7c9e9c6a8f8717e5c3a154c8a9cb932f`, incorporado a `main` mediante PR #2.

Las cuentas son exclusivamente para demo local, sin valor como patrón de seguridad productivo. Contraseña de todas: `1234`.

| Rol | Correo |
|---|---|
| Comprador | `usuario@styleradar.co` |
| Tienda | `luna@styleradar.co` |
| Fundación | `abrigo@styleradar.co` |
| Administrador | `admin@styleradar.co` (invitación demo: `SR-ADMIN-2026`) |

## Historial de sprints

Las descripciones de Sprint 1–3 son antecedentes; no equivalen a pruebas actuales. La experiencia final y sus límites se documentan en v2.0.

| Sprint | Entrega | Qué incluye                                                                                                                                                                                |
|---|---|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sprint 1 | Mockups v1 | Identidad inicial, presentación, 12 módulos navegables para los cuatro actores y criterios de UX ([capturas](assets/mockups-sprint1))                                                      |
| Sprint 2 | Prototipo v2 | Respuesta a la revisión de mockups (parte 1)                                                                                                                                               |
| Sprint 2 | Prototipo v3 | Respuesta a la revisión (parte 2), análisis de requerimientos, manual de identidad v3 dentro de la plataforma, ajustes finales y [presentación del sprint](docs/StyleRadar_Presentacion.pdf) |
| Sprint 3 | Corrección y base | 75 requerimientos, manual de identidad v3, mascota de los cinco amigos y reorganización del repositorio                                                                                    |
| Sprint 4 | Prototipo final y documentación v2.0 | Prototipo integrado por PR #2; Word/PDF v2.0, siete pares SVG/PNG y README actualizado. v1.1 se conserva; React/API y QA completo siguen pendientes |

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
- **Tienda física:** la tienda sube fotos de su local (SR-RF-74) y el usuario le escribe por chat (SR-RF-73) en lugar de llamar.
- **Asistente para agregar prenda** con los atributos de búsqueda agrupados (color, marca, estilo, material, palabras clave).
- Pie de página con enlaces que sí llevan a una sección.

### Sprint 2 · Prototipo v3 (revisión, parte 2)

La v3 aplica **46 cambios** pedidos en la revisión y justifica **19 comentarios** en los que mantener el diseño sirve mejor a los requerimientos o al modelo de negocio. El detalle completo, con capturas, está en el [informe de cambios v3](docs/StyleRadar_Informe_de_cambios_v3.docx). La sección siguiente lo resume.

---

## Versión 3: cambios y respuesta a la revisión

**Antecedente histórico:** se conserva la respuesta de revisiones previas. Las cifras, cuadrículas y comprobaciones de entonces no describen necesariamente la portada final ni sustituyen la evidencia v2.0.

Lo más importante de la v3:

1. **Navegación sin callejones:** todas las pantallas internas tienen un botón **← Volver** junto a la ruta.
2. **Consistencia visual:** todos los menús desplegables  con ✓ en la opción elegida, todos los botones tienen las mismas esquinas (12 px) y los iconos son blancos.
3. **Funciones donde se buscan:** el mapa con catálogo resumido y los vendedores de segunda mano pasan al inicio; recomendaciones y feed al perfil; prendas similares a la ficha de cada prenda.
4. **Donación según SR-RF-48:** quien dona propone el punto y la franja; la fundación solo acepta, rechaza y confirma la recepción.
5. **Manual de identidad dentro de la plataforma:** logo en 3 versiones, paleta con justificación y tipografía por tamaños.
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
| Administrador | Quitar Invitar | Eliminado; queda la exportación de listados |

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
- **Administrador:** registros encontrados y columna Donaciones; destacar playlists por me gusta y guardados; sección de pagos (SR-RF-75); categorías en Publicaciones; columna Prendas en Tiendas.
- **Probador:** probar el look exacto de una playlist sobre el maniquí y el ajuste perfecto sobre la foto requieren un modelo de IA de *virtual try-on*; el prototipo muestra la etiqueta *Visualización aproximada*, como pide SR-RF-25.

---

## Requerimientos

Los **72 requerimientos funcionales** del análisis son visibles en la v3. El informe incluye una tabla con cómo ver cada uno en el prototipo. Se proponen 3 nuevos porque la plataforma ya tiene esas funciones sin requerimiento que las respalde, y se ajustan los criterios de SR-RF-48:

| Código | Cambio | Motivo |
|---|---|---|
| SR-RF-48 | Quien dona propone modo de entrega, día, franja y punto al enviar la solicitud; la fundación acepta o rechaza la propuesta completa. Si falta la franja o el punto, el formulario no se envía y marca el campo | La coordinación va en la solicitud, no en un paso aparte |
| SR-RF-73 (nuevo) | Contactar a un almacén por chat · Usuario y almacén | Reemplaza «Llamar», pedido en la revisión 1 |
| SR-RF-74 (nuevo) | Registrar fotografías de la tienda física (hasta 6; la primera es la portada) · Almacén | Pedido en la revisión 1 |
| SR-RF-75 (nuevo) | Consultar pagos de suscripciones (aprobado, rechazado, pendiente o reembolsado) · Administrador | Soporta SR-RF-67 y 68 |

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
| Fotos de la tienda física (SR-RF-74) | Tienda → Mi tienda → **Fotos de la tienda** |

---

## Sprint 2: checklist de frontend y flujos por rol

Checklist histórico, sin certificar los ciclos completos finales ni el cierre de RF. La revisión v2.0 distingue navegador, código y propuesta.

Esta sección conserva el reporte histórico del Sprint 2. Sus estados «Cumple» no constituyen una nueva validación del Sprint 4; prevalecen los pendientes del [plan de trabajo](docs/sprints/sprint-3-y-4.md).

| Punto del sprint | Estado en la v3 | Dónde se ve |
|---|---|---|
| El prototipo cumple el análisis de requerimientos | Cumple: 72 de 72 RF visibles, más 3 propuestos (RF-73 a 75) | Sección [Requerimientos](#requerimientos) |
| Manual de identidad: logo en 3 versiones, paleta con justificación UX, tipografía por tamaño | Cumple | [Manual de identidad](docs/StyleRadar_Manual_de_Identidadv2.html) y, en la plataforma, pie de página → **Manual de identidad** |
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

## Sprint 3 y Sprint 4: plan de trabajo

Se conserva el reparto del [plan histórico](docs/sprints/sprint-3-y-4.md), sin cambiar estados de RF. Publicar documentación no cierra sus tareas funcionales.

### Sprint 3 · Corrección y base

 | Entregable | Detalle                                                                                  |
|-|------------------------------------------------------------------------------------------|
 | Requerimientos actualizados | [Excel v3](docs/requerimientos/StyleRadar_Requerimientos_Completos_v3.xlsx): 75 RF (72 del análisis + SR-RF-73, 74 y 75) |
| Manual de identidad (entrega previa) | 11 láminas: nueva lámina 3 con el **diagrama de contexto**, fondos nuevos, bloque de botones corregido y mascota nueva. Ver [manual vigente](docs/StyleRadar_Manual_de_Identidadv2.html) |
 | Mascota: los amigos de StyleRadar | Cinco personajes (Antonia, Mateo, Aura, Nora y Tomás) con dos poses en Bogotá cada uno, en [`assets/mascota/`](assets/mascota). |
 | README y estructura del repositorio | Se quitan los RF-76 y 77 que no se aprobaron, se documentan los 75 RF y se reorganiza la carpeta `docs/` |
 | Corrección en el prototipo: playlists | `MAXPL=15` está en código; falta prueba del límite de **15 prendas** |
 | Corrección en el prototipo: contraseñas | Unificar reglas: login admite cuentas demo de 4 caracteres y registro exige 6 |
| Documentación del frontend | Informe de cambios v4 con las correcciones del Sprint 3 y la tabla actualizada a 75 RF   |

### Sprint 4 · Integración y cierre

| Entregable | Detalle |
|-|---|
| Mascota dentro del prototipo | Usar a los cinco amigos y sus poses en el registro, los estados vacíos, los mensajes de error|
 | RF-73 · Chat con el almacén | Reemplaza «Llamar» en la ficha de la tienda; los chats sin responder se ven en el panel del almacén |
 | RF-74 · Fotos de la tienda física | Hasta 6 fotos por tienda; la primera es la portada |
| RF-75 · Pagos de suscripciones | Listado para el administrador con estados aprobado, rechazado, pendiente y reembolsado |
| Poses para el MVP | Recortar las poses con fondo transparente y descargarlas en tamaño completo desde Canva |
| Revisión final del frontend | Recorrido de los flujos por rol, responsive a 390 y 1440 px, contraste, estados de error y vacíos |
| Entrega final | Presentación del sprint y README actualizado |


---

## Arquitectura frontend Sprint 4

La **versión documental 2.0** distingue el prototipo ejecutado de la arquitectura propuesta. Lo actual es HTML, 20 scripts, 4 CSS y 173 imágenes, con router hash y datos locales. React/Vite, React Router, cliente HTTP y módulos de nivel 3 son diseño futuro, sin REST/JWT implementado.

| Vista | SVG editable | PNG de consulta |
|---|---|---|
| Arquitectura actual | [SVG](docs/arquitectura/figuras/arquitectura_actual.svg) | [PNG](docs/arquitectura/figuras/arquitectura_actual.png) |
| Arquitectura futura propuesta | [SVG](docs/arquitectura/figuras/arquitectura_futura.svg) | [PNG](docs/arquitectura/figuras/arquitectura_futura.png) |

La identidad conserva el [manual vigente](docs/StyleRadar_Manual_de_Identidadv2.html), paleta y Poppins. **Antonia, Mateo, Aura, Nora y Tomás** son cinco personajes del inicio; no son las seis categorías del catálogo.

## Arquitectura de paquetes nivel 3

Esta estructura es una **propuesta para la futura aplicación React**. El árbol sirve como diseño documental; no se han creado `src/`, componentes ni dependencias.

```text
modules/
├── core/
├── auth/
├── discovery/
├── catalogo/
├── almacenes/
├── probador/
├── playlists/
├── alertas/
├── preferencias/
├── suscripciones/
├── segunda-vida/
├── mensajes/
├── fundaciones/
└── administracion/
```

| Módulo propuesto | Responsabilidad y componentes previstos | Hooks, servicios y estado previstos |
|---|---|---|
| `modules/core/` | Layout, navegación, botones, formularios accesibles, diálogos y estados compartidos; configuración y diseño visual | Cliente HTTP común, utilidades de fechas/precios, normalización de errores y hooks comunes. No almacena reglas del negocio ni importa módulos de dominio |
| `modules/auth/` | Inicio de sesión, registro y acceso por rol | Hooks de autenticación; servicio de identidad; estado compartido mínimo de sesión, identidad y permisos |
| `modules/discovery/` | Portada, categorías y accesos a catálogo, tiendas, fundaciones y playlists | Hooks de composición; consume interfaces públicas de los módulos, sin duplicar inventario ni recomendaciones |
| `modules/catalogo/` | Búsqueda, filtros, resultados y ficha de prenda; acceso al módulo probador | Hooks de búsqueda y selección; servicios de catálogo; filtros en URL y estado local de resultados/selección |
| `modules/almacenes/` | Mapa, ficha pública y panel de tienda; inventario y fotos del local | Hooks de mapa e inventario; servicios de almacenes; estado de tienda seleccionada y borradores de edición |
| `modules/probador/` | Maniquí, selección de prendas, foto y visualización aproximada | Hooks de selección y foto; estado temporal del look y eliminación de imagen; integración de IA no acreditada |
| `modules/playlists/` | Listas, detalle y editor de playlists; colecciones del almacén | Hooks de edición; servicios de playlists; selección de prendas y visibilidad; validación del límite de 15 |
| `modules/alertas/` | Búsquedas guardadas y avisos de disponibilidad | Hooks de alertas; servicios de consulta/activación; estado de filtros guardados y notificaciones |
| `modules/preferencias/` | Perfil del comprador, estilos, tallas, wishlist y recomendaciones | Hooks de preferencias; servicios del perfil; borradores locales y preferencias confirmadas de la sesión |
| `modules/suscripciones/` | Planes y renovación del almacén; composición de la pantalla de planes de la cuenta | Hooks de consulta/cancelación; servicios de suscripción; plan y estado de renovación. Administración compone la consulta de pagos mediante su interfaz pública. La contratación de planes del comprador y su soporte REST requieren confirmación |
| `modules/segunda-vida/` | Publicar para vender o donar, publicaciones propias y propuesta de entrega | Hooks de publicación/donación; servicios de publicaciones; borrador, fotos y propuesta de entrega; consume la interfaz de mensajes |
| `modules/mensajes/` | Bandeja y conversaciones de compradores, tiendas y fundaciones | Hooks de conversación; servicios de mensajería; conversación seleccionada y borrador, sin duplicarlos en cada módulo consumidor |
| `modules/fundaciones/` | Ficha pública, edición de la fundación y solicitudes de donación | Hooks de solicitudes; servicios de fundaciones/donaciones; filtros y transiciones de aceptar, rechazar y recibir |
| `modules/administracion/` | Resumen, usuarios, verificación de tiendas, fundaciones, moderación, playlists y pagos | Hooks de gestión; servicios administrativos; filtros, selección y confirmaciones; autorización `ADMIN_STYLERADAR` |

Dentro de cada módulo se proponen `pages/` para pantallas, `components/` para elementos propios, `hooks/` para coordinar interacción y datos, `services/` para REST y adaptación de DTO, `states/` para estado compartido necesario, `models/` para contratos y `utils/` para funciones puras del dominio. Solo se crearían al implementar una necesidad concreta.

Los componentes presentan datos y eventos; los hooks coordinan servicios y estados `loading/error/empty/success`. Los formularios conservan su borrador local; la sesión se comparte desde auth y los resultados remotos se gestionan en su módulo, evitando duplicarlos en un estado global. Core aporta elementos reutilizables sin depender de funcionalidades. Los módulos colaboran mediante interfaces públicas, sin importar archivos internos de otros módulos ni acceder a la base de datos.

La propuesta conserva el antecedente Word/PDF 1.1, secciones 4.2 y 4.5; v2.0 la distingue del árbol estático actual. `perfil` y `panel-almacen` del diseño previo se conservan como agrupaciones funcionales internas de `preferencias` y `almacenes`; sus recorridos permanecen en las secciones 8.5 y 8.11. `suscripciones` reúne planes y renovación. Catálogo y playlists abren el probador mediante su interfaz pública; segunda vida, almacenes y fundaciones consumen mensajes. Core es soporte técnico transversal, sin reglas de negocio propias.

Los tres módulos adicionales se justifican por funciones reales del HTML. Esta correspondencia describe responsabilidades propuestas y no certifica implementación React ni ejecución completa de los RF:

| Módulo adicional | Referencia en el HTML real | Justificación funcional y requerimientos |
|---|---|---|
| `discovery` | `#inicio`, categorías y accesos a tiendas, fundaciones y playlists | Compone el descubrimiento de SR-RF-07 a 22, SR-RF-43 y SR-RF-69 a 72; reutiliza datos de otros módulos, sin inventar un RF nuevo |
| `probador` | `#/probador` | Selección de prendas, carga y eliminación de foto, visualización aproximada: SR-RF-23 a 27 |
| `mensajes` | `#/mensajes` | Chat con vendedor, coordinación de entrega/donación y contacto con almacén: SR-RF-40/41, SR-RF-48 y SR-RF-73 |

El resto de la agrupación se cotejó con el [Excel de 75 RF](docs/requerimientos/StyleRadar_Requerimientos_Completos_v3.xlsx): auth (01/02), preferencias (03 a 06; wishlist y cuenta visibles en el HTML), catálogo (07 a 16 y 22), almacenes (17 a 22, 50 a 60 y 74), alertas (28 a 32), segunda vida (33 a 39, 42 a 45 y coordinación 48), fundaciones (43 a 49), suscripciones de almacén (67/68), playlists (69 a 71) y administración (61 a 66, 72 y 75). La consulta administrativa de pagos mantiene sus permisos propios. Los planes del comprador son una pantalla del prototipo, sin atribuirlos a los RF de suscripción de almacenes.

## Diagramas de navegación por rol

Cinco pares SVG/PNG **v2.0** del router y la simulación actuales. Los diez originales v1.1 están en [historico/v1_1](docs/flujo/historico/v1_1), byte a byte, sin sobrescribir. Se mantienen los SVG editables y los PNG originales del paquete.

Invitado es una condición sin sesión. Los roles documentales equivalentes son `COMPRADOR`, `ADMIN_ALMACEN`, `REPRESENTANTE_FUNDACION` y `ADMIN_STYLERADAR`. Las 95 pruebas solo validan el router local, no autorización del servidor ni todos los flujos.

### 1. Invitado

![1. Invitado](docs/flujo/01_invitado.png)

[SVG editable](docs/flujo/01_invitado.svg).

Portada y descubrimiento públicos; ficha de prenda, login y registro son superposiciones. Las acciones personales abren login y buscar sin coincidencias muestra un vacío.

### 2. COMPRADOR

![2. COMPRADOR](docs/flujo/02_comprador.png)

[SVG editable](docs/flujo/02_comprador.svg).

Descubrimiento, perfil, probador aproximado, publicaciones y mensajes. Corazón y guardar look persisten localmente; «Todo a la wishlist» sigue incompleto. Sin paneles de otros roles.

### 3. ADMIN_ALMACEN

![3. ADMIN_ALMACEN](docs/flujo/03_almacen.png)

[SVG editable](docs/flujo/03_almacen.svg).

Mi tienda, cuenta, mensajes y ficha de playlist. El asistente exige foto antes de avanzar. Inventario, fotos, estadísticas y suscripción son locales y no acreditan un ciclo completo.

### 4. REPRESENTANTE_FUNDACION

![4. REPRESENTANTE_FUNDACION](docs/flujo/04_fundacion.png)

[SVG editable](docs/flujo/04_fundacion.svg).

Mi fundación, donaciones, cuenta y mensajes. La propuesta es del donante; rechazar requiere motivo. Aceptar y recibir siguen siendo simulaciones sin ciclo completo certificado.

### 5. ADMIN_STYLERADAR

![5. ADMIN_STYLERADAR](docs/flujo/05_administrador.png)

[SVG editable](docs/flujo/05_administrador.svg).

Administración y marca. Destacar playlists cambia datos locales; pagos es una tabla simulada y exportar no produce XLSX. El rol no habilita catálogo público ni paneles ajenos.

La numeración RF se consulta en el [Excel vigente](docs/requerimientos/StyleRadar_Requerimientos_Completos_v3.xlsx); los diagramas no cambian estados de RF ni Jira.

## Documento completo de arquitectura

Versión actual **2.0**, aprobada por el equipo para publicación documental:

- [PDF v2.0 de consulta](docs/arquitectura/StyleRadar_Arquitectura_Frontend_v2_0.pdf).
- [Word v2.0 editable](docs/arquitectura/StyleRadar_Arquitectura_Frontend_v2_0.docx).
- [Matriz de cambios 1.1 → 2.0](docs/sprints/StyleRadar_Matriz_Cambios_v1_1_a_v2_0.md).
- [Validación documental v2](docs/sprints/validacion-documental-sprint4-v2.md).

Se conservan el contenido técnico, capturas y diseño aprobados. Las notas distinguen el análisis histórico sobre `f72f71d` de su incorporación a `main` por PR #2. No se acredita integración productiva.

Antecedentes **v1.1 conservados sin sobrescribir**:

- [PDF v1.1](docs/arquitectura/StyleRadar_Arquitectura_Frontend_Con_Diagramas.pdf).
- [Word v1.1](docs/arquitectura/StyleRadar_Arquitectura_Frontend_Con_Diagramas.docx).
- [Validación histórica v1.1](docs/sprints/validacion-documental-sprint4.md).
- [Diez diagramas históricos v1.1](docs/flujo/historico/v1_1).

## Prototipo navegable

El prototipo final es la **carpeta completa** [`prototipo/StyleRadar_prototipo/`](prototipo/StyleRadar_prototipo), con entrada [index.html](prototipo/StyleRadar_prototipo/index.html). Su origen es `f72f71d`; quedó integrado en `main` mediante el [PR #2](https://github.com/JUANNICOLASA/Frontend-Style-Radar/pull/2), merge `53def7934646c38fcf99d3af65318fa2614e77f2`.

Seguir [Cómo ver el prototipo](#cómo-ver-el-prototipo). El [HTML anterior](prototipo/index.html) sigue intacto. No hay diseño independiente del equipo en Figma ni URL de despliegue público comprobada. Esta publicación no modifica archivos ejecutables.

## Pantallas y accesos por rol

Matriz del router final: **95 casos, 19 destinos × 5 tipos de acceso**. `guest` es invitado, `user` comprador, `store` almacén, `found` fundación y `admin` administración. ✓ permite navegar; — redirige o exige login. No certifica autorización de servidor.

| Ruta real | guest | user | store | found | admin |
|---|:---:|:---:|:---:|:---:|:---:|
| `#inicio y anclas de portada` | ✓ | ✓ | — | — | — |
| `#/catalogo, #/categoria/:clave` | ✓ | ✓ | — | — | — |
| `#/tienda/:id, #/fundacion/:id, #/mapa` | ✓ | ✓ | — | — | — |
| `#/vendedor/:slug, #/funciones[/seccion]` | ✓ | ✓ | — | — | — |
| `#/playlist/:id` | ✓ | ✓ | ✓ | — | — |
| `#/marca` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `#/perfil[/seccion], #/probador, #/vender[/:id]` | — | ✓ | — | — | — |
| `#/mensajes[/:id]` | — | ✓ | ✓ | ✓ | — |
| `#/mi-tienda[/seccion]` | — | — | ✓ | — | — |
| `#/cuenta[/seccion]` | — | — | ✓ | ✓ | — |
| `#/mi-fundacion, #/donaciones` | — | — | — | ✓ | — |
| `#/admin[/seccion[/:id]]` | — | — | — | — | ✓ |

Las claves del catálogo son `formal`, `casual`, `urbana`, `deportivo`, `leather` y `calzado`. Perfil incluye información, privacidad, suscripción, publicaciones, playlists, alertas, wishlist y recomendaciones. Cuenta profesional contiene información/estadísticas y suscripción (tienda) o estado (fundación). Admin incluye resumen, usuarios, tiendas, fundaciones, publicaciones, playlists, pagos y cuenta.

**Login, registro y ficha de prenda son modales**, sin rutas propias. No se registran `/login`, `/registro`, `#/playlists` ni `#/segunda-vida`. Playlists del inicio usa `#colecciones`; segunda vida es `#segunda-vida`, y publicar exige `#/vender`. `:id` indica recursos existentes, sin inventar nuevas rutas.

Tienda, fundación y admin se redirigen a su panel al solicitar anclas de portada. La ficha pública de playlist permite tienda; `#/marca` permite todos los tipos de acceso. Los permisos efectivos de la futura API deben imponerse en Spring Boot.

## Flujos exitosos y de error

La evidencia v2.0 distingue navegador (**N**), código sin ciclo completo (**C**) y diseño futuro (**P**).

| Caso | Evidencia | Límite |
|---|---|---|
| Acceso | N: 8 ingresos válidos, contraseña errónea y 95 casos del router | Sin autorización de servidor ni JWT |
| Catálogo | N: buscar «camisa», cero resultados, ficha y corazón persistente | No valida todos los filtros ni catálogo remoto |
| Probador | N: capa, total, guardar look y foto de ejemplo | Superposición aproximada; «Todo a la wishlist» solo avisa |
| Inventario | N: asistente bloquea avance sin foto | C: tres pasos y alta completa por probar |
| Donaciones | N: rechazo exige motivo | C: ciclo aceptar/entregar/recibir por probar |
| Destacadas | N: actualizar destacada modifica datos locales | Sin contrato backend probado |
| Pagos | N: tabla y exportación sin archivo | C: cobros/reembolsos simulados |

El código contiene `MAXPL=15`; falta probar el límite. Login admite las cuentas demo de 4 caracteres y registro exige 6. No se cambian estados del [plan histórico](docs/sprints/sprint-3-y-4.md) ni se cierran RF por esta publicación.

## Tecnologías propuestas e integración futura con el backend Spring Boot

Se propone **React + Vite**, **React Router**, **Axios**, **API REST Spring Boot** y autenticación **JWT Bearer**. No se instalan en esta entrega. Los contratos, nombres de campos, rutas y operaciones disponibles deberán cotejarse con el OpenAPI del backend antes de implementar; no se presuponen endpoints por aparecer una pantalla en el HTML.

1. **Configuración y HTTP compartido:** la URL base se definiría por ambiente mediante `VITE_API_BASE_URL` y se validaría al arrancar. No se fija una URL no comprobada. Las variables `VITE_*` son públicas y no deben contener secretos ([documentación de Vite](https://vite.dev/guide/env-and-mode)). Core expondría una instancia Axios con URL base, timeout y adaptación de errores; cada módulo implementaría sus servicios REST y DTO.
2. **Login y Authorization:** auth enviaría los datos de acceso al contrato de autenticación acordado; solo una respuesta válida establecería identidad y roles. Un interceptor de petición añadiría el encabezado Authorization con esquema Bearer a las solicitudes autenticadas dirigidas a la API configurada, sin enviar tokens a terceros. El interceptor de respuesta centralizaría la invalidación por 401 ([interceptores de Axios](https://axios-http.com/docs/interceptors)).
3. **Sesión y cierre:** mantener el access token preferiblemente en memoria; no persistir credenciales ni JWT en `localStorage`, documentos, logs o URLs. Si se acuerda renovación con backend, usar un mecanismo soportado por el contrato, por ejemplo cookie HttpOnly, Secure y política SameSite adecuada, con protección CSRF cuando corresponda; no se presupone que exista. Al cerrar sesión o vencer el acceso, borrar identidad, tokens y cachés privados, y volver al login; revocar la sesión en servidor solo si el contrato ofrece esa operación ([criterios OWASP sobre almacenamiento local](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)).
4. **Navegación protegida:** React Router resolvería las rutas y auth comprobaría sesión y roles antes de mostrar vistas protegidas: `COMPRADOR`, `ADMIN_ALMACEN`, `REPRESENTANTE_FUNDACION`, `ADMIN_STYLERADAR`. Sin sesión → login; sin permiso → aviso de acceso denegado y salida segura. Spring Boot debe verificar rol y propiedad del recurso en cada operación; el menú y la protección del cliente no sustituyen esa autorización ([rutas de React Router](https://reactrouter.com/start/declarative/routing)).
5. **Estados visibles:** cada pantalla remota distinguiría `loading` (indicador y prevención de envíos duplicados), `error` (mensaje y reintento cuando sea seguro), `empty` (sin registros, con acción útil) y éxito (datos o confirmación). Conservar borradores al corregir validaciones; no reintentar automáticamente escrituras que puedan duplicarse.

| Respuesta futura | Comportamiento previsto del cliente |
|---|---|
| 400 | Mostrar validaciones de campos y explicación general; conservar el borrador |
| 401 | Credenciales inválidas en login: permitir corregir. En una operación protegida: invalidar sesión y solicitar ingreso, sin bucles de reintento |
| 403 | Explicar falta de permisos; no repetir login automáticamente ni exponer datos restringidos |
| 404 | Informar recurso ausente y ofrecer volver al listado; no inventar contenido |
| 409 | Explicar conflicto de estado o duplicidad; recargar datos o corregir antes de reenviar |

Esta política es diseño pendiente de implementación. La persistencia de datos de prueba del HTML es una simulación y no el modelo de seguridad de la futura aplicación.

## Estado real del Sprint 4

**Código confirmado en main:** prototipo final incorporado por PR #2, merge `53def7934646c38fcf99d3af65318fa2614e77f2`; 198 archivos idénticos al origen técnico `f72f71d`.

**Esta entrega documental:** Word/PDF v2.0, cinco flujos por rol y dos diagramas de arquitectura SVG/PNG, matriz de cambios y README actualizado. Word/PDF v1.1 y su [validación](docs/sprints/validacion-documental-sprint4.md) quedan intactos; los diez diagramas anteriores se conservan en `docs/flujo/historico/v1_1/`. Véase la [validación v2](docs/sprints/validacion-documental-sprint4-v2.md).

**Pendientes funcionales conservados:** React, REST/JWT real, contratos, despliegue, WCAG y E2E. Los controles de RF72–RF75 existen en la simulación con alcance N/C; no se alteran RF/Jira ni el [plan histórico](docs/sprints/sprint-3-y-4.md).

**Defectos conocidos:** faltan `meta viewport`, doctype y charset explícitos; una pantalla emulada de 390 px da `innerWidth=980`. El detector sin «Recordarme» puede mostrar tiendas de invitado a un comprador. «Todo a la wishlist» y exportar XLSX solo muestran avisos. Las credenciales demo están en claro en `sr:db5`, una práctica que no se trasladará al diseño productivo. Sus correcciones requieren PRs de código separados.

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

**Manual de identidad vigente:** [StyleRadar_Manual_de_Identidadv2.html](docs/StyleRadar_Manual_de_Identidadv2.html). Descárgalo y ábrelo en el navegador; es una presentación de 11 diapositivas que incluye el diagrama de contexto. Se conserva el nombre real del archivo, cuyo título interno dice «Manual de identidad V3». Las versiones anteriores están en [`docs/historico/`](docs/historico).

El manual cubre el diagrama de contexto, el problema y los tres públicos, el logo en modo claro y oscuro, la paleta, la tipografía, las combinaciones accesibles, los botones, títulos e iconos, la mascota, las funcionalidades clave y las aplicaciones en computador y celular. Este es el resumen:

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

### Mascota: los amigos de StyleRadar

La mascota es un grupo de cinco amigos de Bogotá. Cada uno viste a su modo y representa un estilo propio: juntos muestran la diversidad de la moda en la ciudad bajo la idea «misma ciudad, diferentes estilos, una misma frecuencia». Reemplaza al camaleón Kai de versiones anteriores.

| Personaje | Estilo | Personalidad |
|---|---|---|
| Antonia | Sastre | Sofisticada, imponente y atemporal; de la oficina al plan |
| Mateo | Calle | Oversize, comodidad y cultura local |
| Aura | Futuro | Funcional, innovadora y de estética urbana |
| Nora | Rebelde | Libertad, vintage y sin etiquetas |
| Tomás | Esencial | Simple, de calidad y con equilibrio |

---

## Módulos

**Las imágenes siguientes de `assets/mockups/` son antecedentes históricos, conservados sin modificar; no son evidencia del prototipo final.** Las 18 capturas finales están en el [Word/PDF v2.0](#documento-completo-de-arquitectura), con escritorio y móvil diferenciados. El [informe v3](docs/StyleRadar_Informe_de_cambios_v3.docx) y los [mockups Sprint 1](assets/mockups-sprint1) siguen como antecedentes. Las descripciones siguientes indican la experiencia final y su alcance simulado.

### 1. Acceso: inicio de sesión y registro
**Actores:** todos

La portada final muestra «Tu estilo. Tu ciudad.». Login y registro son modales; el registro ofrece cuatro tipos de cuenta e invitación demo para administrador. El login se comprobó; no se certificó una nueva alta completa.

| Portada | Iniciar sesión | Crear cuenta |
|---|---|---|
| ![Portada](assets/mockups/01-portada.jpg) | ![Inicio de sesión](assets/mockups/02-login.jpg) | ![Crear cuenta](assets/mockups/03-registro.jpg) |

### 2. Inicio y descubrimiento
**Actor:** usuario e invitado

El inicio muestra cinco personajes: Antonia/Sastre, Mateo/Calle, Aura/Futuro, Nora/Rebelde y Tomás/Esencial. El carrusel cambia selección, sin navegar a productos. Las seis categorías del catálogo —Formal, Casual, Urbana, Sport, Leather y Calzado— son otra clasificación. Incluye «Arma. Pruébate. Sal.», playlists, mapa, fundaciones y segunda vida. Tiendas usa una composición con Antonia para invitado y un listado con filtros para comprador.

| Categorías | Tiendas en el radar |
|---|---|
| ![Categorías](assets/mockups/05-categorias.jpg) | ![Tiendas](assets/mockups/06-tiendas.jpg) |
| **Fundaciones aliadas** | **Segunda vida** |
| ![Fundaciones](assets/mockups/08-fundaciones.jpg) | ![Segunda vida](assets/mockups/09-segunda-vida.jpg) |

### 3. Catálogo: búsqueda y filtros
**Actores:** comprador e invitado

Buscador de texto libre con filtros de tipo, estilo, color, talla, marca y precio, y orden por Recomendados, Más recientes, Más cerca, Mejor calificadas y precio. Cada prenda tiene foto real y, en su ficha, prendas similares.

![Catálogo](assets/mockups/10-catalogo.jpg)

### 4. Mapa de moda local y tiendas
**Actores:** comprador e invitado

Mapa de Bogotá con las tiendas y fundaciones en su barrio, filtros y distancia desde el barrio elegido en «Estoy en». Cada tienda tiene su página con la foto del local, datos, novedades de la semana, colecciones y catálogo.

| Mapa | Página de tienda |
|---|---|
| ![Mapa de moda local](assets/mockups/11-mapa.jpg) | ![Luna Store](assets/mockups/12-tienda.jpg) |

### 5. Probador virtual
**Actor:** usuario

Superposición de capas sobre maniquí o fotografía, con selección y total local. Se comprobaron foto de ejemplo y guardar look; no hay motor de IA ni RA real. La carga personal completa no se certificó y «Todo a la wishlist» solo muestra un aviso.

![Probador virtual](assets/mockups/14-probador.jpg)

### 6. Playlists de estilo
**Actor:** usuario (y tienda, como colecciones)

Ficha pública para invitado, comprador y tienda; acciones locales según sesión/propiedad. `MAXPL=15` y el bloqueo de lista llena están en código; falta probar el límite. Las prendas no disponibles se conservan identificadas.

![Playlist de estilo](assets/mockups/15-playlist.jpg)

### 7. Segunda vida: vender, donar y chat
**Actor:** usuario

`#segunda-vida` es pública; vender/donar usa `#/vender` para comprador. Existen formularios de entrega, vendedores públicos y bandejas locales; publicación, envío y ciclo de donación completo no se certificaron.

| Publicar una prenda | Mensajes |
|---|---|
| ![Publicar](assets/mockups/16-vender.jpg) | ![Mensajes](assets/mockups/17-mensajes.jpg) |

### 8. Perfil del usuario
**Actor:** usuario

Mi actividad (publicaciones, playlists, búsquedas y alertas, wishlist, recomendaciones) y Mi cuenta (información, privacidad, suscripción).

![Perfil](assets/mockups/18-perfil.jpg)

### 9. Panel de la tienda
**Actor:** almacén de moda

Mi tienda reúne inventario, asistente de tres pasos, unidades, colecciones y hasta seis fotos del local en código. Se comprobó el bloqueo sin foto; no el alta completa ni la carga de seis archivos. Estadísticas y suscripción son locales.

| Mi tienda | Estadísticas | Suscripción |
|---|---|---|
| ![Mi tienda](assets/mockups/21-mi-tienda.jpg) | ![Estadísticas](assets/mockups/22-tienda-estadisticas.jpg) | ![Suscripción](assets/mockups/23-tienda-suscripcion.jpg) |

### 10. Panel de la fundación
**Actor:** fundación aliada

Mi fundación y donaciones muestran perfil y solicitudes locales con punto/franja del donante. Rechazar sin motivo se bloquea. Editar, aceptar y confirmar recepción existen en código, sin ciclo completo acreditado.

| Mi fundación | Donaciones |
|---|---|
| ![Mi fundación](assets/mockups/24-mi-fundacion.jpg) | ![Donaciones](assets/mockups/25-donaciones.jpg) |

### 11. Administración
**Actor:** administrador StyleRadar

Panel con resumen, usuarios, tiendas, fundaciones, publicaciones, playlists, pagos y cuenta. Destacar cambia datos locales; exportar pagos no genera XLSX y los cobros/reembolsos son simulados. Sin pasarela ni backend integrado.

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
Hay media queries y menú móvil, pero falta `meta viewport`: una pantalla emulada de 390 px usa 980 px CSS. No se declara responsive de dispositivo validado. Distinguir viewport CSS reducido de emulación real; las imágenes siguientes son históricas.

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
- **Objetivo WCAG 2.1 AA:** las cifras de revisiones anteriores son antecedentes; no se realizó una auditoría integral v2.0 de contraste, foco, teclado ni lectura asistida.

---

<div align="center">
<img src="assets/logo/styleradar-isotipo.svg" alt="" height="48"><br>
<sub>StyleRadar · Equipo DOSW · Bogotá, 2026</sub>
</div>
