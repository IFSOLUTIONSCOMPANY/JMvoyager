<?php
/**
 * includes/navbar.php
 * Navbar standard pour les pages intérieures (rd-navbar-default).
 * Variable attendue : $activePage (string) — valeurs possibles :
 *   'accueil' | 'destinations' | 'quisommesnous' | 'services' | 'voyages' | 'contacts'
 */
$activePage = $activePage ?? '';

function nav_active(string $page, string $current): string {
  return $page === $current ? ' active' : '';
}
?>
<div class="rd-navbar-wrap rd-navbar-default">
  <nav class="rd-navbar"
    data-layout="rd-navbar-fixed"
    data-sm-layout="rd-navbar-fixed"
    data-md-layout="rd-navbar-fixed"
    data-md-device-layout="rd-navbar-fixed"
    data-lg-layout="rd-navbar-fullwidth"
    data-xl-layout="rd-navbar-static"
    data-lg-device-layout="rd-navbar-fixed"
    data-xl-device-layout="rd-navbar-static"
    data-md-stick-up-offset="2px"
    data-lg-stick-up-offset="2px"
    data-stick-up="true"
    data-sm-stick-up="true"
    data-md-stick-up="true"
    data-lg-stick-up="true"
    data-xl-stick-up="true">

    <div class="rd-navbar-inner">
      <!-- Logo + toggle mobile -->
      <div class="rd-navbar-panel">
        <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
        <div class="rd-navbar-brand">
          <a class="brand-name" href="accueil.php">
            <img class="logo-default" src="images/Logooriginal2.png" alt="JM Voyager" width="46" height="46">
            <img class="logo-inverse" src="images/Logooriginal2.png" alt="JM Voyager" width="46" height="46">
          </a>
        </div>
      </div>

      <!-- Navigation principale -->
      <div class="rd-navbar-aside-right">
        <div class="rd-navbar-nav-wrap">
          <ul class="rd-navbar-nav">

            <li class="<?= nav_active('accueil', $activePage) ?>">
              <a href="accueil.php">Accueil</a>
            </li>

            <li class="rd-navbar--has-dropdown<?= nav_active('destinations', $activePage) ?>">
              <a href="#">Nos destinations</a>
              <ul class="rd-navbar-dropdown">

                <li class="rd-navbar--has-dropdown">
                  <a href="#">Afrique</a>
                  <ul class="rd-navbar-dropdown">
                    <li><a href="afriquedusud.php">Afrique du Sud</a></li>
                    <li><a href="#">Eswatini</a></li>
                    <li><a href="#">Éthiopie</a></li>
                    <li><a href="#">Kenya</a></li>
                    <li><a href="#">La Réunion</a></li>
                    <li><a href="#">Madagascar</a></li>
                    <li><a href="#">Maroc</a></li>
                    <li><a href="#">Namibie</a></li>
                    <li><a href="#">Tanzanie</a></li>
                    <li><a href="#">Zanzibar</a></li>
                  </ul>
                </li>

                <li class="rd-navbar--has-dropdown">
                  <a href="#">Amérique Centrale</a>
                  <ul class="rd-navbar-dropdown">
                    <li><a href="#">Belize</a></li>
                    <li><a href="#">Costa Rica</a></li>
                    <li><a href="#">Guatemala</a></li>
                    <li><a href="#">Honduras</a></li>
                    <li><a href="#">Panama</a></li>
                  </ul>
                </li>

                <li class="rd-navbar--has-dropdown">
                  <a href="#">Amérique du Nord</a>
                  <ul class="rd-navbar-dropdown">
                    <li><a href="#">États-Unis</a></li>
                    <li><a href="#">Mexique</a></li>
                  </ul>
                </li>

                <li class="rd-navbar--has-dropdown">
                  <a href="#">Amérique du Sud</a>
                  <ul class="rd-navbar-dropdown">
                    <li><a href="#">Argentine</a></li>
                    <li><a href="#">Bolivie</a></li>
                    <li><a href="colombie.php">Colombie</a></li>
                    <li><a href="#">Équateur</a></li>
                    <li><a href="#">Pérou</a></li>
                    <li><a href="#">Venezuela</a></li>
                  </ul>
                </li>

                <li class="rd-navbar--has-dropdown">
                  <a href="#">Asie</a>
                  <ul class="rd-navbar-dropdown">
                    <li><a href="#">Inde</a></li>
                    <li><a href="#">Japon</a></li>
                    <li><a href="#">Vietnam</a></li>
                    <li><a href="#">Thaïlande</a></li>
                    <li><a href="#">Cambodge</a></li>
                  </ul>
                </li>

              </ul>
            </li>

            <li class="rd-navbar--has-dropdown<?= nav_active('quisommesnous', $activePage) ?>">
              <a href="#">Qui sommes-nous</a>
              <ul class="rd-navbar-dropdown">
                <li><a href="quisommesnous.php">Notre Histoire</a></li>
                <li><a href="nos-services.php">Nos services</a></li>
              </ul>
            </li>

            <li class="rd-navbar--has-dropdown<?= nav_active('voyages', $activePage) ?>">
              <a href="#">Voyage organisé</a>
              <ul class="rd-navbar-dropdown">
                <li><a href="colombie.php">Colombie</a></li>
                <li><a href="vo_bresil.php">Brésil</a></li>
                <li><a href="vo_vietnam.php">Vietnam</a></li>
              </ul>
            </li>

            <li class="<?= nav_active('contacts', $activePage) ?>">
              <a href="contacts.php">Contactez-nous</a>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </nav>
</div>
