/* ===== TIENDAS · versión landing solo para visitantes (js/19-tiendas-landing.js) =====
   - Visitante (sin sesión): se ve el personaje con las tarjetas decorativas.
   - Usuario con sesión: se ve la sección original de tiendas, sin cambios.
   - Las fotos de las tarjetas decorativas se toman de las tarjetas reales (no hay rutas nuevas). */
(function () {
  var root = document.documentElement;

  /* ¿hay sesión? Revisa las claves de almacenamiento típicas.
     Si tu sesión se guarda con otro nombre, agrégalo a la lista KEYS. */
  var KEYS = /(sess|auth|login|logged|token|currentuser|current_user|usuario|user)/i;
  function hasSession() {
    try {
      var stores = [window.localStorage, window.sessionStorage];
      for (var s = 0; s < stores.length; s++) {
        for (var i = 0; i < stores[s].length; i++) {
          var k = stores[s].key(i);
          if (!KEYS.test(k)) continue;
          var v = stores[s].getItem(k);
          if (v && v !== 'null' && v !== '{}' && v !== '""' && v !== 'false') return true;
        }
      }
    } catch (e) {}
    return false;
  }

  function sync() { root.classList.toggle('sr-guest', !hasSession()); }

  /* copia las fotos reales de las tiendas a las tarjetas decorativas */
  function fillImages() {
    var real = document.querySelectorAll('#storeGrid2 img, #storeGrid img');
    var deco = document.querySelectorAll('#tiendas-landing img[data-store]');
    if (!real.length) return false;
    var done = 0;
    Array.prototype.forEach.call(deco, function (img, i) {
      var name = img.getAttribute('data-store').toLowerCase();
      var src = null;
      Array.prototype.forEach.call(real, function (r) {
        if (src) return;
        var card = r.closest('article, li, div[class*="card"], div[class*="store"]') || r.parentNode;
        if (card && card.textContent.toLowerCase().indexOf(name) > -1) src = r.currentSrc || r.src;
      });
      if (!src && real[i]) src = real[i].currentSrc || real[i].src;
      if (src) { img.src = src; done++; }
    });
    return done === deco.length;
  }

  /* "Tiendas" del menú/pie: llevan a la versión que esté visible */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="#tiendas"]');
    if (!a || !root.classList.contains('sr-guest')) return;
    var t = document.getElementById('tiendas-landing');
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });

  sync();
  var tries = 0;
  var timer = setInterval(function () {
    sync();                                  /* detecta iniciar/cerrar sesión sin recargar */
    if (tries < 40 && !fillImages()) tries++; else if (tries < 40) tries = 40;
  }, 700);
  window.addEventListener('storage', sync);
  window.addEventListener('hashchange', sync);
})();
