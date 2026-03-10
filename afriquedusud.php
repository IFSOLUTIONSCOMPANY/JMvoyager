<?php
$pageTitle  = 'Afrique du Sud';
$activePage = 'destinations';
require 'includes/head.php';
?>
<body>
<div class="page">
  <a class="section section-banner text-center d-none d-xl-block"></a>

  <header class="section page-header breadcrumbs-custom-wrap bg-gradient bg-secondary-2 novi-background bg-cover">
    <?php require 'includes/navbar.php'; ?>

    <section class="breadcrumbs-custom" style="background: url('images/500px_24581097.jpg'); background-size: cover;">
      <div class="container">
        <p class="breadcrumbs-custom-subtitle">Bienvenue en</p>
        <p class="heading-1 breadcrumbs-custom-title">Afrique du Sud</p>
        <ul class="breadcrumbs-custom-path">
          <li><a href="accueil.php">Accueil</a></li>
          <li class="active">Afrique du Sud</li>
        </ul>
      </div>
    </section>
  </header>


  <!-- === CONTENU === -->
  <section class="section section-lg bg-default">
    <div class="container container-bigger">
      <div class="row row-50 justify-content-md-center align-items-lg-center justify-content-xl-between flex-lg-row-reverse">
        <div class="col-md-10 col-lg-6 col-xl-5">
          <h3>Afrique du Sud : une aventure inoubliable</h3>
          <p class="heading-5">L'Afrique du Sud, c'est une terre d'aventure et de contrastes. Des montagnes du Drakensberg aux plages de la Garden Route, chaque coin de ce pays offre des paysages à couper le souffle. Embarquez pour un safari dans le parc Kruger ou découvrez l'énergie vibrante de Cape Town, dominée par la Table Mountain.</p>
          <a class="button button-default-outline button-nina" href="contacts.php">Contactez-nous</a>
        </div>
        <div class="col-md-10 col-lg-6">
          <img src="images/afrique-du-sud2.jpg" alt="Afrique du Sud" width="720" height="459">
        </div>
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
