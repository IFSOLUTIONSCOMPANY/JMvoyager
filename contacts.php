<?php
$pageTitle  = 'Contactez-nous';
$activePage = 'contacts';
require 'includes/head.php';
?>
<body>
<div class="page">

  <!-- En-tête + Navbar -->
  <header class="section page-header breadcrumbs-custom-wrap bg-gradient bg-secondary-2 novi-background bg-cover">
    <?php require 'includes/navbar.php'; ?>

    <!-- Fil d'ariane -->
    <section class="breadcrumbs-custom" style="background: url('images/photocontact.jpeg'); background-size: cover;">
      <div class="container">
        <p class="breadcrumbs-custom-subtitle">Formulaire de</p>
        <p class="heading-1 breadcrumbs-custom-title">Contacts</p>
        <ul class="breadcrumbs-custom-path">
          <li><a href="accueil.php">Accueil</a></li>
          <li class="active">Contacts</li>
        </ul>
      </div>
    </section>
  </header>


  <!-- === INFO CONTACT === -->
  <section class="section section-lg bg-default text-center">
    <div class="container container-wide">
      <div class="row row-fix row-50 row-custom-bordered">

        <div class="col-sm-6 col-lg-3">
          <article class="box-simple">
            <div class="box-simple-icon novi-icon mdi mdi-map-marker"></div>
            <h6>Adresse</h6>
            <div class="box-simple-text"><a href="#">France — Paris / Oise</a></div>
          </article>
        </div>

        <div class="col-sm-6 col-lg-3">
          <article class="box-simple">
            <div class="box-simple-icon novi-icon mdi mdi-phone"></div>
            <h6>Téléphone</h6>
            <div class="box-simple-text">
              <ul class="list-comma list-0">
                <li><a href="tel:0670331337">06 70 33 13 37</a></li>
              </ul>
            </div>
          </article>
        </div>

        <div class="col-sm-6 col-lg-3">
          <article class="box-simple">
            <div class="box-simple-icon novi-icon mdi mdi-email-open"></div>
            <h6>E-mail</h6>
            <div class="box-simple-text">
              <ul class="list-comma list-0">
                <li><a href="mailto:jetmvoyager@outlook.fr">jetmvoyager@outlook.fr</a></li>
              </ul>
            </div>
          </article>
        </div>

        <div class="col-sm-6 col-lg-3">
          <article class="box-simple">
            <div class="box-simple-icon novi-icon mdi mdi-calendar-clock"></div>
            <h6>Nos horaires</h6>
            <div class="box-simple-text">
              <ul class="list-0">
                <li>Lun–Ven : 09h00–20h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
          </article>
        </div>

      </div>
    </div>
  </section>


  <!-- === FORMULAIRE DE CONTACT === -->
  <section class="section section-wrap bg-gray-lighter novi-background bg-cover">
    <div class="section-wrap-inner">
      <div class="container container-bigger">
        <div class="row row-fix row-50">
          <div class="col-lg-8 col-xl-7">
            <div class="section-wrap-content section-lg">

              <h3>Contactez-Nous</h3>
              <hr class="divider divider-left divider-secondary">
              <p class="big">Vous pouvez nous contacter de la manière qui vous convient le mieux. Nous sommes disponibles sur nos heures d'ouverture ou par e-mail.</p>

              <!--
                IMPORTANT : ne pas modifier action, method ni les attributs name des champs.
                Le formulaire est soumis via Formspree (ID : xzzbyzde).
              -->
              <form id="contact-form" class="rd-mailform" action="https://formspree.io/f/xzzbyzde" method="POST" novalidate>
                <div class="row row-fix row-20">

                  <!-- Colonne 1 -->
                  <div class="col-md-6">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-name">Nom</label>
                      <input class="form-input" id="form-1-name" type="text" name="name" required placeholder="Votre nom" data-constraints="@Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-email">E-mail</label>
                      <input class="form-input" id="form-1-email" type="email" name="email" required placeholder="Votre adresse e-mail" data-constraints="@Email @Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-destination">Destination</label>
                      <select class="form-input" id="form-1-destination" name="destination" required data-constraints="@Required">
                        <optgroup label="Afrique">
                          <option value="Afrique du Sud">Afrique du Sud</option>
                          <option value="Eswatini">Eswatini</option>
                          <option value="Éthiopie">Éthiopie</option>
                          <option value="Kenya">Kenya</option>
                          <option value="La Réunion">La Réunion</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Maroc">Maroc</option>
                          <option value="Namibie">Namibie</option>
                          <option value="Tanzanie">Tanzanie</option>
                          <option value="Zanzibar">Zanzibar</option>
                        </optgroup>
                        <optgroup label="Amérique Centrale">
                          <option value="Belize">Belize</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Panama">Panama</option>
                        </optgroup>
                        <optgroup label="Amérique du Nord">
                          <option value="États-Unis">États-Unis</option>
                          <option value="Mexique">Mexique</option>
                        </optgroup>
                        <optgroup label="Amérique du Sud">
                          <option value="Argentine">Argentine</option>
                          <option value="Bolivie">Bolivie</option>
                          <option value="Colombie">Colombie</option>
                          <option value="Équateur">Équateur</option>
                          <option value="Pérou">Pérou</option>
                          <option value="Venezuela">Venezuela</option>
                        </optgroup>
                        <optgroup label="Asie">
                          <option value="Inde">Inde</option>
                          <option value="Japon">Japon</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Thaïlande">Thaïlande</option>
                          <option value="Cambodge">Cambodge</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-arrival-date">Date d'arrivée sur place</label>
                      <input class="form-input" id="form-1-arrival-date" type="date" name="arrival-date" required data-constraints="@Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-participants">Participants</label>
                      <input class="form-input" id="form-1-participants" type="number" name="participants" min="1" value="1" required data-constraints="@Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-preparation">Où en êtes-vous dans la préparation ?</label>
                      <select class="form-input" id="form-1-preparation" name="preparation" required data-constraints="@Required">
                        <option value="Bien avancé, je souhaite préparer mon voyage">Bien avancé — je souhaite préparer mon voyage</option>
                        <option value="Je commence à chercher des informations">Je commence à chercher des informations</option>
                        <option value="Je compare plusieurs options">Je compare plusieurs options</option>
                      </select>
                    </div>
                  </div>

                  <!-- Colonne 2 -->
                  <div class="col-md-6">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-last-name">Prénom</label>
                      <input class="form-input" id="form-1-last-name" type="text" name="last-name" required placeholder="Votre prénom" data-constraints="@Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-phone">Téléphone</label>
                      <input class="form-input" id="form-1-phone" type="tel" name="phone" required placeholder="Ex : 06 12 34 56 78" data-constraints="@Numeric @Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-profile">Votre profil</label>
                      <select class="form-input" id="form-1-profile" name="profile" required data-constraints="@Required">
                        <option value="En famille">En famille</option>
                        <option value="En couple">En couple</option>
                        <option value="Entre amis">Entre amis</option>
                      </select>
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-nights">Nombre de nuits sur place</label>
                      <input class="form-input" id="form-1-nights" type="number" name="nights" min="1" value="1" required data-constraints="@Required">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-children">Enfants de moins de 12 ans</label>
                      <input class="form-input" id="form-1-children" type="number" name="children" min="0" value="0">
                    </div>
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside">Avez-vous déjà réservé un vol international ?</label>
                      <div class="form-input radio-group-voyage">
                        <span class="radio-btn-voyage">
                          <input type="radio" id="flight-oui" name="flight-booked" value="Oui" required data-constraints="@Required">
                          <label for="flight-oui">Oui</label>
                        </span>
                        <span class="radio-btn-voyage">
                          <input type="radio" id="flight-non" name="flight-booked" value="Non" data-constraints="@Required">
                          <label for="flight-non">Non</label>
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Message + Budget -->
                  <div class="col-sm-12">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-message">Message pour votre conseiller</label>
                      <textarea class="form-input" id="form-1-message" name="message" required placeholder="Décrivez votre projet de voyage..." data-constraints="@Required"></textarea>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-wrap form-wrap-validation">
                      <label class="form-label-outside" for="form-1-budget">Budget par personne (hors vol international)</label>
                      <input class="form-input" id="form-1-budget" type="text" name="budget" placeholder="Ex : 1 500 €">
                      <label class="cookie-banner__checkbox" style="margin-top:8px;">
                        <input type="checkbox" name="unknown-budget"> Je ne sais pas encore
                      </label>
                    </div>
                  </div>

                  <!-- Bouton envoi -->
                  <div class="col-sm-12 offset-custom-1">
                    <div class="form-button">
                      <button class="button button-secondary button-nina" type="submit">Envoyer le formulaire</button>
                    </div>
                  </div>

                </div>
              </form>

              <!-- Résultat de soumission -->
              <div id="form-result" style="display:none; margin-top:20px;"></div>

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
<script>
/* Soumission formulaire contact via Formspree */
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var form = event.target;
  var formData = new FormData(form);
  var actionUrl = form.getAttribute('action');
  var formResult = document.getElementById('form-result');

  fetch(actionUrl, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(function (response) {
    formResult.style.display = 'block';
    if (response.ok) {
      formResult.innerHTML = '<p class="form-result-success">Merci pour votre demande, nous reviendrons vers vous dès qu\'un de nos conseillers sera disponible.</p>';
      form.reset();
    } else {
      formResult.innerHTML = '<p class="form-result-error">Une erreur s\'est produite. Veuillez réessayer.</p>';
    }
  })
  .catch(function () {
    formResult.style.display = 'block';
    formResult.innerHTML = '<p class="form-result-error">Impossible d\'envoyer le formulaire pour le moment. Veuillez réessayer plus tard.</p>';
  });
});
</script>
</body>
</html>
