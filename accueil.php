<?php
$pageTitle     = 'Accueil';
$withAnalytics = true;
require 'includes/head.php';
?>
<body>
<div class="page">
  <a class="section section-banner text-center d-none d-xl-block"
     href=""
     style="background-image: url(images/banner/background-04-1920x60.jpg);
            background-image: -webkit-image-set(url(images/banner/background-04-1920x60.jpg) 1x, url(images/banner/background-04-3840x120.jpg) 2x)">
  </a>

  <!-- En-tête -->
  <header class="section page-header">
    <?php require 'includes/navbar-home.php'; ?>
  </header>


  <!-- === CARROUSEL SWIPER === -->
  <section class="section">
    <div class="swiper-form-wrap">
      <div class="swiper-container swiper-slider swiper-slider_height-1 swiper-align-left swiper-align-left-custom context-dark bg-gray-darker"
           data-loop="false"
           data-autoplay="5500"
           data-simulate-touch="false"
           data-slide-effect="fade">
        <div class="swiper-wrapper">

          <div class="swiper-slide" data-slide-bg="images/imageviet1.png">
            <div class="swiper-slide-caption">
              <div class="container container-bigger swiper-main-section">
                <div class="row row-fix justify-content-sm-center justify-content-md-start">
                  <div class="col-md-6 col-lg-5 col-xl-4 col-xxl-5">
                    <h3>Plongez au cœur du Vietnam !</h3>
                    <a class="button button-default-outline button-nina button-sm" href="vo_vietnam.php">En savoir plus</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide" data-slide-bg="images/dji_fly_20240609_061410_0479_1717976276988_photo.jpeg">
            <div class="swiper-slide-caption">
              <div class="container container-bigger swiper-main-section">
                <div class="row row-fix justify-content-sm-center justify-content-md-start">
                  <div class="col-md-6 col-lg-5 col-xl-4 col-xxl-5">
                    <h3>Explorez le Monde comme Jamais</h3>
                    <p class="text-spacing-sm">Découvrez des destinations époustouflantes qui vous laisseront sans voix. De la romance de Paris aux paysages sauvages de la Patagonie, laissez-nous vous aider à créer des souvenirs inoubliables.</p>
                    <a class="button button-default-outline button-nina button-sm" href="contacts.php">Contactez-nous</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide" data-slide-bg="images/sanfransco.jpeg">
            <div class="swiper-slide-caption">
              <div class="container container-bigger swiper-main-section">
                <div class="row row-fix justify-content-sm-center justify-content-md-start">
                  <div class="col-md-6 col-lg-5 col-xl-4 col-xxl-5">
                    <h3>Voyage sur Mesure pour Vos Rêves</h3>
                    <p class="text-spacing-sm">Chaque voyageur est unique, et chaque voyage devrait l'être aussi. Choisissez parmi nos circuits personnalisables à travers les plus belles régions du globe, et vivez une expérience créée pour vous.</p>
                    <a class="button button-default-outline button-nina button-sm" href="contacts.php">Créez votre voyage</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-slide" data-slide-bg="images/accueil3.jpeg">
            <div class="swiper-slide-caption">
              <div class="container container-bigger swiper-main-section">
                <div class="row row-fix justify-content-sm-center justify-content-md-start">
                  <div class="col-md-6 col-lg-5 col-xl-4 col-xxl-5">
                    <h3>Les Secrets Cachés du Monde Attendent</h3>
                    <p class="text-spacing-sm">Aventurez-vous hors des sentiers battus avec nos destinations exclusives, loin des foules. Découvrez des plages immaculées, des montagnes majestueuses et des cultures fascinantes, à votre rythme.</p>
                    <a class="button button-default-outline button-nina button-sm" href="nos-services.php">Nos services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- Contrôles Swiper -->
        <div class="swiper-pagination-wrap">
          <div class="container container-bigger">
            <div class="row">
              <div class="col-sm-12">
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- === SECTION PRÉSENTATION === -->
  <section class="section section-lg bg-default">
    <div class="container container-bigger">
      <div class="row row-50 justify-content-md-center align-items-lg-center justify-content-xl-between flex-lg-row-reverse">
        <div class="col-md-10 col-lg-6 col-xl-5">
          <h3>Créez votre voyage sur-mesure !</h3>
          <p class="heading-5">J&amp;M Voyager</p>
          <p class="text-spacing-sm">Chez JM Voyager, nous réinventons votre expérience du voyage sur mesure ! Notre but est de vous offrir des expériences authentiques au cœur des traditions locales, explorer des endroits insoupçonnés et rencontrer des gens riches en histoire, pour vivre une expérience qui bouscule vos attentes. Et ça, ça fait toute la différence !</p>
          <a class="button button-default-outline button-nina" href="quisommesnous.php">En savoir plus</a>
        </div>
        <div class="col-md-10 col-lg-6">
          <img src="images/DSC03146.jpg" alt="JM Voyager — voyage sur mesure" width="720" height="459">
        </div>
      </div>
    </div>
  </section>


  <!-- === COMMENT ÇA MARCHE === -->
  <section class="section section-lg bg-gray-lighter novi-background bg-cover text-center">
    <div class="container container-wide">
      <h3>Comment organiser votre voyage ? C'est simple !</h3>
      <h4>On vous dit tout</h4>
      <div class="row row-50 justify-content-sm-center text-left">
        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal box-minimal-border">
            <div class="box-minimal-icon novi-icon mdi mdi-airplane"></div>
            <p class="big box-minimal-title">Imaginez votre voyage</p>
            <hr>
            <div class="box-minimal-text text-spacing-sm">Découvrez nos +50 destinations aux 4 coins du monde dans nos guides de voyage pour vous inspirer lors de votre prochaine aventure.</div>
          </article>
        </div>
        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal box-minimal-border">
            <div class="box-minimal-icon novi-icon mdi mdi-map"></div>
            <p class="big box-minimal-title">On vous guide</p>
            <hr>
            <div class="box-minimal-text text-spacing-sm">Prenez contact avec nos équipes de professionnels basés à Paris : nous sommes à votre disposition pour vous orienter au mieux dans votre périple.</div>
          </article>
        </div>
        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal box-minimal-border">
            <div class="box-minimal-icon novi-icon mdi mdi-city"></div>
            <p class="big box-minimal-title">On prépare votre voyage</p>
            <hr>
            <div class="box-minimal-text text-spacing-sm">Partagez-nous vos besoins lors d'un entretien téléphonique avec l'un de nos spécialistes. Nous créerons un parcours entièrement sur mesure.</div>
          </article>
        </div>
        <div class="col-sm-10 col-md-6 col-xl-3">
          <article class="box-minimal box-minimal-border">
            <div class="box-minimal-icon novi-icon mdi mdi-beach"></div>
            <p class="big box-minimal-title">Sans jamais vous quitter</p>
            <hr>
            <div class="box-minimal-text text-spacing-sm">Disponible 24h/24 et 7j/7, nous restons à vos côtés pour répondre à toutes vos questions avec notre assistance VIP — plus aucun stress !</div>
          </article>
        </div>
      </div>
    </div>
  </section>


  <!-- === NOS VOYAGES POPULAIRES === -->
  <section class="section section-variant-1 bg-default novi-background bg-cover">
    <div class="container container-wide">
      <div class="row row-fix justify-content-xl-end row-30 text-center text-xl-left">
        <div class="col-xl-8">
          <div class="parallax-text-wrap">
            <h3>Vos Voyages</h3>
            <span class="parallax-text">Les plus populaires</span>
          </div>
        </div>
        <div class="col-xl-3 text-xl-right">
          <a class="button button-secondary button-nina" href="contacts.php">Plus de voyages</a>
        </div>
      </div>

      <div class="row row-50">
        <?php
        $destinations = [
          ['img' => 'images/torre-eiffel-altura.png',   'label' => 'France, Paris'],
          ['img' => 'images/brasilnew.jpeg',             'label' => 'Brésil, Rio de Janeiro'],
          ['img' => 'images/afriquedusud570x370.png',   'label' => 'Afrique du Sud',         'link' => 'afriquedusud.php'],
          ['img' => 'images/espagneee.jpg',              'label' => 'Espagne, Benidorm'],
          ['img' => 'images/egypteee.png',               'label' => 'Égypte, Sharm El Sheikh'],
          ['img' => 'images/mexiquecancun.jpg',          'label' => 'Mexique, Cancun'],
        ];
        foreach ($destinations as $dest):
          $link = $dest['link'] ?? 'contacts.php';
        ?>
        <div class="col-md-6 col-xl-4">
          <article class="event-default-wrap">
            <div class="event-default">
              <figure class="event-default-image">
                <img src="<?= trim($dest['img']) ?>" alt="<?= htmlspecialchars($dest['label']) ?>" width="570" height="370">
              </figure>
              <div class="event-default-caption">
                <a class="button button-xs button-secondary button-nina" href="<?= $link ?>">En savoir plus</a>
              </div>
            </div>
            <div class="event-default-inner">
              <h5><a class="event-default-title" href="<?= $link ?>"><?= htmlspecialchars($dest['label']) ?></a></h5>
            </div>
          </article>
        </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>


  <?php require 'includes/cookie-banner.php'; ?>
  <?php require 'includes/footer.php'; ?>

</div>

<div class="snackbars" id="form-output-global"></div>
<script src="js/core.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
