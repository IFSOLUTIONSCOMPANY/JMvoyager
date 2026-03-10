<?php
/**
 * includes/head.php
 * En-tête HTML commun à toutes les pages.
 * Variables attendues: $pageTitle, $withAnalytics (bool, défaut false), $extraStyle (string, défaut '')
 */
$pageTitle     = $pageTitle    ?? 'JM Voyager';
$withAnalytics = $withAnalytics ?? false;
$extraStyle    = $extraStyle   ?? '';
?>
<!DOCTYPE html>
<html class="wide wow-animation" lang="fr">
<head>
  <meta charset="utf-8">
  <title><?= htmlspecialchars($pageTitle) ?> — JM Voyager</title>
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="google-site-verification" content="LQZ5y_5qOfr9053G7_pVQUR6oSWkNZIQ898r3bUElGI">
  <link rel="icon" href="images/Logo.png" type="image/x-icon">

  <!-- Google Fonts -->
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Oswald:200,400%7CLato:300,400,300italic,700%7CMontserrat:900&display=swap">
  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/fonts.css">
  <link rel="stylesheet" href="css/custom.css">
<?php if ($extraStyle): ?>
  <style><?= $extraStyle ?></style>
<?php endif; ?>

<?php if ($withAnalytics): ?>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RWCPRJV0C0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RWCPRJV0C0');
  </script>
<?php endif; ?>
</head>
