<?php
$pageTitle  = 'Voyage Vietnam';
$activePage = 'voyages';
require 'includes/head.php';
?>
<body>
<div class="page">
  <a class="section section-banner text-center d-none d-xl-block"></a>

  <header class="section page-header breadcrumbs-custom-wrap bg-gradient bg-secondary-2 novi-background bg-cover">
    <?php require 'includes/navbar.php'; ?>

    <section class="breadcrumbs-custom" style="background: url('images/image5viet.png'); background-size: cover;">
      <div class="container">
        <p class="breadcrumbs-custom-subtitle">Voyage organisé</p>
        <p class="heading-1 breadcrumbs-custom-title">Vietnam</p>
        <ul class="breadcrumbs-custom-path">
          <li><a href="accueil.php">Accueil</a></li>
          <li class="active">Vietnam</li>
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
          <h4><span class="font-weight-bold">Places limitées !</span> Ne manquez pas cette opportunité de vivre le Vietnam autrement.</h4>
          <p class="font-italic">Demandez plus d'informations en nous contactant dès maintenant. Nous organiserons un appel afin de développer le programme de ce fabuleux voyage et répondre à toutes vos questions.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- === FORMULAIRE VIETNAM === -->
  <section class="section section-wrap bg-gray-lighter novi-background bg-cover">
    <div class="section-wrap-inner">
      <div class="container container-bigger">
        <div class="row row-fix row-50">
          <div class="col-lg-8 col-xl-7">
            <div class="section-wrap-content section-lg">
              <h3>Participer au voyage Vietnam</h3>
              <hr class="divider divider-left divider-secondary">
              <p class="big">Merci de remplir le formulaire ci-dessous si vous souhaitez participer ou recevoir plus d'informations.</p>

              <!--
                IMPORTANT : ne pas modifier action, method ni les attributs name des champs.
                Le formulaire est soumis via Formspree (ID : mannbyeq).
              -->
              <form id="voyage-form-vietnam" class="rd-mailform" action="https://formspree.io/f/mannbyeq" method="POST" novalidate>
                <div class="row row-fix row-20">

                  <div class="col-md-6">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-nom">Nom</label>
                      <input class="form-input" id="form-nom" type="text" name="nom" required placeholder="Votre nom complet" aria-required="true">
                      <div class="invalid-feedback" style="display:none;">Veuillez renseigner votre nom.</div>
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-email">E-mail</label>
                      <input class="form-input" id="form-email" type="email" name="email" required placeholder="Votre adresse e-mail" aria-required="true">
                      <div class="invalid-feedback" style="display:none;">Veuillez saisir un e-mail valide.</div>
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-telephone">Téléphone</label>
                      <input class="form-input" id="form-telephone" type="tel" name="telephone" required pattern="[0-9\s\-\+]{8,}" placeholder="Votre numéro de téléphone" aria-required="true">
                      <div class="invalid-feedback" style="display:none;">Numéro requis (8 chiffres minimum).</div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside">Souhaitez-vous participer au voyage ?</label>
                      <div class="form-input radio-group-voyage">
                        <span class="radio-btn-voyage">
                          <input type="radio" id="participation-oui" name="participation" value="Oui" required>
                          <label for="participation-oui">Oui</label>
                        </span>
                        <span class="radio-btn-voyage">
                          <input type="radio" id="participation-non" name="participation" value="Non">
                          <label for="participation-non">Non</label>
                        </span>
                        <span class="radio-btn-voyage">
                          <input type="radio" id="participation-info" name="participation" value="Je veux plus d'informations">
                          <label for="participation-info">Plus d'informations</label>
                        </span>
                      </div>
                      <div class="invalid-feedback" style="display:none;">Merci de sélectionner une option.</div>
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-message">Message ou remarques</label>
                      <textarea class="form-input" id="form-message" name="message" placeholder="Laissez-nous un message si nécessaire"></textarea>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-button text-center">
                      <button class="button button-secondary button-nina" id="btn-submit-vietnam" type="submit">Envoyer</button>
                      <span id="form-loader-vietnam" style="display:none; margin-left:10px;">Envoi en cours...</span>
                    </div>
                  </div>

                </div>
              </form>

              <div id="form-result-vietnam" style="display:none; margin-top:20px;"></div>
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
            <li><span class="font-weight-bold">Dates :</span> du 06 Décembre 2025 au 18 Décembre 2025</li>
            <li><span class="font-weight-bold">Prix :</span> 2 099 €</li>
            <li>
              <span class="font-weight-bold">Étapes clés :</span>
              <ul class="list-marked">
                <li>Découverte d'Hanoi, ses ruelles et ses temples</li>
                <li>Sa Pa, entre rizières et montagnes</li>
                <li>Exploration de Ninh Binh</li>
                <li>Croisière sur la Baie d'Halong</li>
                <li>Da Nang et ses plages</li>
                <li>Hoi An, le bijou du Vietnam</li>
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
            <li><span class="font-weight-bold">Expertise locale :</span> Guides francophones passionnés et expérimentés</li>
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
        <?php foreach (['images/image_vietnam01.png', 'images/image_vietnam02.png', 'images/image_vietnam03.png'] as $photo): ?>
        <div class="col-md-6 col-xl-4">
          <article class="event-default-wrap">
            <div class="event-default">
              <figure class="event-default-image">
                <img src="<?= $photo ?>" alt="Vietnam">
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
/* Validation et soumission formulaire Vietnam */
(function () {
  var form = document.getElementById('voyage-form-vietnam');
  var loader = document.getElementById('form-loader-vietnam');
  var btn = document.getElementById('btn-submit-vietnam');
  var formResult = document.getElementById('form-result-vietnam');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var valid = true;

    /* Nom */
    var nom = form.nom;
    if (!nom.value.trim()) {
      nom.classList.add('is-invalid');
      nom.nextElementSibling.style.display = 'block';
      valid = false;
    } else {
      nom.classList.remove('is-invalid');
      nom.nextElementSibling.style.display = 'none';
    }

    /* Email */
    var email = form.email;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('is-invalid');
      email.nextElementSibling.style.display = 'block';
      valid = false;
    } else {
      email.classList.remove('is-invalid');
      email.nextElementSibling.style.display = 'none';
    }

    /* Téléphone */
    var tel = form.telephone;
    if (tel.value.replace(/\D/g, '').length < 8) {
      tel.classList.add('is-invalid');
      tel.nextElementSibling.style.display = 'block';
      valid = false;
    } else {
      tel.classList.remove('is-invalid');
      tel.nextElementSibling.style.display = 'none';
    }

    /* Participation */
    var radios = form.querySelectorAll('input[name="participation"]');
    var checked = Array.from(radios).some(function (r) { return r.checked; });
    var partWrap = radios[0].closest('.form-wrap');
    if (!checked) {
      partWrap.querySelector('.invalid-feedback').style.display = 'block';
      valid = false;
    } else {
      partWrap.querySelector('.invalid-feedback').style.display = 'none';
    }

    if (!valid) return;

    loader.style.display = 'inline';
    btn.disabled = true;

    fetch(form.getAttribute('action'), {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(function (response) {
      loader.style.display = 'none';
      btn.disabled = false;
      formResult.style.display = 'block';
      if (response.ok) {
        formResult.innerHTML = '<p class="form-result-success">Merci pour votre réponse ! Nous vous recontacterons prochainement.</p>';
        form.reset();
      } else {
        formResult.innerHTML = '<p class="form-result-error">Une erreur s\'est produite. Veuillez réessayer.</p>';
      }
    })
    .catch(function () {
      loader.style.display = 'none';
      btn.disabled = false;
      formResult.style.display = 'block';
      formResult.innerHTML = '<p class="form-result-error">Impossible d\'envoyer le formulaire pour le moment.</p>';
    });
  });
})();
</script>
</body>
</html>
