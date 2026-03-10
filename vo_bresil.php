<?php
$pageTitle  = 'Voyage Brésil';
$activePage = 'voyages';
require 'includes/head.php';
?>
<body>
<div class="page">
  <a class="section section-banner text-center d-none d-xl-block"></a>

  <header class="section page-header breadcrumbs-custom-wrap bg-gradient bg-secondary-2 novi-background bg-cover">
    <?php require 'includes/navbar.php'; ?>

    <section class="breadcrumbs-custom" style="background: url('images/dji_fly_20240606_142842_0400_1717697219860_photo.JPG'); background-size: cover;">
      <div class="container">
        <p class="breadcrumbs-custom-subtitle">Voyage organisé</p>
        <p class="heading-1 breadcrumbs-custom-title">Brésil</p>
        <ul class="breadcrumbs-custom-path">
          <li><a href="accueil.php">Accueil</a></li>
          <li class="active">Brésil</li>
        </ul>
      </div>
    </section>
  </header>


  <!-- === INSCRIPTION === -->
  <section class="section section-lg bg-default">
    <div class="container">
      <div class="row row-50 row-fix">
        <div class="col-lg-10 col-xl-8">
          <h3>Réservez votre place maintenant</h3>
          <h4><span class="font-weight-bold">Places limitées !</span> Ne manquez pas cette opportunité de vivre le Brésil autrement.</h4>
          <p class="font-italic">Demandez plus d'informations en nous contactant dès maintenant. Nous organiserons un appel afin de développer le programme de ce fabuleux voyage et répondre à toutes vos questions.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- === FORMULAIRE BRÉSIL === -->
  <section class="section section-wrap bg-gray-lighter novi-background bg-cover">
    <div class="section-wrap-inner">
      <div class="container container-bigger">
        <div class="row row-fix row-50">
          <div class="col-lg-8 col-xl-7">
            <div class="section-wrap-content section-lg">
              <h3>Participer au voyage Brésil</h3>
              <hr class="divider divider-left divider-secondary">
              <p class="big">Merci de remplir le formulaire ci-dessous si vous souhaitez participer ou recevoir plus d'informations.</p>

              <!--
                IMPORTANT : ne pas modifier action, method ni les attributs name des champs.
                Le formulaire est soumis via Formspree (ID : mannbyeq).
              -->
              <form id="voyage-form-bresil" class="rd-mailform" action="https://formspree.io/f/mannbyeq" method="POST" novalidate>
                <div class="row row-fix row-20">

                  <div class="col-md-6">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-nom">Nom</label>
                      <input class="form-input" id="form-nom" type="text" name="nom" required placeholder="Votre nom complet" data-constraints="@Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-email">E-mail</label>
                      <input class="form-input" id="form-email" type="email" name="email" required placeholder="Votre adresse e-mail" data-constraints="@Email @Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-telephone">Téléphone</label>
                      <input class="form-input" id="form-telephone" type="tel" name="telephone" required placeholder="Votre numéro de téléphone" data-constraints="@Numeric @Required">
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside">Souhaitez-vous participer au voyage ?</label>
                      <div class="form-input radio-group-voyage">
                        <span class="radio-btn-voyage">
                          <input type="radio" id="part-oui" name="participation" value="Oui" required data-constraints="@Required">
                          <label for="part-oui">Oui</label>
                        </span>
                        <span class="radio-btn-voyage">
                          <input type="radio" id="part-non" name="participation" value="Non">
                          <label for="part-non">Non</label>
                        </span>
                        <span class="radio-btn-voyage">
                          <input type="radio" id="part-info" name="participation" value="Je veux plus d'informations">
                          <label for="part-info">Plus d'informations</label>
                        </span>
                      </div>
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-message">Message ou remarques</label>
                      <textarea class="form-input" id="form-message" name="message" placeholder="Laissez-nous un message si nécessaire"></textarea>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-button">
                      <button class="button button-secondary button-nina" type="submit">Envoyer</button>
                    </div>
                  </div>

                </div>
              </form>

              <div id="form-result-bresil" style="display:none; margin-top:20px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- === APERÇU DU VOYAGE === -->
  <section class="section section-lg bg-default">
    <div class="container">
      <div class="row row-50 row-fix">
        <div class="col-lg-10 col-xl-8">
          <h3>Aperçu du voyage</h3>
          <ul class="list-marked">
            <li><span class="font-weight-bold">Dates :</span> du 13 Août 2025 au 23 Août 2025</li>
            <li><span class="font-weight-bold">Prix :</span> 2 450 €</li>
            <li>
              <span class="font-weight-bold">Étapes clés :</span>
              <ul class="list-marked">
                <li>Découverte de la favela de Santa Marta</li>
                <li>Excursion à Paraty avec tour de bateau privatif</li>
                <li>Visite du Corcovado</li>
                <li>Lieux emblématiques : escalier Selarón, Ipanema…</li>
                <li>Activité extrême : tour d'hélicoptère au-dessus de Rio</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  <!-- === CE QUI EST INCLUS === -->
  <section class="section section-lg bg-default">
    <div class="container">
      <h3>Ce qui est inclus &#x2705;</h3>
      <div class="row row-30">
        <?php foreach (['Vols internationaux + internes', 'Hébergement en hôtel', 'Transport', 'Excursions et activités'] as $item): ?>
        <div class="col-sm-9 col-md-6 col-lg-4">
          <article class="box-minimal">
            <div class="box-minimal-header">
              <h6 class="box-minimal-title"><?= htmlspecialchars($item) ?></h6>
            </div>
          </article>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <!-- === CE QUI N'EST PAS INCLUS === -->
  <section class="section section-lg bg-default">
    <div class="container">
      <h3>Ce qui n'est pas inclus &#x274C;</h3>
      <div class="row row-30">
        <?php foreach (['Assurances voyage', 'Nourriture', 'Dépenses personnelles'] as $item): ?>
        <div class="col-sm-9 col-md-6 col-lg-4">
          <article class="box-minimal">
            <div class="box-minimal-header">
              <h6 class="box-minimal-title"><?= htmlspecialchars($item) ?></h6>
            </div>
          </article>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <!-- === POURQUOI NOUS === -->
  <section class="section section-lg bg-default">
    <div class="container">
      <div class="row row-50 row-fix">
        <div class="col-lg-10 col-xl-8">
          <h3>Pourquoi choisir notre agence ?</h3>
          <ul class="list-marked">
            <li><span class="font-weight-bold">Expertise locale :</span> Guides passionnés et expérimentés</li>
            <li><span class="font-weight-bold">Groupes restreints :</span> Pour une expérience plus authentique</li>
            <li><span class="font-weight-bold">Flexibilité :</span> Programme ajustable selon vos besoins</li>
            <li><span class="font-weight-bold">Engagement durable :</span> Voyages respectueux des communautés locales et de l'environnement</li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  <!-- === GALERIE === -->
  <section class="section section-variant-1 bg-default novi-background bg-cover">
    <div class="container container-wide">
      <div class="row row-fix justify-content-xl-end row-30 text-center text-xl-left">
        <div class="col-xl-8">
          <div class="parallax-text-wrap">
            <h3>Galerie photos</h3>
          </div>
        </div>
        <div class="col-xl-3 text-xl-right">
          <a class="button button-secondary button-nina" href="contacts.php">Plus de voyages</a>
        </div>
      </div>
      <div class="row row-50">
        <?php
        $photos = [
          'images/dji_fly_20240606_163512_0411_1717710955721_photo.JPG',
          'images/dji_fly_20240606_163520_0413_1717710955303_photo.JPG',
          'images/dji_fly_20240606_171846_0424_1717710889516_photo.JPG',
          'images/dji_fly_20240609_061410_0479_1717976276988_photo.jpeg',
          'images/dji_fly_20240606_142842_0400_1717697219860_photo.JPG',
          'images/dji_fly_20240606_163518_0412_1717710955549_photo.JPG',
        ];
        foreach ($photos as $photo): ?>
        <div class="col-md-6 col-xl-4">
          <article class="event-default-wrap">
            <div class="event-default">
              <figure class="event-default-image">
                <img src="<?= $photo ?>" alt="Brésil" width="570" height="370">
              </figure>
            </div>
          </article>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <?php require 'includes/footer.php'; ?>

</div>

<div class="snackbars" id="form-output-global"></div>
<script src="js/core.min.js"></script>
<script src="js/script.js"></script>
<script>
document.getElementById('voyage-form-bresil').addEventListener('submit', function (event) {
  event.preventDefault();
  var form = event.target;
  var formResult = document.getElementById('form-result-bresil');

  fetch(form.getAttribute('action'), {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(function (response) {
    formResult.style.display = 'block';
    if (response.ok) {
      formResult.innerHTML = '<p class="form-result-success">Merci pour votre réponse ! Nous vous recontacterons prochainement.</p>';
      form.reset();
    } else {
      formResult.innerHTML = '<p class="form-result-error">Une erreur s\'est produite. Veuillez réessayer.</p>';
    }
  })
  .catch(function () {
    formResult.style.display = 'block';
    formResult.innerHTML = '<p class="form-result-error">Impossible d\'envoyer le formulaire pour le moment.</p>';
  });
});
</script>
</body>
</html>
