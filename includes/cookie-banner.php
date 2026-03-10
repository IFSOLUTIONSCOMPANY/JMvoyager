<!-- Bannière de consentement aux cookies -->
<div id="cookie-banner" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Consentement aux cookies" style="display:none;">
  <div class="cookie-banner__content">
    <p>
      Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic.
      <br><small>Les cookies essentiels nécessaires au fonctionnement du site seront toujours actifs.</small>
    </p>
    <label class="cookie-banner__checkbox">
      <input type="checkbox" id="accept-conditions">
      J'accepte l'utilisation des cookies pour améliorer mon expérience.
    </label>
  </div>
  <div class="cookie-banner__actions">
    <button id="confirm-cookies" class="cookie-btn cookie-btn--accept">Accepter</button>
    <button id="decline-cookies" class="cookie-btn cookie-btn--decline">Refuser</button>
  </div>
</div>

<script>
(function () {
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 86400000);
    document.cookie = name + '=' + value + '; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
  }
  function getCookie(name) {
    var v = '; ' + document.cookie;
    var parts = v.split('; ' + name + '=');
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  window.addEventListener('DOMContentLoaded', function () {
    if (!getCookie('cookiesAccepted')) {
      document.getElementById('cookie-banner').style.display = 'flex';
    }
    document.getElementById('confirm-cookies').addEventListener('click', function () {
      var accepted = document.getElementById('accept-conditions').checked;
      setCookie('cookiesAccepted', accepted ? 'true' : 'false', 365);
      document.getElementById('cookie-banner').style.display = 'none';
    });
    document.getElementById('decline-cookies').addEventListener('click', function () {
      setCookie('cookiesAccepted', 'false', 365);
      document.getElementById('cookie-banner').style.display = 'none';
    });
  });
})();
</script>
