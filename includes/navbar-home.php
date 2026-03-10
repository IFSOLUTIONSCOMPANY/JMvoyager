<?php
/**
 * includes/navbar-home.php
 * Navbar corporate de la page d'accueil (avec barre de contact supérieure).
 */
?>
<div class="rd-navbar-wrap rd-navbar-corporate">
  <nav class="rd-navbar"
    data-layout="rd-navbar-fixed"
    data-sm-layout="rd-navbar-fixed"
    data-md-layout="rd-navbar-fixed"
    data-md-device-layout="rd-navbar-fixed"
    data-lg-layout="rd-navbar-fullwidth"
    data-xl-layout="rd-navbar-static"
    data-lg-device-layout="rd-navbar-fixed"
    data-xl-device-layout="rd-navbar-static"
    data-md-stick-up-offset="130px"
    data-lg-stick-up-offset="100px"
    data-stick-up="true"
    data-sm-stick-up="true"
    data-md-stick-up="true"
    data-lg-stick-up="true"
    data-xl-stick-up="true">

    <!-- Toggle barre supérieure (mobile) -->
    <div class="rd-navbar-collapse-toggle" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>

    <!-- Barre de contact supérieure -->
    <div class="rd-navbar-top-panel rd-navbar-collapse novi-background">
      <div class="rd-navbar-top-panel-inner">
        <ul class="list-inline">
          <li class="box-inline list-inline-item">
            <span class="icon novi-icon icon-md-smaller icon-secondary mdi mdi-phone"></span>
            <ul class="list-comma">
              <li><a href="tel:0670331337">06 70 33 13 37</a></li>
            </ul>
          </li>
          <li class="box-inline list-inline-item">
            <span class="icon novi-icon icon-md-smaller icon-secondary mdi mdi-map-marker"></span>
            <a href="http://www.jm-voyager.fr/">www.jm-voyager.fr</a>
          </li>
          <li class="box-inline list-inline-item">
            <span class="icon novi-icon icon-md-smaller icon-secondary mdi mdi-email"></span>
            <a href="mailto:jetmvoyager@outlook.fr">jetmvoyager@outlook.fr</a>
          </li>
          <li class="box-inline list-inline-item">
            <span class="icon novi-icon icon-md-smaller icon-secondary mdi mdi-instagram"></span>
            <a href="https://www.instagram.com/j.m_voyager/">j.m_voyager</a>
          </li>
          <li class="box-inline list-inline-item">
            <img src="images/tiktoksanfond.png" alt="TikTok" width="38" height="38">
            <a href="https://www.tiktok.com/@jm.voyager">j.m_voyager</a>
          </li>
        </ul>
      </div>
      <div class="rd-navbar-top-panel-inner">
        <a class="button button-sm button-secondary button-nina" href="contacts.php">Votre Voyage</a>
      </div>
    </div>

    <div class="rd-navbar-inner">
      <!-- Logo + toggle mobile -->
      <div class="rd-navbar-panel">
        <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
        <div class="rd-navbar-brand">
          <a class="brand-name" href="accueil.php">
            <img class="logo-default" src="images/Logooriginal.png" alt="JM Voyager" width="46" height="46">
            <img class="logo-inverse" src="images/Logooriginal.png" alt="JM Voyager" width="46" height="46">
          </a>
        </div>
      </div>

      <!-- Navigation principale (centrée sur desktop) -->
      <div class="rd-navbar-aside-center">
        <div class="rd-navbar-nav-wrap">
          <ul class="rd-navbar-nav">

            <li class="active"><a href="accueil.php">Accueil</a></li>

            <li class="rd-navbar--has-dropdown">
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
                    <li><a href="vo_bresil.php">Brésil</a></li>
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

            <li class="rd-navbar--has-dropdown">
              <a href="#">Qui sommes-nous</a>
              <ul class="rd-navbar-dropdown">
                <li><a href="quisommesnous.php">Notre Histoire</a></li>
                <li><a href="nos-services.php">Nos services</a></li>
              </ul>
            </li>

            <li class="rd-navbar--has-dropdown">
              <a href="#">Voyage organisé</a>
              <ul class="rd-navbar-dropdown">
                <li><a href="colombie.php">Colombie</a></li>
                <li><a href="vo_bresil.php">Brésil</a></li>
                <li><a href="vo_vietnam.php">Vietnam</a></li>
              </ul>
            </li>

            <li><a href="contacts.php">Contactez-nous</a></li>

          </ul>
        </div>
      </div>

      <!-- Bouton CTA droite -->
      <div class="rd-navbar-aside-right">
        <a class="button button-sm button-secondary button-nina" href="contacts.php">Créez votre voyage</a>
      </div>
    </div>

  </nav>
</div>
