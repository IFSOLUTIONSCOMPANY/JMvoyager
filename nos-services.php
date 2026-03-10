<?php
$pageTitle  = 'Nos Services';
$activePage = 'services';
require 'includes/head.php';
?>
<body>
<div class="page">

  <!-- En-tête + Navbar -->
  <header class="section page-header breadcrumbs-custom-wrap bg-gradient bg-secondary-2 novi-background bg-cover">
    <?php require 'includes/navbar.php'; ?>

    <section class="breadcrumbs-custom" style="background: url('images/DC2B8498-9B74-42E8-9865-5E26132CC941.jpeg'); background-size: cover;">
      <div class="container">
        <p class="breadcrumbs-custom-subtitle"></p>
        <p class="heading-1 breadcrumbs-custom-title">Nos Services</p>
        <ul class="breadcrumbs-custom-path">
          <li><a href="accueil.php">Accueil</a></li>
          <li class="active">Nos Services</li>
        </ul>
      </div>
    </section>
  </header>


  <!-- === NOS SERVICES === -->
  <section class="section section-lg section-lg-alternative bg-gray-lighter novi-background bg-cover">
    <div class="container container-wide">
      <div class="row row-50 justify-content-sm-center text-gray-light">

        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal">
            <div class="box-minimal-header">
              <div class="box-minimal-icon box-minimal-icon-lg novi-icon mdi mdi-airplane"></div>
              <h6 class="box-minimal-title">Imaginez votre voyage</h6>
            </div>
            <p>Découvrez nos +50 destinations aux 4 coins du monde dans nos guides de voyage pour vous inspirer lors de votre prochaine aventure.</p>
          </article>
        </div>

        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal">
            <div class="box-minimal-header">
              <div class="box-minimal-icon box-minimal-icon-lg novi-icon mdi mdi-map"></div>
              <h6 class="box-minimal-title">On vous guide</h6>
            </div>
            <p>Prenez contact avec nos équipes de professionnels basés à Paris : nous sommes à votre disposition pour vous orienter au mieux dans votre périple.</p>
          </article>
        </div>

        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal">
            <div class="box-minimal-header">
              <div class="box-minimal-icon box-minimal-icon-lg novi-icon mdi mdi-city"></div>
              <h6 class="box-minimal-title">On prépare votre voyage</h6>
            </div>
            <p>Partagez-nous vos besoins lors d'un entretien téléphonique avec l'un de nos spécialistes. Nous créerons un parcours entièrement sur mesure.</p>
          </article>
        </div>

        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal">
            <div class="box-minimal-header">
              <div class="box-minimal-icon box-minimal-icon-lg novi-icon mdi mdi-beach"></div>
              <h6 class="box-minimal-title">Jamais loin</h6>
            </div>
            <p>Disponible 24h/24 et 7j/7, nous restons à vos côtés pour répondre à toutes vos questions avec notre assistance VIP — plus aucun stress !</p>
          </article>
        </div>

      </div>
    </div>
  </section>


  <!-- === ÉQUIPE === -->
  <section class="section section-lg text-center novi-background bg-cover">
    <div class="container container-wide">
      <h3>Rencontrez notre équipe</h3>
      <div class="row row-50 row-xxl-90 justify-content-sm-center offset-custom-2">

        <div class="col-md-6 col-lg-3">
          <div class="team-classic team-classic-circle">
            <figure>
              <img class="rounded-circle" src="images/DSC03186.jpg" alt="Jason — Fondateur" width="300" height="300">
            </figure>
            <div class="team-classic-caption">
              <h5><a class="team-classic-title" href="#">Jason</a></h5>
              <p class="team-classic-job-position">Fondateur</p>
              <ul class="list-inline list-team">
                <li class="list-inline-item">
                  <a class="icon novi-icon icon-sm-bigger icon-gray-1 mdi mdi-instagram"
                     href="https://www.instagram.com/jayz_60?igsh=Y3B6aGVrc2E4cHUw"
                     aria-label="Instagram de Jason" target="_blank" rel="noopener"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="team-classic team-classic-circle">
            <figure>
              <img class="rounded-circle" src="images/DSC03199.jpg" alt="Moussa — Fondateur" width="300" height="300">
            </figure>
            <div class="team-classic-caption">
              <h5><a class="team-classic-title" href="#">Moussa</a></h5>
              <p class="team-classic-job-position">Fondateur</p>
              <ul class="list-inline list-team">
                <li class="list-inline-item">
                  <a class="icon novi-icon icon-sm-bigger icon-gray-1 mdi mdi-instagram"
                     href="https://www.instagram.com/lek1fry.fl?igsh=bWFwZjNldnFvN2Vw"
                     aria-label="Instagram de Moussa" target="_blank" rel="noopener"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- === TIMELINE === -->
  <section class="section section-lg bg-gray-700 novi-background bg-cover">
    <div class="container container-bigger">
      <div class="row row-fix row-50 justify-content-sm-center justify-content-xl-between">

        <div class="col-sm-10 col-md-12 col-xl-7">
          <h3>Agence JM Voyager</h3>
          <p class="text-gray-light">Découvrez notre démarche en trois étapes — de l'inspiration à votre départ, nous vous accompagnons à chaque instant.</p>

          <div class="time-line-vertical inset-md">
            <div class="time-line-vertical-element">
              <div class="unit unit-sm flex-column flex-md-row unit-spacing-xxl">
                <div class="unit-left">
                  <div class="time-line-time">
                    <time class="wow fadeInLeft" data-wow-delay=".0s">Inspirez-vous</time>
                  </div>
                </div>
                <div class="unit-body">
                  <div class="time-line-content wow fadeInRight" data-wow-delay=".6s">
                    <h5>Explorez un monde d'idées de voyages.</h5>
                    <p>Des plages paradisiaques aux montagnes majestueuses, découvrez nos destinations phares et laissez-vous émerveiller par des expériences uniques à travers nos guides exclusifs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="time-line-vertical-element">
              <div class="unit flex-column flex-md-row unit-spacing-xxl">
                <div class="unit-left">
                  <div class="time-line-time">
                    <time class="wow fadeInLeft" data-wow-delay=".1s">Imaginez votre projet</time>
                  </div>
                </div>
                <div class="unit-body">
                  <div class="time-line-content wow fadeInRight" data-wow-delay=".7s">
                    <h5>Créez un itinéraire qui vous ressemble.</h5>
                    <p>Racontez-nous vos envies, vos passions et vos attentes : nos experts conçoivent un voyage personnalisé, que ce soit pour explorer des cultures, savourer des aventures ou vous détendre pleinement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="time-line-vertical-element">
              <div class="unit flex-column flex-md-row unit-spacing-xxl">
                <div class="unit-left">
                  <div class="time-line-time">
                    <time class="wow fadeInLeft" data-wow-delay=".2s">Partez l'esprit libre</time>
                  </div>
                </div>
                <div class="unit-body">
                  <div class="time-line-content wow fadeInRight" data-wow-delay=".8s">
                    <h5>Voyagez sereinement grâce à notre accompagnement.</h5>
                    <p>Avant, pendant et après votre voyage, bénéficiez d'un suivi attentif et de conseils pratiques. Sur place, nos partenaires locaux veillent à chaque détail pour une expérience inoubliable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-10 col-md-12 col-xl-4">
          <div class="row row-30">
            <div class="col-md-4 col-xl-12 wow fadeInUp" data-wow-delay=".1s">
              <img src="images/DSC03121.jpg" alt="JM Voyager" width="420" height="280">
            </div>
            <div class="col-md-4 col-xl-12 wow fadeInUp" data-wow-delay=".2s">
              <img src="images/DSC03107.jpg" alt="JM Voyager" width="420" height="280">
            </div>
          </div>
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
