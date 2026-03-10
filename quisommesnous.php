<?php
$pageTitle  = 'Qui sommes-nous';
$activePage = 'quisommesnous';
require 'includes/head.php';
?>
<body>
<div class="page">
  <a class="section section-banner text-center d-none d-xl-block"></a>

  <!-- En-tête + Navbar -->
  <header class="section page-header breadcrumbs-custom-wrap bg-gradient bg-secondary-2 novi-background bg-cover">
    <?php require 'includes/navbar.php'; ?>

    <section class="breadcrumbs-custom" style="background: url('images/DSC03060.jpg'); background-size: cover;">
      <div class="container">
        <p class="breadcrumbs-custom-subtitle">Jason &amp; Moussa</p>
        <p class="heading-1 breadcrumbs-custom-title">Qui Sommes Nous</p>
        <ul class="breadcrumbs-custom-path">
          <li><a href="accueil.php">Accueil</a></li>
          <li class="active">Qui sommes nous</li>
        </ul>
      </div>
    </section>
  </header>


  <!-- === SECTION 1 : INTRO === -->
  <section class="section section-lg bg-default">
    <div class="container container-bigger">
      <div class="row row-50 justify-content-md-center align-items-lg-center justify-content-xl-between flex-lg-row-reverse">
        <div class="col-md-10 col-lg-6 col-xl-5">
          <h3>Et si on vous parlait de nous ?</h3>
          <p class="heading-5">Chez JM Voyager, nous sommes bien plus qu'une simple agence de voyages sur mesure — nous créons des expériences immersives pour vous connecter aux merveilles du monde. Plongez dans notre vision unique du voyage !</p>
          <a class="button button-default-outline button-nina" href="contacts.php">Contactez-nous</a>
        </div>
        <div class="col-md-10 col-lg-6">
          <img src="images/DSC03172.jpg" alt="JM Voyager — fondateurs" width="720" height="459">
        </div>
      </div>
    </div>
  </section>


  <!-- === SECTION 2 : HISTOIRE === -->
  <section class="section section-lg bg-default">
    <div class="container container-bigger">
      <div class="row row-50 justify-content-md-center align-items-lg-center justify-content-xl-between">
        <div class="col-md-10 col-lg-6 col-xl-5">
          <h3>Avec JM Voyager — Découvrez une nouvelle vision du monde</h3>
          <p class="heading-5">JM Voyager, c'est avant tout le rêve de deux passionnés depuis leur plus jeune âge par la découverte de nouvelles cultures. Jason et Moussa, nos fondateurs, partagent une véritable passion pour les voyages. Depuis plus de 10 ans, ils explorent différents continents et font des rencontres inoubliables — des expériences qui ont transformé leur vision du monde à jamais.</p>
          <p class="heading-5">Chez JM Voyager, nous avons pour ambition de proposer des voyages sur mesure, loin des itinéraires classiques, où les rencontres humaines et culturelles se mêlent à des paysages époustouflants. Bien plus qu'un simple voyage, nous offrons une expérience unique, conçue pour vous inspirer une vision nouvelle sur notre planète.</p>
          <a class="button button-default-outline button-nina" href="contacts.php">Contactez-nous</a>
        </div>
        <div class="col-md-10 col-lg-6">
          <img src="images/DSC03121.jpg" alt="JM Voyager en voyage" width="720" height="459">
        </div>
      </div>
    </div>
  </section>


  <!-- === SECTION 3 : VIDÉO === -->
  <section class="section section-lg bg-default">
    <div class="container container-bigger text-center">
      <h3>Découvrez notre aventure en vidéo</h3>
      <h4>Une image vaut mille mots — voici notre courte vidéo retraçant notre histoire.</h4>
      <div class="video-container">
        <video id="video" controls>
          <source src="videos/FINAL.mp4" type="video/mp4">
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
      </div>
    </div>
  </section>


  <?php require 'includes/footer.php'; ?>

</div>

<div class="snackbars" id="form-output-global"></div>
<script src="js/core.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
